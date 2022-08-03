export const BOX_SIZING = {
  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' },
};

export type BoxSizingValue = keyof typeof BOX_SIZING;
