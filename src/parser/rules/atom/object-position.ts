import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type ObjectPositionValue =
  | 'object-bottom'
  | 'object-center'
  | 'object-left'
  | 'object-left-bottom'
  | 'object-left-top'
  | 'object-right'
  | 'object-right-bottom'
  | 'object-right-top'
  | 'object-top';

export interface ObjectPosition extends MatchResult<ObjectPositionValue> {
  type: 'object-position';
}

const matcher = alternation(
  literal('object-bottom'),
  literal('object-center'),
  literal('object-left'),
  literal('object-left-bottom'),
  literal('object-left-top'),
  literal('object-right'),
  literal('object-right-bottom'),
  literal('object-right-top'),
  literal('object-top'),
);

export default function objectPosition(feed: Feed): ObjectPosition | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'object-position',
      value: result.value as ObjectPositionValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
