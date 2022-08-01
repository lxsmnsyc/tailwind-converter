import { BREAKPOINTS } from './breakpoints';
import { Feed, match, MatchResult } from '../../parser/core';
import { GROUP_VARIANT } from './group-variant';
import { ORIENTATION_VARIANT } from './orientation';
import { PEER_VARIANT } from './peer-variant';
import { PREFERS_CONTRAST_VARIANT } from './prefers-contrast';
import { PREFERS_REDUCED_MOTION } from './prefers-reduced-motion';
import { PSEUDO_ELEMENT_VARIANT } from './pseudo-element';
import { PSEUDO_SELECTOR_VARIANT } from './pseudo-selector';
import { RTL_VARIANT } from './rtl';

export const VARIANT = {
  ...PSEUDO_SELECTOR_VARIANT,
  ...BREAKPOINTS,
  ...GROUP_VARIANT,
  ...ORIENTATION_VARIANT,
  ...PEER_VARIANT,
  ...PREFERS_CONTRAST_VARIANT,
  ...PREFERS_REDUCED_MOTION,
  ...PSEUDO_ELEMENT_VARIANT,
  ...RTL_VARIANT,
  dark: '(prefers-color-scheme: dark)',
  print: '',
};

export type VariantValue = keyof typeof VARIANT;

export interface Variant extends MatchResult<VariantValue> {
  type: 'variant';
}

const matcher = match(VARIANT);

export default function variant(feed: Feed): Variant | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant',
      value: result.value as VariantValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
