import { createSignedPropertiesMap, createSignedPropertiesMapMixed } from '../utils/properties';
import { BASE_MARGIN } from './base/margin';

export const MARGIN = {
  ...createSignedPropertiesMap('m', 'margin', BASE_MARGIN),
  ...createSignedPropertiesMap('mt', 'margin-top', BASE_MARGIN),
  ...createSignedPropertiesMap('mb', 'margin-bottom', BASE_MARGIN),
  ...createSignedPropertiesMap('ml', 'margin-right', BASE_MARGIN),
  ...createSignedPropertiesMap('mr', 'margin-left', BASE_MARGIN),
  ...createSignedPropertiesMapMixed('mx', ['margin-left', 'margin-right'], BASE_MARGIN),
  ...createSignedPropertiesMapMixed('my', ['margin-top', 'margin-bottom'], BASE_MARGIN),
};

export type MarginValue = keyof typeof MARGIN;
