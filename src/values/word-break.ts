export const WORD_BREAK = {
  'break-normal': { 'overflow-wrap': 'normal', 'word-break': 'normal' },
  'break-words': { 'overflow-wrap': 'break-word' },
  'break-all': { 'word-break': 'break-all' },
};

export type WordBreakValue = keyof typeof WORD_BREAK;
