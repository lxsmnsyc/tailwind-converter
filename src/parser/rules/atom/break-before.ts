import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type BreakBeforeValue =
  | 'break-before-auto'
  | 'break-before-avoid'
  | 'break-before-all'
  | 'break-before-avoid-page'
  | 'break-before-page'
  | 'break-before-left'
  | 'break-before-right'
  | 'break-before-column';

export interface BreakBefore extends MatchResult<BreakBeforeValue> {
  type: 'break-before';
}

const matcher = alternation(
  literal('break-before-auto'),
  literal('break-before-avoid'),
  literal('break-before-all'),
  literal('break-before-avoid-page'),
  literal('break-before-page'),
  literal('break-before-left'),
  literal('break-before-right'),
  literal('break-before-column'),
);

export default function breakBefore(feed: Feed): BreakBefore | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'break-before',
      value: result.value as BreakBeforeValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
