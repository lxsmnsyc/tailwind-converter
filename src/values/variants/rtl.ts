export const RTL_VARIANT = {
  rtl: '[dir="rtl"]',
  ltr: '[dir="ltr"]',
};

export type RTLVariantValue = keyof typeof RTL_VARIANT;

export function isRTLVariant(value: string): value is RTLVariantValue {
  return value in RTL_VARIANT;
}
