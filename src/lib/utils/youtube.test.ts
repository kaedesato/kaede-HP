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

    it('should reject malicious link in RSS feed', async () => {
        // Mock scraping failure (first fetch)
        const mockScrapeResponse = {
            ok: false,
            text: async () => '',
            json: async () => ({})
        };

        // Mock RSS success (second fetch) with malicious link
        const mockRssResponse = {
            ok: true,
            json: async () => ({
                items: [
                    {
                        title: 'Malicious Video',
                        link: 'javascript:alert("XSS")',
                        guid: 'yt:video:12345',
                        pubDate: '2023-01-01'
                    }
                ]
            })
        };

        // Chain the mocks
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any)
            .mockResolvedValueOnce(mockScrapeResponse)
            .mockResolvedValueOnce(mockRssResponse);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        const data = await getChannelData(channelId);

        // Expectation: The link should be rejected, so latestVideo should be null (or sanitized)
        if (data.latestVideo) {
             expect(data.latestVideo.link).not.toMatch(/^javascript:/);
             expect(data.latestVideo.link).toMatch(/^https?:\/\//);
        } else {
            expect(data.latestVideo).toBeNull();
        }
    });

    it('should reject invalid videoId in scraping logic', async () => {
        const maliciousVideoId = '"><script>alert(1)</script>';
        const mockScrapeResponse = {
            ok: true,
            text: async () => `
                var ytInitialData = ({
                    "contents": {
                        "twoColumnBrowseResultsRenderer": {
                            "tabs": [{
                                "tabRenderer": {
                                    "selected": true,
                                    "content": {
                                        "richGridRenderer": {
                                            "contents": [{
                                                "richItemRenderer": {
                                                    "content": {
                                                        "videoRenderer": {
                                                            "videoId": "${maliciousVideoId}",
                                                            "title": { "runs": [{ "text": "Malicious Title" }] },
                                                            "thumbnailOverlays": []
                                                        }
                                                    }
                                                }
                                            }]
                                        }
                                    }
                                }
                            }]
                        }
                    }
                });
            `
        };

        // Mock RSS failure (second fetch) - just in case it falls through
        const mockRssResponse = {
            ok: false,
            json: async () => ({ items: [] })
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any)
            .mockResolvedValueOnce(mockScrapeResponse)
            .mockResolvedValueOnce(mockRssResponse);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        const data = await getChannelData(channelId);

        if (data.latestVideo) {
            // Ensure videoId is sanitized or validated before being put into link
            expect(data.latestVideo.link).not.toContain('<script>');
            expect(data.latestVideo.link).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[a-zA-Z0-9_-]+$/);
        } else {
             // It should return null because we added validation for videoId
             expect(data.latestVideo).toBeNull();
        }
    });
});
