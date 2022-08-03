export const BREAK_BEFORE = {
  'break-before-auto': { 'break-before': 'auto' },
  'break-before-avoid': { 'break-before': 'avoid' },
  'break-before-all': { 'break-before': 'all' },
  'break-before-avoid-page': { 'break-before': 'avoid-page' },
  'break-before-page': { 'break-before': 'page' },
  'break-before-left': { 'break-before': 'left' },
  'break-before-right': { 'break-before': 'right' },
  'break-before-column': { 'break-before': 'column' },
};

export type BreakBeforeValue = keyof typeof BREAK_BEFORE;
