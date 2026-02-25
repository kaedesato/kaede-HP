import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getChannelData, extractLatestVideoFromXml } from './youtube';

describe('extractLatestVideoFromXml', () => {
    it('should extract video data from valid XML', () => {
        const xml = `
            <feed>
                <entry>
                    <title>Test Video Title</title>
                    <yt:videoId>video123</yt:videoId>
                    <published>2023-01-01T00:00:00+00:00</published>
                    <link rel="alternate" href="https://www.youtube.com/watch?v=video123"/>
                </entry>
            </feed>
        `;
        const result = extractLatestVideoFromXml(xml);
        expect(result).toEqual({
            title: 'Test Video Title',
            link: 'https://www.youtube.com/watch?v=video123',
            thumbnail: 'https://i.ytimg.com/vi/video123/maxresdefault.jpg',
            pubDate: '2023-01-01T00:00:00+00:00',
            isLive: false
        });
    });

    it('should decode HTML entities in title', () => {
        const xml = `
            <feed>
                <entry>
                    <title>Me &amp; You &lt;3</title>
                    <yt:videoId>video123</yt:videoId>
                    <published>2023-01-01T00:00:00+00:00</published>
                    <link rel="alternate" href="https://www.youtube.com/watch?v=video123"/>
                </entry>
            </feed>
        `;
        const result = extractLatestVideoFromXml(xml);
        expect(result?.title).toBe('Me & You <3');
    });

    it('should return null if no entry found', () => {
        const xml = `<feed></feed>`;
        const result = extractLatestVideoFromXml(xml);
        expect(result).toBeNull();
    });
});

describe('getChannelData', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalFetch = globalThis.fetch;

    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globalThis.fetch = vi.fn() as any;
    });

    afterEach(() => {
        globalThis.fetch = originalFetch;
    });

    it('should fetch data for a valid channel ID and fallback to RSS', async () => {
        // Mock first fetch (streams page) failure
        const streamsResponse = {
            ok: false,
            text: async () => ''
        };

        // Mock second fetch (RSS XML) success
        const rssResponse = {
            ok: true,
            text: async () => `
                <feed>
                    <entry>
                        <title>RSS Video</title>
                        <yt:videoId>rss123</yt:videoId>
                        <published>2023-01-01T00:00:00+00:00</published>
                        <link rel="alternate" href="https://www.youtube.com/watch?v=rss123"/>
                    </entry>
                </feed>
            `
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any)
            .mockResolvedValueOnce(streamsResponse)
            .mockResolvedValueOnce(rssResponse);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        const result = await getChannelData(channelId);

        expect(globalThis.fetch).toHaveBeenCalledTimes(2);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const firstCallUrl = (globalThis.fetch as any).mock.calls[0][0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const secondCallUrl = (globalThis.fetch as any).mock.calls[1][0];

        expect(decodeURIComponent(firstCallUrl)).toContain('youtube.com/channel/' + channelId + '/streams');
        expect(decodeURIComponent(secondCallUrl)).toContain('youtube.com/feeds/videos.xml?channel_id=' + channelId);

        expect(result.latestVideo?.title).toBe('RSS Video');
    });

    it('should reject invalid channel ID containing special characters', async () => {
        const invalidId = '../etc/passwd';
        const result = await getChannelData(invalidId);

        expect(result).toEqual({ isLive: false, latestVideo: null });
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    it('should reject invalid channel ID containing spaces', async () => {
        const invalidId = 'invalid channel id';
        const result = await getChannelData(invalidId);

        expect(result).toEqual({ isLive: false, latestVideo: null });
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    it('should allow valid channel ID with hyphen and underscore', async () => {
        // Mock successful streams fetch to avoid second call logic complexity here,
        // or just mock both. Let's mock failure then success like above but simplified
         const streamsResponse = { ok: false, text: async () => '' };
         const rssResponse = { ok: false, text: async () => '' }; // Fail both to just check validation passed

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any)
            .mockResolvedValueOnce(streamsResponse)
            .mockResolvedValueOnce(rssResponse);

        const validId = 'UC-123_456';
        await getChannelData(validId);

        expect(globalThis.fetch).toHaveBeenCalled();
    });
});
