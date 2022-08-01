export const PSEUDO_ELEMENT_VARIANT = {
  before: '',
  after: '',
  placeholder: '',
  file: '',
  marker: '',
  selection: '',
  'first-line': '',
  'first-letter': '',
  backdrop: '',
};

export type PseudoElementVariantValue = keyof typeof PSEUDO_ELEMENT_VARIANT;

export function isPseudoElementVariant(value: string): value is PseudoElementVariantValue {
  return value in PSEUDO_ELEMENT_VARIANT;
}
