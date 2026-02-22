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

    it('should reject a malicious videoId from corsproxy.io', async () => {
        const maliciousId = '../../evil.com/xss';
        const mockJson = {
            contents: {
                twoColumnBrowseResultsRenderer: {
                    tabs: [
                        {
                            tabRenderer: {
                                selected: true,
                                content: {
                                    richGridRenderer: {
                                        contents: [
                                            {
                                                richItemRenderer: {
                                                    content: {
                                                        videoRenderer: {
                                                            videoId: maliciousId,
                                                            title: { runs: [{ text: "Malicious Video" }] },
                                                            thumbnailOverlays: []
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        };

        const mockResponse = {
            ok: true,
            text: async () => `var ytInitialData = ${JSON.stringify(mockJson)};`,
            json: async () => ({ items: [] })
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        const result = await getChannelData(channelId);

        // Expectation: malformed videoId should be rejected, resulting in no video data
        expect(result.latestVideo).toBeNull();
    });
});
