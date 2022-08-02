import { createPropertiesMap } from '../utils/properties';
import { BASE_LETTER_SPACING } from './base/letter-spacing';

export const LETTER_SPACING = createPropertiesMap('tracking', 'letter-spacing', BASE_LETTER_SPACING);

export type LetterSpacingValue = keyof typeof LETTER_SPACING;
