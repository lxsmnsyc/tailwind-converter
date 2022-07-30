import { createPropertiesMap } from '../utils/properties';
import { BASE_OBJECT_POSITION } from './base/object-position';

export const OBJECT_POSITION = createPropertiesMap('object', 'object-position', BASE_OBJECT_POSITION);

export type ObjectPositionValue = keyof typeof OBJECT_POSITION;
