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

export async function getChannelData(channelId: string): Promise<ChannelStatus> {
    try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const rssJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        // Fetch RSS feed for latest video
        const rssResponse = await fetch(rssJsonUrl);
        const rssData = await rssResponse.json();

        let latestVideo: YouTubeVideo | null = null;

        if (rssData.items && rssData.items.length > 0) {
            const item = rssData.items[0];
            // Get higher quality thumbnail if possible. rss2json returns hqdefault.
            // standard thumbnail: https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg
            // maxres: https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg
            const videoId = item.guid.split(':')[2];
            const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

            latestVideo = {
                title: item.title,
                link: item.link,
                thumbnail: thumbnail, // Try maxres, fallback to item.thumbnail if needed in UI
                pubDate: item.pubDate
            };
        }

        // Fetch channel page for live status (best effort)
        // Using allorigins to bypass CORS
        let isLive = false;
        try {
            const channelUrl = `https://www.youtube.com/channel/${channelId}`;
            const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(channelUrl)}`;
            const response = await fetch(proxyUrl);
            const text = await response.text();

            // Check for specific live stream indicators in the HTML
            // "isLive":true is a strong indicator in ytInitialData
            if (text.includes('"isLive":true')) {
                isLive = true;
            }
        } catch (e) {
            console.warn('Failed to fetch live status:', e);
            // Default to false if check fails
        }

        return {
            isLive,
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
