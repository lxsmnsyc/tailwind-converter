import { createPropertiesMap } from '../utils/properties';
import { BASE_SPACING } from './base/spacing';

export const TEXT_INDENT = createPropertiesMap('indent', 'text-indent', BASE_SPACING);

export type TextIndentValue = keyof typeof TEXT_INDENT;
