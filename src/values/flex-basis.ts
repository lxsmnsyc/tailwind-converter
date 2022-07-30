import { createPropertiesMap } from '../utils/properties';
import { BASE_FLEX_BASIS } from './base/flex-basis';

export const FLEX_BASIS = createPropertiesMap('basis', 'flex-basis', BASE_FLEX_BASIS);

export type FlexBasisValue = keyof typeof FLEX_BASIS;
