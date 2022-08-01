import { createPropertiesMap } from '../utils/properties';
import { BASE_MAX_WIDTH } from './base/max-width';

export const MAX_WIDTH = createPropertiesMap('max-w', 'max-width', BASE_MAX_WIDTH);

export type MaxWidthValue = keyof typeof MAX_WIDTH;
