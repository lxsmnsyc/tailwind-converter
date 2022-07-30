import { createPropertiesMap } from '../utils/properties';
import { BASE_GRID_TEMPLATE_COLUMNS } from './base/grid-template-columns';

export const GRID_TEMPLATE_COLUMNS = createPropertiesMap('grid-cols', 'grid-template-columns', BASE_GRID_TEMPLATE_COLUMNS);

export type GridTemplateColumnsValue = keyof typeof GRID_TEMPLATE_COLUMNS;
