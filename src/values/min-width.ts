import { createPropertiesMap } from '../utils/properties';
import { BASE_MIN_WIDTH } from './base/min-width';

export const MIN_WIDTH = createPropertiesMap('min-w', 'min-width', BASE_MIN_WIDTH);

export type MinWidthValue = keyof typeof MIN_WIDTH;
