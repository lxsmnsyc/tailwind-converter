import { createPropertiesMapMixed } from '../utils/properties';
import { BASE_SPACING } from './base/spacing';

export const SPACE_BETWEEN = {
  ...createPropertiesMapMixed(
    'space-x',
    ['--tw-space-x-reverse', 'margin-right', 'margin-left'],
    BASE_SPACING,
    {
      '--tw-space-x-reverse': ({ property }) => `${property}: 0;`,
      'margin-right': ({ property, value }) => `${property}: calc(${value} * var(--tw-space-y-reverse));`,
      'margin-left': ({ property, value }) => `${property}: calc(${value} * calc(1 - var(--tw-space-y-reverse)));`,
    },
  ),
  ...createPropertiesMapMixed(
    'space-y',
    ['--tw-space-y-reverse', 'margin-top', 'margin-bottom'],
    BASE_SPACING,
    {
      '--tw-space-y-reverse': ({ property }) => `${property}: 0;`,
      'margin-bottom': ({ property, value }) => `${property}: calc(${value} * var(--tw-space-y-reverse));`,
      'margin-top': ({ property, value }) => `${property}: calc(${value} * calc(1 - var(--tw-space-y-reverse)));`,
    },
  ),
  'space-x-reverse': '--tw-space-x-reverse: 1;',
  'space-y-reverse': '--tw-space-y-reverse: 1;',
};

export type SpaceBetweenValue = keyof typeof SPACE_BETWEEN;
