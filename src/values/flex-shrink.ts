export const FLEX_SHRINK = {
  'shrink-0': { 'flex-shrink': 0 },
  shrink: { 'flex-shrink': 1 },
};

export type FlexShrinkValue = keyof typeof FLEX_SHRINK;
