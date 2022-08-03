import createDefaults from './utils/defaults';

const FONT_VARIANT_NUMERIC_VALUE = 'var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)';

export const FONT_VARIANT_NUMERIC = {
  'normal-nums': { 'font-variant-numeric': 'normal' },
  ordinal: {
    '--tw-ordinal': 'ordinal',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'slashed-zero': {
    '--tw-slashed-zero': 'slashed-zero',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'lining-nums': {
    '--tw-numeric-figure': 'lining-nums',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'oldstyle-nums': {
    '--tw-numeric-figure': 'oldstyle-nums',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'proportional-nums': {
    '--tw-numeric-spacing': 'proportional-nums',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'tabular-nums': {
    '--tw-numeric-spacing': 'tabular-nums',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'diagonal-fractions': {
    '--tw-numeric-fraction': 'diagonal-fractions',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
  'stacked-fractions': {
    '--tw-numeric-fraction': 'stacked-fractions',
    'font-variant-numeric': FONT_VARIANT_NUMERIC_VALUE,
  },
};

export type FontVariantNumericValue = keyof typeof FONT_VARIANT_NUMERIC;

export const FONT_VARIANT_NUMERIC_DEFAULTS = createDefaults(FONT_VARIANT_NUMERIC, {
  '--tw-ordinal': ' ',
  '--tw-slashed-zero': ' ',
  '--tw-numeric-figure': ' ',
  '--tw-numeric-spacing': ' ',
  '--tw-numeric-fraction': ' ',
});
