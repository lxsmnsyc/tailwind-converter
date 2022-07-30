import createSortedMap from '../utils/sorted-map';

export const FLEX_DIRECTION = createSortedMap({
  'flex-row': 'flex-direction: row;',
  'flex-row-reverse': 'flex-direction: row-reverse;',
  'flex-col': 'flex-direction: column;',
  'flex-col-reverse': 'flex-direction: column-reverse;',
});

export type FlexDirectionValue = keyof typeof FLEX_DIRECTION;
