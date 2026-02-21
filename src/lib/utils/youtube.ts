export interface YouTubeVideo {
    title: string;
    link: string;
    thumbnail: string;
    pubDate: string;
    viewCount?: string;
    isLive?: boolean;
}

export interface ChannelStatus {
    isLive: boolean;
    latestVideo: YouTubeVideo | null;
}

function isValidId(id: string): boolean {
    return /^[a-zA-Z0-9_-]+$/.test(id);
}

function isValidUrl(url: string): boolean {
    return /^https?:\/\//.test(url);
}

export async function getChannelData(channelId: string): Promise<ChannelStatus> {
    if (!isValidId(channelId)) {
        console.warn('Invalid channel ID provided:', channelId);
        return {
            isLive: false,
            latestVideo: null
        };
    }

    let scrapedData: ChannelStatus | null = null;

    // 1. Try to scrape the /streams page via corsproxy.io to get the latest STREAM specifically
    try {
        // Use channel ID based URL to be safe
        const streamsUrl = `https://www.youtube.com/channel/${channelId}/streams`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(streamsUrl)}`;

        const response = await fetch(proxyUrl);
        if (response.ok) {
            const text = await response.text();
            const match = text.match(/var ytInitialData = ({.*?});/);
            if (match && match[1]) {
                const json = JSON.parse(match[1]);

                // Navigate to the grid content
                const tabs = json.contents?.twoColumnBrowseResultsRenderer?.tabs;
                const activeTab = tabs?.find((t: any) => t.tabRenderer?.selected);

                if (activeTab) {
                    const contents = activeTab.tabRenderer.content?.richGridRenderer?.contents;

                    if (contents && contents.length > 0) {
                         // The first item is usually the latest stream
                         // It's wrapped in richItemRenderer -> content -> videoRenderer
                         const firstItem = contents.find((c: any) => c.richItemRenderer?.content?.videoRenderer)?.richItemRenderer?.content?.videoRenderer;

                         if (firstItem && firstItem.videoId && isValidId(firstItem.videoId)) {
                             const videoId = firstItem.videoId;
                             const title = firstItem.title?.runs[0]?.text || '';
                             const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

                             const isLive = firstItem.thumbnailOverlays?.some((o: any) =>
                                 o.thumbnailOverlayTimeStatusRenderer?.style === 'LIVE' ||
                                 o.thumbnailOverlayTimeStatusRenderer?.text?.simpleText === 'LIVE'
                             );

                             // Try to get date.
                             let pubDate = new Date().toISOString(); // Default to now if parsing fails

                             if (firstItem.upcomingEventData && firstItem.upcomingEventData.startTime) {
                                 pubDate = new Date(parseInt(firstItem.upcomingEventData.startTime) * 1000).toISOString();
                             }
                             // For archived streams, publishedTimeText is "Streamed X ago", which is hard to parse to exact date.
                             // We keep the default (now) or maybe we can leave it?
                             // The UI uses: new Date(latestVideo.pubDate).toLocaleDateString('ja-JP')
                             // If we assume the latest stream is recent, using current date is an acceptable approximation if real date is missing.

                             scrapedData = {
                                 isLive,
                                 latestVideo: {
                                     title,
                                     link: `https://www.youtube.com/watch?v=${videoId}`,
                                     thumbnail,
                                     pubDate,
                                     isLive
                                 }
                             };
                         }
                    }
                }
            }
        }
    } catch (e) {
        console.warn('Failed to scrape streams page:', e);
    }

    if (scrapedData) {
        return scrapedData;
    }

    // 2. Fallback to RSS feed if scraping fails
    try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const rssJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const rssResponse = await fetch(rssJsonUrl);
        const rssData = await rssResponse.json();

        let latestVideo: YouTubeVideo | null = null;

        if (rssData.items && rssData.items.length > 0) {
            const item = rssData.items[0];
            const parts = item.guid.split(':');
            const videoId = parts.length > 2 ? parts[2] : null;

            if (videoId && isValidId(videoId) && isValidUrl(item.link)) {
                const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

                latestVideo = {
                    title: item.title,
                    link: item.link,
                    thumbnail: thumbnail,
                    pubDate: item.pubDate
                };
            }
        }

        return {
            isLive: false, // RSS doesn't support live status well
            latestVideo
        };
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        return {
            isLive: false,
            latestVideo: null
        };
    }
}
