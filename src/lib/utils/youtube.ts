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

function isValidChannelId(channelId: string): boolean {
    return /^[a-zA-Z0-9_-]+$/.test(channelId);
}

function isValidVideoId(videoId: string): boolean {
    // YouTube video IDs are typically 11 characters, base64-ish (alphanumeric + - _)
    // We allow a bit more flexibility but restrict special characters.
    return /^[a-zA-Z0-9_-]+$/.test(videoId);
}

export async function getChannelData(channelId: string): Promise<ChannelStatus> {
    if (!isValidChannelId(channelId)) {
        console.warn('Invalid channel ID provided.');
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

                         if (firstItem) {
                             const videoId = firstItem.videoId;

                             if (videoId && isValidVideoId(videoId)) {
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
        }
    } catch (e) {
        console.warn('Failed to scrape streams page.');
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
            // Safe navigation and validation
            if (item.guid && typeof item.guid === 'string') {
                const parts = item.guid.split(':');
                if (parts.length > 2) {
                    const videoId = parts[2];

                    if (isValidVideoId(videoId)) {
                         const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

                         latestVideo = {
                             title: item.title,
                             link: item.link, // item.link is usually safe if from YouTube RSS, but we could reconstruct it: `https://www.youtube.com/watch?v=${videoId}`
                             thumbnail: thumbnail,
                             pubDate: item.pubDate
                         };

                         // Reconstruct link to be sure
                         if (latestVideo) {
                             latestVideo.link = `https://www.youtube.com/watch?v=${videoId}`;
                         }
                    }
                }
            }
        }

        return {
            isLive: false, // RSS doesn't support live status well
            latestVideo
        };
    } catch (error) {
        console.error('Error fetching YouTube data.');
        return {
            isLive: false,
            latestVideo: null
        };
    }
}
