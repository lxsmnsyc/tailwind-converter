import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_ROW_START } from './base/grid-row-start';

export const GRID_ROW_START = createPropertiesMap('row-start', 'grid-row-start', BASE_GRID_ROW_START);

export type GridRowStartValue = keyof typeof GRID_ROW_START;
