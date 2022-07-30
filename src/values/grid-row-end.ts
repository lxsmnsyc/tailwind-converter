import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_ROW_END } from './base/grid-row-end';

export const GRID_ROW_END = createPropertiesMap('row-end', 'grid-row-end', BASE_GRID_ROW_END);

export type GridRowEndValue = keyof typeof GRID_ROW_END;
