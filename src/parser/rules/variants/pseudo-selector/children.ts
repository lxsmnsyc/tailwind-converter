import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../../core';

export type ChildrenValue =
  | 'first'
  | 'last'
  | 'odd'
  | 'even'
  | 'only'
  | 'first-of-type'
  | 'last-of-type'
  | 'only-of-type'
  | 'empty';

export interface Children extends MatchResult<ChildrenValue> {
  type: 'pseudo-selector:children';
}

const matcher = alternation(
  literal('first'),
  literal('last'),
  literal('odd'),
  literal('even'),
  literal('only'),
  literal('first-of-type'),
  literal('last-of-type'),
  literal('only-of-type'),
  literal('empty'),
);

export default function childrenPseudoSelector(feed: Feed): Children | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'pseudo-selector:children',
      value: result.value as ChildrenValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
