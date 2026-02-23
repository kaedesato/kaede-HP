import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getChannelData } from './youtube';

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

    it('should fetch data for a valid channel ID', async () => {
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] })
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        await getChannelData(channelId);

        expect(globalThis.fetch).toHaveBeenCalled();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const calledUrl = (globalThis.fetch as any).mock.calls[0][0];
        // Expect the URL to contain the channel ID
        expect(decodeURIComponent(calledUrl)).toContain(channelId);
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
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] })
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const validId = 'UC-123_456';
        await getChannelData(validId);

        expect(globalThis.fetch).toHaveBeenCalled();
    });

    it('should reject invalid video ID with path traversal', async () => {
        const maliciousVideoId = '../../evil.com/xss';
        const maliciousJson = {
            items: [
                {
                    guid: `yt:video:${maliciousVideoId}`,
                    title: 'Malicious Video',
                    link: `https://www.youtube.com/watch?v=${maliciousVideoId}`,
                    pubDate: '2023-01-01T00:00:00Z'
                }
            ]
        };

        const mockResponse = {
            ok: true,
            // Simulate failure of the first scrape method to trigger RSS fallback
            text: async () => 'invalid html',
            json: async () => maliciousJson
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        const result = await getChannelData(channelId);

        // Expect the result to be null because the video ID is invalid
        expect(result.latestVideo).toBeNull();
    });

    it('should reject invalid video ID with special characters', async () => {
         const maliciousVideoId = 'vid<script>alert(1)</script>';
         const maliciousJson = {
             items: [
                 {
                     guid: `yt:video:${maliciousVideoId}`,
                     title: 'XSS Video',
                     link: `https://www.youtube.com/watch?v=${maliciousVideoId}`,
                     pubDate: '2023-01-01T00:00:00Z'
                 }
             ]
         };

         const mockResponse = {
             ok: true,
             text: async () => 'invalid html',
             json: async () => maliciousJson
         };
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (globalThis.fetch as any).mockResolvedValue(mockResponse);

         const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
         const result = await getChannelData(channelId);

         // Expect the result to be null because the video ID is invalid
         expect(result.latestVideo).toBeNull();
    });
});
