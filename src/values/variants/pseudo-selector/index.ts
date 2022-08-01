import { CHILDREN_VARIANT } from './children';
import { FORM_STATE_VARIANT } from './form-states';
import { STATE_VARIANT } from './states';

export const PSEUDO_SELECTOR_VARIANT = {
  ...CHILDREN_VARIANT,
  ...FORM_STATE_VARIANT,
  ...STATE_VARIANT,
  open: '',
};

export type PseudoSelectorVariantValue = keyof typeof PSEUDO_SELECTOR_VARIANT;

export function isPseudoSelectorVariant(value: string): value is PseudoSelectorVariantValue {
  return value in PSEUDO_SELECTOR_VARIANT;
}
