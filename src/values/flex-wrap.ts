export const FLEX_WRAP = {
  'flex-wrap': { 'flex-wrap': 'wrap' },
  'flex-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
  'flex-nowrap': { 'flex-wrap': 'nowrap' },
};

export type FlexWrapValue = keyof typeof FLEX_WRAP;
