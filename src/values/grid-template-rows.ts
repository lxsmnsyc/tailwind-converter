import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_TEMPLATE_ROWS } from './base/grid-template-rows';

export const GRID_TEMPLATE_ROWS = createPropertiesMap('grid-rows', 'grid-template-rows', BASE_GRID_TEMPLATE_ROWS);

export type GridTemplateRowsValue = keyof typeof GRID_TEMPLATE_ROWS;
