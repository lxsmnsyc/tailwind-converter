import {
  Feed,
  literal,
  MatchResult,
  sequence,
} from '../../core';
import pseudoSelector, { PseudoSelector } from './pseudo-selector';

export interface GroupVariant extends MatchResult<PseudoSelector> {
  type: 'variant:group';
  value: PseudoSelector;
}

const matcher = sequence(
  literal('group-'),
  pseudoSelector,
);

export default function groupVariant(feed: Feed): GroupVariant | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:group',
      value: result.value[1] as PseudoSelector,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
