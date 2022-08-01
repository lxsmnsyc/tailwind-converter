import { createPropertiesMap } from '../utils/properties';
import { BASE_SPACING } from './base/spacing';

export const GAP = {
  ...createPropertiesMap('gap', 'gap', BASE_SPACING),
  ...createPropertiesMap('gap-x', 'column-gap', BASE_SPACING),
  ...createPropertiesMap('gap-y', 'row-gap', BASE_SPACING),
};

export type GapValue = keyof typeof GAP;
