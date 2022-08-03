export const ALIGN_ITEMS = {
  'items-start': { 'align-items': 'flex-start' },
  'items-end': { 'align-items': 'flex-end' },
  'items-center': { 'align-items': 'center' },
  'items-baseline': { 'align-items': 'baseline' },
  'items-stretch': { 'align-items': 'stretch' },
};

export type AlignItemsValue = keyof typeof ALIGN_ITEMS;
