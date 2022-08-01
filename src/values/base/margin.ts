import { BASE_SPACING } from './spacing';

export const BASE_MARGIN = {
  auto: 'auto',
  ...BASE_SPACING,
};

export type BaseMarginValue = keyof typeof BASE_MARGIN;
