import {
  alternation,
  Feed,
  literal,
  MatchResult,
  sequence,
} from '../core';
import atom, { Atom } from './atom';
import variant, { Variant } from './variants';

export interface AtomWithVariant extends MatchResult<AtomWithVariant | Atom> {
  type: 'atom-with-variant';
  variant: Variant;
}

export default function atomWithVariant(feed: Feed): AtomWithVariant | undefined {
  const matcher = sequence(
    variant,
    literal(':'),
    alternation(
      atom,
      atomWithVariant,
    ),
  );

  const result = matcher(feed);

  if (result) {
    return {
      type: 'atom-with-variant',
      variant: result.value[0] as Variant,
      value: result.value[2] as AtomWithVariant | Atom,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
