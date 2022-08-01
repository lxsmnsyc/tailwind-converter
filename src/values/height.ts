import { createPropertiesMap } from '../utils/properties';
import { BASE_HEIGHT } from './base/height';

export const HEIGHT = createPropertiesMap('h', 'height', BASE_HEIGHT);

export type HeightValue = keyof typeof HEIGHT;
