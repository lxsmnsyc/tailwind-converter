import { createPropertiesMap } from '../../../utils/properties';
import { PSEUDO_SELECTOR_VARIANT } from './pseudo-selector';

export const GROUP_VARIANT = createPropertiesMap('group', '', PSEUDO_SELECTOR_VARIANT);

export type GroupVariantValue = keyof typeof GROUP_VARIANT;

export function isGroupVariant(value: string): value is GroupVariantValue {
  return value in GROUP_VARIANT;
}
