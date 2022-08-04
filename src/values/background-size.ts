import { createPropertiesMap } from '../utils/properties';
import { BASE_BACKGROUND_SIZE } from './base/background-size';

export const BACKGROUND_SIZE = createPropertiesMap('bg', 'background-size', BASE_BACKGROUND_SIZE);

export type BackgroundSizeValue = keyof typeof BACKGROUND_SIZE;
