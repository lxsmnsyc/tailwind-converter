import { createPropertiesMap } from '../utils/properties';
import { BASE_TEXT_UNDERLINE_OFFSET } from './base/text-underline-offset';

export const TEXT_UNDERLINE_OFFSET = createPropertiesMap('underline-offset', 'text-underline-offset', BASE_TEXT_UNDERLINE_OFFSET);

export type TextUnderlineOffsetValue = keyof typeof TEXT_UNDERLINE_OFFSET;
