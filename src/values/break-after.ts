import createSortedMap from '../utils/sorted-map';

export const BREAK_AFTER = createSortedMap({
  'break-after-auto': 'break-after: auto;',
  'break-after-avoid': 'break-after: avoid;',
  'break-after-all': 'break-after: all;',
  'break-after-avoid-page': 'break-after: avoig-page;',
  'break-after-page': 'break-after: page;',
  'break-after-left': 'break-after: left;',
  'break-after-right': 'break-after: right;',
  'break-after-column': 'break-after: column;',
});

export type BreakAfterValue = keyof typeof BREAK_AFTER;
