import { createPropertiesMap } from '../utils/properties';
import { BASE_LINE_HEIGHT } from './base/line-height';

export const LINE_HEIGHT = createPropertiesMap('leading', 'line-height', BASE_LINE_HEIGHT);

export type LineHeightValue = keyof typeof LINE_HEIGHT;
