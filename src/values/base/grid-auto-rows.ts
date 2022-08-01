export const BASE_GRID_AUTO_ROWS = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)',
};

export type BaseGridAutoRowsValue = keyof typeof BASE_GRID_AUTO_ROWS;
