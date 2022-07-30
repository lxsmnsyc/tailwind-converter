export const BASE_GRID_ROW = {
  auto: 'auto',
  'span-1': 'span 1 / span 1',
  'span-2': 'span 2 / span 2',
  'span-3': 'span 3 / span 3',
  'span-4': 'span 4 / span 4',
  'span-5': 'span 5 / span 5',
  'span-6': 'span 6 / span 6',
  'span-full': '1 / -1',
};

export type BaseGridRow = keyof typeof BASE_GRID_ROW;
