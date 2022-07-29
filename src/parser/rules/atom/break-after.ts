import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type BreakAfterValue =
  | 'break-after-auto'
  | 'break-after-avoid'
  | 'break-after-all'
  | 'break-after-avoid-page'
  | 'break-after-page'
  | 'break-after-left'
  | 'break-after-right'
  | 'break-after-column';

export interface BreakAfter extends MatchResult<BreakAfterValue> {
  type: 'break-after';
}

const matcher = alternation(
  literal('break-after-auto'),
  literal('break-after-avoid'),
  literal('break-after-all'),
  literal('break-after-avoid-page'),
  literal('break-after-page'),
  literal('break-after-left'),
  literal('break-after-right'),
  literal('break-after-column'),
);

export default function breakAfter(feed: Feed): BreakAfter | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'break-after',
      value: result.value as BreakAfterValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
