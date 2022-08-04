import { createPropertiesMap } from '../utils/properties';
import { BASE_BACKGROUND_POSITION } from './base/background-position';

export const BACKGROUND_POSITION = createPropertiesMap('bg', 'background-position', BASE_BACKGROUND_POSITION);

export type BackgroundPositionValue = keyof typeof BACKGROUND_POSITION;
