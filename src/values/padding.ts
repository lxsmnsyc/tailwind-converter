import { createPropertiesMap, createPropertiesMapMixed } from '../utils/properties';
import { BASE_SPACING } from './base/spacing';

export const PADDING = {
  ...createPropertiesMap('p', 'padding', BASE_SPACING),
  ...createPropertiesMap('pt', 'padding-top', BASE_SPACING),
  ...createPropertiesMap('pb', 'padding-bottom', BASE_SPACING),
  ...createPropertiesMap('pl', 'padding-right', BASE_SPACING),
  ...createPropertiesMap('pr', 'padding-left', BASE_SPACING),
  ...createPropertiesMapMixed('px', ['padding-left', 'padding-right'], BASE_SPACING),
  ...createPropertiesMapMixed('py', ['padding-top', 'padding-bottom'], BASE_SPACING),
};

export type PaddingValue = keyof typeof PADDING;
