import { createPropertiesMap } from '../utils/properties';
import { BASE_FONT_FAMILY } from './base/font-family';

export const FONT_FAMILY = createPropertiesMap('font', 'font-family', BASE_FONT_FAMILY);

export type FontFamilyValue = keyof typeof FONT_FAMILY;
