import { createPropertiesMap } from '../utils/properties';
import { BASE_LIST_STYLE_TYPE } from './base/list-style-type';

export const LIST_STYLE_TYPE = createPropertiesMap('list', 'list-style-type', BASE_LIST_STYLE_TYPE);

export type ListStyleTypeValue = keyof typeof LIST_STYLE_TYPE;
