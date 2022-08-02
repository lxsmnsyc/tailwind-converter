import { createPropertiesMapMixed } from '../utils/properties';
import { BASE_FONT_SIZE } from './base/font-size';

export const FONT_SIZE = createPropertiesMapMixed(
  'text',
  ['font-size', 'line-height'],
  BASE_FONT_SIZE['font-size'],
  {
    'font-size': ({ property, value }) => `${property}: ${value};`,
    'line-height': ({ property, key }) => (
      `${property}: ${BASE_FONT_SIZE['line-height'][key]};`
    ),
  },
);

export type FontSizeValue = keyof typeof FONT_SIZE;
