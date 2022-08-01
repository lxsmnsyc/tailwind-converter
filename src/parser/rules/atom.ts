import {
  Feed,
  MatchResult,
  pattern,
} from '../core';

export interface Atom extends MatchResult<string> {
  type: 'atom';
}

const matcher = pattern('[^:;\\s]+');

export default function atom(feed: Feed): Atom | undefined {
  const result = matcher(feed);
  if (result) {
    return {
      type: 'atom',
      value: result.value,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
