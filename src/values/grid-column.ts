import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_COLUMN } from './base/grid-column';

export const GRID_COLUMN = createPropertiesMap('col', 'grid-column', BASE_GRID_COLUMN);

export type GridColumn = keyof typeof GRID_COLUMN;
