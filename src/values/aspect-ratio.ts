import { createPropertiesMap } from '../utils/properties';
import { BASE_ASPECT_RATIO } from './base/aspect-ratio';

export const ASPECT_RATIO = createPropertiesMap('aspect', 'aspect-ratio', BASE_ASPECT_RATIO);

export type AspectRatioValue = keyof typeof ASPECT_RATIO;
