import {
  Feed,
  literal,
  MatchResult,
} from '../../core';

export interface Dark extends MatchResult<undefined> {
  type: 'variant:dark';
}

const matcher = literal('dark');

export default function darkVariant(feed: Feed): Dark | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:dark',
      value: undefined,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
