import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_ROW } from './base/grid-row';

export const GRID_ROW = createPropertiesMap('row', 'grid-row', BASE_GRID_ROW);

export type GridRow = keyof typeof GRID_ROW;
