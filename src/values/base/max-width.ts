import { createPrefixedMap } from '../../utils/properties';
import { BASE_SCREEN } from './screen';

export const BASE_MAX_WIDTH = {
  none: 'none',
  0: '0rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  prose: '65ch',
  ...createPrefixedMap('screen-', BASE_SCREEN),
};

export type BaseMaxWidthValue = keyof typeof BASE_MAX_WIDTH;
