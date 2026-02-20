import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getChannelData, isValidVideoId, sanitizeTitle } from './youtube';

describe('isValidVideoId', () => {
    it('should return true for valid video IDs', () => {
        expect(isValidVideoId('abcdefghijk')).toBe(true);
        expect(isValidVideoId('abc-_123456')).toBe(true);
        expect(isValidVideoId('valid_ID-11')).toBe(true);
    });

    it('should return false for invalid video IDs', () => {
        expect(isValidVideoId('abc def')).toBe(false);
        expect(isValidVideoId('<script>')).toBe(false);
        expect(isValidVideoId('!@#$%')).toBe(false);
        expect(isValidVideoId('../../../etc/passwd')).toBe(false);
        expect(isValidVideoId('" onload="alert(1)"')).toBe(false);
    });
});

describe('sanitizeTitle', () => {
    it('should remove HTML tags', () => {
        expect(sanitizeTitle('Hello <b>World</b>')).toBe('Hello World');
        expect(sanitizeTitle('<script>alert(1)</script>Title')).toBe('alert(1)Title');
        expect(sanitizeTitle('<div>Broken</div> <br>')).toBe('Broken');
    });

    it('should return plain text as is', () => {
        expect(sanitizeTitle('Plain Title')).toBe('Plain Title');
    });

    it('should trim whitespace', () => {
        expect(sanitizeTitle('  Title  ')).toBe('Title');
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
});
