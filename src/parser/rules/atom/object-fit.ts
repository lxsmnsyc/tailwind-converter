import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type ObjectFitValue =
  | 'object-contain'
  | 'object-cover'
  | 'object-fill'
  | 'object-none'
  | 'object-scale-down';

export interface ObjectFit extends MatchResult<ObjectFitValue> {
  type: 'object-fit';
}

const matcher = alternation(
  literal('object-contain'),
  literal('object-cover'),
  literal('object-fill'),
  literal('object-none'),
  literal('object-scale-down'),
);

export default function objectFit(feed: Feed): ObjectFit | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'object-fit',
      value: result.value as ObjectFitValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
