import {
  Feed,
  MatchResult,
  pattern,
} from '../core';

export interface Blank extends MatchResult<undefined> {
  type: 'blank';
}

const matcher = pattern('\\s+');

export default function blank(feed: Feed): Blank | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'blank',
      value: undefined,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
