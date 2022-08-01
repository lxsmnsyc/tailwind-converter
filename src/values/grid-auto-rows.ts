import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_AUTO_ROWS } from './base/grid-auto-rows';

export const GRID_AUTO_ROWS = createPropertiesMap('auto-rows', 'grid-auto-rows', BASE_GRID_AUTO_ROWS);

export type GridColumnEndValue = keyof typeof GRID_AUTO_ROWS;
