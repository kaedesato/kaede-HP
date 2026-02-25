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

function decodeHtmlEntities(text: string): string {
    return text.replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'");
}

export function extractLatestVideoFromXml(xml: string): YouTubeVideo | null {
    // Extract the first <entry> block
    const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/);
    if (!entryMatch) return null;

    const entry = entryMatch[1];

    // Extract fields
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
    // Link is usually alternate
    const linkMatch = entry.match(/<link rel="alternate" href="(.*?)"\/>/);

    if (titleMatch && videoIdMatch && publishedMatch) {
        const videoId = videoIdMatch[1];
        return {
            title: decodeHtmlEntities(titleMatch[1]),
            link: linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${videoId}`,
            thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
            pubDate: publishedMatch[1],
            isLive: false
        };
    }
    return null;
}

export async function getChannelData(channelId: string): Promise<ChannelStatus> {
    if (!isValidChannelId(channelId)) {
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

                         if (firstItem) {
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

    // 2. Fallback to RSS feed via corsproxy.io (XML parsing)
    try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`;

        const response = await fetch(proxyUrl);
        if (response.ok) {
            const xml = await response.text();
            const latestVideo = extractLatestVideoFromXml(xml);

            return {
                isLive: false, // RSS doesn't support live status well
                latestVideo
            };
        }
    } catch (error) {
        console.error('Error fetching YouTube RSS:', error);
    }

    return {
        isLive: false,
        latestVideo: null
    };
}
