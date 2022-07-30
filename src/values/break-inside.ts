import createSortedMap from '../utils/sorted-map';

export const BREAK_INSIDE = createSortedMap({
  'break-inside-auto': 'break-inside: auto;',
  'break-inside-avoid': 'break-inside: avoid;',
  'break-inside-avoid-page': 'break-inside: avoid-page;',
  'break-inside-avoid-column': 'break-inside: avoid-column;',
});

export type BreakInsideValue = keyof typeof BREAK_INSIDE;
