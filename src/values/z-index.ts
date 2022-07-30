import { createPropertiesMap } from '../utils/properties';
import { BASE_Z_INDEX } from './base/z-index';

export const Z_INDEX = createPropertiesMap('z', 'z-index', BASE_Z_INDEX);

export type ZIndexValue = keyof typeof Z_INDEX;
