export const PREFERS_CONTRAST_VARIANT = {
  'contrast-more': '(prefers-contrast: more)',
  'contrast-less': '(prefers-contrast: less)',
};

export type PrefersContrastVariantValue = keyof typeof PREFERS_CONTRAST_VARIANT;

export function isPrefersContrastVariant(value: string): value is PrefersContrastVariantValue {
  return value in PREFERS_CONTRAST_VARIANT;
}
