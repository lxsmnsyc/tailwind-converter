export const BASE_GRID_AUTO_COLUMNS = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)',
};

export type BaseGridAutoColumnsValue = keyof typeof BASE_GRID_AUTO_COLUMNS;
