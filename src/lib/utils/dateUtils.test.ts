import { describe, it, expect } from 'vitest';
import { normalizeDate, sortEventsByDate } from './dateUtils';

describe('dateUtils', () => {
  describe('normalizeDate', () => {
    it('should normalize YYYY-MM-DD', () => {
      expect(normalizeDate('2024-12-07')).toBe('2024-12-07');
    });

    it('should normalize YYYY/MM/DD', () => {
      expect(normalizeDate('2023/2/13')).toBe('2023-02-13');
    });

    it('should normalize YYYY/MM', () => {
      expect(normalizeDate('2022/1')).toBe('2022-01-01');
    });

    it('should handle wildcard year ****', () => {
      expect(normalizeDate('****/10/8')).toBe('0000-10-08');
    });

    it('should handle single digit month and day', () => {
      expect(normalizeDate('2022/9/6')).toBe('2022-09-06');
    });
  });

  describe('sortEventsByDate', () => {
    it('should sort mixed format dates chronologically', () => {
      const events = [
        { date: '2024-12-07', title: 'A' },
        { date: '2023/2/13', title: 'B' },
        { date: '****/10/8', title: 'C' },
        { date: '2022/1', title: 'D' },
      ];

      const sorted = sortEventsByDate(events);

      expect(sorted[0].title).toBe('C'); // 0000-10-08
      expect(sorted[1].title).toBe('D'); // 2022-01-01
      expect(sorted[2].title).toBe('B'); // 2023-02-13
      expect(sorted[3].title).toBe('A'); // 2024-12-07
    });

    it('should not mutate the original array', () => {
      const events = [
        { date: '2024-12-07' },
        { date: '2023/2/13' },
      ];
      const copy = [...events];
      sortEventsByDate(events);
      expect(events).toEqual(copy);
    });
  });
});
