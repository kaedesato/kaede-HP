export function normalizeDate(dateStr: string): string {
  const parts = dateStr.split(/[-/]/);
  let y = parts[0];
  let m = parts[1];
  let d = parts[2];

  if (y === '****') y = '0000';
  if (!m) m = '01';
  if (!d) d = '01';

  return `${y.padStart(4, '0')}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

