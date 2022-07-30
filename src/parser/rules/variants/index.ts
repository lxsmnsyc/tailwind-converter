import { alternation, Feed } from '../../core';
import breakpointVariant, { Breakpoint } from './breakpoints';
import darkVariant, { Dark } from './dark';
import groupVariant, { GroupVariant } from './group-variant';
import orientationVariant, { Orientation } from './orientation';
import peerVariant, { PeerVariant } from './peer-variant';
import prefersContrastVariant, { PrefersContrast } from './prefers-contrast';
import prefersReducedMotionVariant, { PrefersReducedMotion } from './prefers-reduced-motion';
import printVariant, { Print } from './print';
import pseudoElementVariant, { PseudoElement } from './pseudo-element';
import pseudoSelector, { PseudoSelector } from './pseudo-selector';
import rtlVariant, { RTL } from './rtl';

export type Variant =
  | PseudoSelector
  | GroupVariant
  | PeerVariant
  | PseudoElement
  | Breakpoint
  | Dark
  | Orientation
  | PrefersContrast
  | PrefersReducedMotion
  | Print
  | RTL;

const matcher = alternation(
  groupVariant,
  peerVariant,
  pseudoElementVariant,
  breakpointVariant,
  darkVariant,
  orientationVariant,
  prefersReducedMotionVariant,
  prefersContrastVariant,
  printVariant,
  rtlVariant,
  pseudoSelector,
);

export default function variant(feed: Feed): Variant | undefined {
  const result = matcher(feed);

  if (result) {
    return result as Variant;
  }
  return undefined;
}
