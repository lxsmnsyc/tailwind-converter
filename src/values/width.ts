import { createPropertiesMap } from '../utils/properties';
import { BASE_WIDTH } from './base/width';

export const WIDTH = createPropertiesMap('w', 'width', BASE_WIDTH);

export type WidthValue = keyof typeof WIDTH;
