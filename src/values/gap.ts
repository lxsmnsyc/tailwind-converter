import { createPropertiesMap } from '../utils/properties';
import { BASE_SPACING } from './base/spacing';

export const GAP = createPropertiesMap('gap', 'gap', BASE_SPACING);
export const GAP_X = createPropertiesMap('gap-x', 'column-gap', BASE_SPACING);
export const GAP_Y = createPropertiesMap('gap-y', 'row-gap', BASE_SPACING);

export type GapValue = keyof typeof GAP;
export type GapXValue = keyof typeof GAP;
export type GapYValue = keyof typeof GAP;
