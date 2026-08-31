import { describe, it, expect } from 'vitest';
import { normalizeDate } from './dateUtils';

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
});
