import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_AUTO_COLUMNS } from './base/grid-auto-columns';

export const GRID_AUTO_COLUMNS = createPropertiesMap('auto-cols', 'grid-auto-columns', BASE_GRID_AUTO_COLUMNS);

export type GridColumnEndValue = keyof typeof GRID_AUTO_COLUMNS;
