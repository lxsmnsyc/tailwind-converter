import createSortedMap from '../utils/sorted-map';

export const FLEX_WRAP = createSortedMap({
  'flex-wrap': 'flex-wrap: wrap;',
  'flex-wrap-reverse': 'flex-wrap: wrap-reverse;',
  'flex-nowrap': 'flex-wrap: nowrap;',
});

export type FlexWrapValue = keyof typeof FLEX_WRAP;
