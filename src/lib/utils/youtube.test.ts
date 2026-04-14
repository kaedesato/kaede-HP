import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { MockInstance } from 'vitest';
import { getChannelData } from './youtube';

describe('getChannelData', () => {
    let fetchSpy: MockInstance;

    beforeEach(() => {
        fetchSpy = vi.spyOn(globalThis, 'fetch');
        fetchSpy.mockClear();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should fetch data for a valid channel ID', async () => {
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] }),
        };
        fetchSpy.mockResolvedValue(mockResponse as unknown as Response);

        const channelId = 'UCOl7immiG7B_KWFfeywmRWQ';
        await getChannelData(channelId);

        expect(fetchSpy).toHaveBeenCalled();
        const calledUrl = fetchSpy.mock.calls[0][0];
        // Expect the URL to contain the channel ID
        expect(decodeURIComponent(calledUrl)).toContain(channelId);
    });

    it('should reject invalid channel ID containing special characters', async () => {
        const invalidId = '../etc/passwd';
        const result = await getChannelData(invalidId);

        expect(result).toEqual({ isLive: false, latestVideo: null });
        expect(fetchSpy).not.toHaveBeenCalled();
    });

    it('should reject invalid channel ID containing spaces', async () => {
        const invalidId = 'invalid channel id';
        const result = await getChannelData(invalidId);

        expect(result).toEqual({ isLive: false, latestVideo: null });
        expect(fetchSpy).not.toHaveBeenCalled();
    });

    it('should reject empty channel ID', async () => {
        const result = await getChannelData('');

        expect(result).toEqual({ isLive: false, latestVideo: null });
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    it('should allow valid channel ID with hyphen and underscore', async () => {
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] }),
        };
        fetchSpy.mockResolvedValue(mockResponse as unknown as Response);

        const validId = 'UC-123_456';
        await getChannelData(validId);

        expect(fetchSpy).toHaveBeenCalled();
    });
});
