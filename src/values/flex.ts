import { createPropertiesMap } from '../utils/properties';
import { BASE_FLEX } from './base/flex';

export const FLEX = createPropertiesMap('flex', 'flex', BASE_FLEX);

export type FlexValue = keyof typeof FLEX;
