import { createPropertiesMap } from '../../../utils/properties';
import { PSEUDO_SELECTOR_VARIANT } from './pseudo-selector';

export const PEER_VARIANT = createPropertiesMap('peer', '', PSEUDO_SELECTOR_VARIANT);

export type PeerVariantValue = keyof typeof PEER_VARIANT;

export function isPeerVariant(value: string): value is PeerVariantValue {
  return value in PSEUDO_SELECTOR_VARIANT;
}
