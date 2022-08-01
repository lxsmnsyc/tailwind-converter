import { VARIANT, Variant } from '../../values/variants';
import { isGroupVariant } from '../../values/variants/group-variant';
import { isPseudoSelectorVariant, PseudoSelectorVariantValue } from '../../values/variants/pseudo-selector';
import { CHILDREN_VARIANT, isChildrenVariant } from '../../values/variants/pseudo-selector/children';
import { FORM_STATE_VARIANT, isFormStateVariant } from '../../values/variants/pseudo-selector/form-states';
import { isStateVariant, STATE_VARIANT } from '../../values/variants/pseudo-selector/states';
import { BREAKPOINTS, isBreakpoint } from '../../values/variants/breakpoints';
import { createCSSBlock, CSSBlock } from '../css-block';
import { createCSSMediaQuery, CSSMediaQuery } from '../css-media-query';
import createPseudoElementBlock from './pseudo-element';
import { isOrientationVariant, ORIENTATION_VARIANT } from '../../values/variants/orientation';
import { isPeerVariant } from '../../values/variants/peer-variant';
import { isPrefersContrastVariant, PREFERS_CONTRAST_VARIANT } from '../../values/variants/prefers-contrast';
import { isPrefersReducedMotionVariant, PREFERS_REDUCED_MOTION } from '../../values/variants/prefers-reduced-motion';
import { isPseudoElementVariant } from '../../values/variants/pseudo-element';
import { isRTLVariant, RTL_VARIANT } from '../../values/variants/rtl';

export interface VariantOptions {
  darkMode?: string;
  groupSelector?: string;
  peerSelector?: string;
}

function createPseudoSelectorBlock(
  base: string[],
  variant: Variant,
  value: PseudoSelectorVariantValue,
) {
  if (isChildrenVariant(value)) {
    const selector = CHILDREN_VARIANT[value];
    return createCSSBlock(base.map((item) => `${item}:${selector}`), variant);
  }
  if (isFormStateVariant(value)) {
    const selector = FORM_STATE_VARIANT[value];
    return createCSSBlock(base.map((item) => `${item}:${selector}`), variant);
  }
  if (value === 'open') {
    return createCSSBlock(base.map((item) => `${item}[open]`), variant);
  }
  if (isStateVariant(value)) {
    const selector = STATE_VARIANT[value];
    return createCSSBlock(base.map((item) => `${item}:${selector}`), variant);
  }
  throw new Error('Unexpected pseudo-selector type');
}

export default function createVariant(
  base: string[],
  variant: Variant,
  options: VariantOptions,
): CSSMediaQuery | CSSBlock {
  if (isBreakpoint(variant.value)) {
    return createCSSMediaQuery(BREAKPOINTS[variant.value], variant);
  }
  if (isPseudoSelectorVariant(variant.value)) {
    return createPseudoSelectorBlock(base, variant, variant.value);
  }
  if (variant.value === 'dark') {
    if (options.darkMode) {
      const mode = options.darkMode;
      return createCSSBlock(base.map((item) => `${mode} ${item}`), variant);
    }
    return createCSSMediaQuery(VARIANT[variant.value], variant);
  }
  if (isGroupVariant(variant.value)) {
    const actualSelector = variant.value.substring(6) as PseudoSelectorVariantValue;
    const baseSelector = createPseudoSelectorBlock([options.groupSelector ?? 'group'], variant, actualSelector).selectors;
    return createCSSBlock(base.map((item) => `${baseSelector[0]} ${item}`), variant);
  }
  if (isOrientationVariant(variant.value)) {
    return createCSSMediaQuery(ORIENTATION_VARIANT[variant.value], variant);
  }
  if (isPeerVariant(variant.value)) {
    const actualSelector = variant.value.substring(4) as PseudoSelectorVariantValue;
    const baseSelector = createPseudoSelectorBlock([options.peerSelector ?? 'peer'], variant, actualSelector).selectors;
    return createCSSBlock(base.map((item) => `${baseSelector[0]} ~ ${item}`), variant);
  }
  if (isPrefersContrastVariant(variant.value)) {
    return createCSSMediaQuery(PREFERS_CONTRAST_VARIANT[variant.value], variant);
  }
  if (isPrefersReducedMotionVariant(variant.value)) {
    return createCSSMediaQuery(PREFERS_REDUCED_MOTION[variant.value], variant);
  }
  if (variant.value === 'print') {
    return createCSSMediaQuery('print', variant);
  }
  if (isPseudoElementVariant(variant.value)) {
    return createPseudoElementBlock(base, variant, variant.value);
  }
  if (isRTLVariant(variant.value)) {
    const selector = RTL_VARIANT[variant.value];
    return createCSSBlock(base.map((item) => `${selector} ${item}`), variant);
  }
  throw new Error('Invalid variant');
}
