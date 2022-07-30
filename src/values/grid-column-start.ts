import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_COLUMN_START } from './base/grid-column-start';

export const GRID_COLUMN_START = createPropertiesMap('col-start', 'grid-column-start', BASE_GRID_COLUMN_START);

export type GridColumnStartValue = keyof typeof GRID_COLUMN_START;
