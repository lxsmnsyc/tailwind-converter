import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type PseudoElementValue =
  | 'before'
  | 'after'
  | 'placeholder'
  | 'file'
  | 'marker'
  | 'selection'
  | 'first-line'
  | 'first-letter'
  | 'backdrop';

export interface PseudoElement extends MatchResult<PseudoElementValue> {
  type: 'variant:pseudo-element';
}

const matcher = alternation(
  literal('before'),
  literal('after'),
  literal('placeholder'),
  literal('file'),
  literal('marker'),
  literal('selection'),
  literal('first-line'),
  literal('first-letter'),
  literal('backdrop'),
);

export default function pseudoElementVariant(feed: Feed): PseudoElement | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:pseudo-element',
      value: result.value as PseudoElementValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
