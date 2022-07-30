import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_COLUMN_END } from './base/grid-column-end';

export const GRID_COLUMN_END = createPropertiesMap('col-end', 'grid-column-end', BASE_GRID_COLUMN_END);

export type GridColumnEndValue = keyof typeof GRID_COLUMN_END;
