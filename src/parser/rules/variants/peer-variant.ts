import {
  Feed,
  literal,
  MatchResult,
  sequence,
} from '../../core';
import pseudoSelector, { PseudoSelector } from './pseudo-selector';

export interface PeerVariant extends MatchResult<PseudoSelector> {
  type: 'variant:peer';
  value: PseudoSelector;
}

const matcher = sequence(
  literal('peer-'),
  pseudoSelector,
);

export default function peerVariant(feed: Feed): PeerVariant | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:peer',
      value: result.value[1] as PseudoSelector,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
