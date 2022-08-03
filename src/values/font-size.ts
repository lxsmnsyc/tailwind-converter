import { createPropertiesMapMixed } from '../utils/properties';
import { BASE_FONT_SIZE } from './base/font-size';

export const FONT_SIZE = createPropertiesMapMixed(
  'text',
  ['font-size', 'line-height'],
  BASE_FONT_SIZE['font-size'],
  {
    'line-height': ({ key }) => BASE_FONT_SIZE['line-height'][key],
  },
);

export type FontSizeValue = keyof typeof FONT_SIZE;
