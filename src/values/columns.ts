import { createPropertiesMap } from '../utils/properties';
import { BASE_COLUMNS } from './base/columns';

export const COLUMNS = createPropertiesMap('columns', 'columns', BASE_COLUMNS);

export type ColumnsValue = keyof typeof COLUMNS;
