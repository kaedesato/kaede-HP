import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getChannelData, _resetCache } from './youtube';

describe('getChannelData caching', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalFetch = globalThis.fetch;

    let originalDateNow: typeof Date.now;

    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globalThis.fetch = vi.fn() as any;
        _resetCache();
        vi.useFakeTimers();
    });

    afterEach(() => {
        globalThis.fetch = originalFetch;
        vi.useRealTimers();
    });

    it('should fetch data on first call and return cached data on second call within TTL', async () => {
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] })
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const channelId = 'UCTestChannel123';

        // First call - should trigger fetch
        await getChannelData(channelId);
        expect(globalThis.fetch).toHaveBeenCalledTimes(2); // Fails stream proxy, falls back to RSS (2 calls)

        // Advance time by 1 minute (within 5 min TTL)
        vi.advanceTimersByTime(60 * 1000);

        // Second call - should use cache
        await getChannelData(channelId);
        expect(globalThis.fetch).toHaveBeenCalledTimes(2); // Fetch count should remain 2
    });

    it('should refetch data after TTL expires', async () => {
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] })
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const channelId = 'UCTestChannel123';

        // First call
        await getChannelData(channelId);
        expect(globalThis.fetch).toHaveBeenCalledTimes(2); // Fails stream proxy, falls back to RSS (2 calls)

        // Advance time by 6 minutes (exceeds 5 min TTL)
        vi.advanceTimersByTime(6 * 60 * 1000);

        // Second call - should trigger fetch again
        await getChannelData(channelId);
        expect(globalThis.fetch).toHaveBeenCalledTimes(4);
    });

    it('should fetch data again if cache is manually reset', async () => {
        const mockResponse = {
            ok: true,
            text: async () => 'var ytInitialData = {};',
            json: async () => ({ items: [] })
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis.fetch as any).mockResolvedValue(mockResponse);

        const channelId = 'UCTestChannel123';

        // First call
        await getChannelData(channelId);
        expect(globalThis.fetch).toHaveBeenCalledTimes(2); // Fails stream proxy, falls back to RSS (2 calls)

        // Reset cache
        _resetCache();

        // Second call - should trigger fetch again despite being within TTL
        await getChannelData(channelId);
        expect(globalThis.fetch).toHaveBeenCalledTimes(4);
    });
});
