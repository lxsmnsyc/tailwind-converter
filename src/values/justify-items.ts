export const JUSTIFY_ITEMS = {
  'justify-items-start': { 'justify-items': 'start' },
  'justify-items-end': { 'justify-items': 'end' },
  'justify-items-center': { 'justify-items': 'center' },
  'justify-items-stretch': { 'justify-items': 'stretch' },
};

export type JustifyItemsValue = keyof typeof JUSTIFY_ITEMS;
