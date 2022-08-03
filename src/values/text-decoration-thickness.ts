import { createPropertiesMap } from '../utils/properties';
import { BASE_TEXT_DECORATION_THICKNESS } from './base/text-decoration-thickness';

export const TEXT_DECORATION_THICKNESS = createPropertiesMap('decoration', 'text-decoration-thickness', BASE_TEXT_DECORATION_THICKNESS);

export type TextDecorationThickessValue = keyof typeof TEXT_DECORATION_THICKNESS;
