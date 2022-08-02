import { createPropertiesMap } from '../utils/properties';
import { BASE_FONT_WEIGHT } from './base/font-weight';

export const FONT_WEIGHT = createPropertiesMap('font', 'font-weight', BASE_FONT_WEIGHT);

export type ObjectPositionValue = keyof typeof FONT_WEIGHT;
