import { createPropertiesMap } from '../utils/properties';
import { BASE_MAX_HEIGHT } from './base/max-height';

export const MAX_HEIGHT = createPropertiesMap('max-h', 'max-height', BASE_MAX_HEIGHT);

export type MaxHeightValue = keyof typeof MAX_HEIGHT;
