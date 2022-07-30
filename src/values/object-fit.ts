export const OBJECT_FIT = {
  'object-contain': 'object-fit: contain;',
  'object-cover': 'object-fit: cover;',
  'object-fill': 'object-fit: fill;',
  'object-none': 'object-fit: none;',
  'object-scale-down': 'object-fit: scale-down;',
};

export type ObjectFitValue = keyof typeof OBJECT_FIT;
