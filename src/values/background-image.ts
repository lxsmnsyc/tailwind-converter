import { createPropertiesMap } from '../utils/properties';
import { BASE_BACKGROUND_IMAGE } from './base/background-image';

export const BACKGROUND_IMAGE = createPropertiesMap('bg', 'background-image', BASE_BACKGROUND_IMAGE);

export type BackgroundImageValue = keyof typeof BACKGROUND_IMAGE;
