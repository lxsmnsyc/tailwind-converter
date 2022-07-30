import { BASE_SPACING } from './spacing';

export const BASE_INSET = {
  auto: 'auto',
  ...BASE_SPACING,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  full: '100%',
};

export type BaseInsetValue = keyof typeof BASE_INSET;
