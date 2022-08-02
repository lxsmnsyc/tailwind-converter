import { createPropertiesMap } from '../utils/properties';
import { BASE_MIN_HEIGHT } from './base/min-height';

export const MIN_HEIGHT = createPropertiesMap('min-w', 'min-height', BASE_MIN_HEIGHT);

export type MinHeightValue = keyof typeof MIN_HEIGHT;
