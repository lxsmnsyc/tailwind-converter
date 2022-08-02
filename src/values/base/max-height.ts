import { BASE_SPACING } from './spacing';

export const BASE_MAX_HEIGHT = {
  ...BASE_SPACING,
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export type BaseMaxHeightValue = keyof typeof BASE_MAX_HEIGHT;
