import { Variant } from '../../parser/rules/variants';
import { PseudoSelector } from '../../parser/rules/variants/pseudo-selector';
import { createCSSBlock, CSSBlock } from '../css-block';
import { CSSMediaQuery } from '../css-media-query';
import createBreakpointMediaQuery from './breakpoint';
import createChildrenCSSBlock from './children';
import createDarkCSSBlock from './dark';
import createFormStateCSSBlock from './form-state';
import createOpenCSSBlock from './open';
import createOrientationMediaQuery from './orientation';
import createPrefersContrastMediaQuery from './prefers-contrast';
import createPrefersReducedMotionMediaQuery from './prefers-reduced-motion';
import createPrintMediaQuery from './print';
import createPseudoElementBlock from './pseudo-element';
import createRTLBlock from './rtl';
import createStateCSSBlock from './state';

export interface VariantOptions {
  darkMode?: string;
  groupSelector?: string;
  peerSelector?: string;
}

function createPseudoSelectorBlock(
  base: string[],
  variant: PseudoSelector,
) {
  switch (variant.type) {
    case 'pseudo-selector:children':
      return createChildrenCSSBlock(base, variant);
    case 'pseudo-selector:form-state':
      return createFormStateCSSBlock(base, variant);
    case 'pseudo-selector:open':
      return createOpenCSSBlock(base, variant);
    case 'pseudo-selector:state':
      return createStateCSSBlock(base, variant);
    default: throw new Error('Invalid variant');
  }
}

export default function createVariant(
  base: string[],
  variant: Variant,
  options: VariantOptions,
): CSSMediaQuery | CSSBlock {
  switch (variant.type) {
    case 'pseudo-selector:children':
    case 'pseudo-selector:form-state':
    case 'pseudo-selector:open':
    case 'pseudo-selector:state':
      return createPseudoSelectorBlock(base, variant);
    case 'variant:breakpoint':
      return createBreakpointMediaQuery(variant);
    case 'variant:dark':
      return createDarkCSSBlock(base, variant, options.darkMode);
    case 'variant:group': {
      const baseSelector = createPseudoSelectorBlock([options.groupSelector ?? 'group'], variant.value).selectors;
      return createCSSBlock(base.map((item) => `${baseSelector[0]} ${item}`), variant);
    }
    case 'variant:orientation':
      return createOrientationMediaQuery(variant);
    case 'variant:peer': {
      const baseSelector = createPseudoSelectorBlock([options.peerSelector ?? 'peer'], variant.value).selectors;
      return createCSSBlock(base.map((item) => `${baseSelector[0]} ${item}`), variant);
    }
    case 'variant:prefers-contrast':
      return createPrefersContrastMediaQuery(variant);
    case 'variant:prefers-reduced-motion':
      return createPrefersReducedMotionMediaQuery(variant);
    case 'variant:print':
      return createPrintMediaQuery(variant);
    case 'variant:pseudo-element':
      return createPseudoElementBlock(base, variant);
    case 'variant:rtl':
      return createRTLBlock(base, variant);
    default: throw new Error('Invalid variant');
  }
}
