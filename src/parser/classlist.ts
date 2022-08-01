import {
  alternation,
  Feed,
  MatchResult,
  pattern,
  quantifier,
  sequence,
} from './core';
import atom, { Atom } from './rules/atom';
import atomWithVariant, { AtomWithVariant } from './rules/atom-with-variant';

export interface ClassList extends MatchResult<(AtomWithVariant | Atom)[]> {
  type: 'class-list';
}

const matcher = quantifier(
  sequence(
    alternation(
      atomWithVariant,
      atom,
    ),
    pattern('(\\s+|(\\s*;))'),
  ),
  1,
);

export default function classlist(feed: Feed): ClassList | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'class-list',
      value: result.value.map((item) => item.value[0]) as (AtomWithVariant | Atom)[],
      start: result.start,
      end: result.end,
    };
  }

  return undefined;
}
