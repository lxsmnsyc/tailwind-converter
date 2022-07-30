import {
  Feed,
  MatchResult,
} from '../core';

export interface Blank extends MatchResult<undefined> {
  type: 'eof';
}

export default function eof(feed: Feed): Blank | undefined {
  if (feed.cursor >= feed.size) {
    return {
      type: 'eof',
      value: undefined,
      start: feed.cursor,
      end: feed.cursor,
    };
  }
  return undefined;
}
