import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type OverflowValue =
  | 'overflow-auto'
  | 'overflow-hidden'
  | 'overflow-clip'
  | 'overflow-visible'
  | 'overflow-scroll'
  | 'overflow-x-auto'
  | 'overflow-y-auto'
  | 'overflow-x-hidden'
  | 'overflow-y-hidden'
  | 'overflow-x-clip'
  | 'overflow-y-clip'
  | 'overflow-x-visible'
  | 'overflow-y-visible'
  | 'overflow-x-scroll'
  | 'overflow-y-scroll';

export interface Overflow extends MatchResult<OverflowValue> {
  type: 'overflow';
}

const matcher = alternation(
  literal('overflow-auto'),
  literal('overflow-hidden'),
  literal('overflow-clip'),
  literal('overflow-visible'),
  literal('overflow-scroll'),
  literal('overflow-x-auto'),
  literal('overflow-y-auto'),
  literal('overflow-x-hidden'),
  literal('overflow-y-hidden'),
  literal('overflow-x-clip'),
  literal('overflow-y-clip'),
  literal('overflow-x-visible'),
  literal('overflow-y-visible'),
  literal('overflow-x-scroll'),
  literal('overflow-y-scroll'),
);

export default function overflow(feed: Feed): Overflow | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'overflow',
      value: result.value as OverflowValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
