import {
  Feed,
  literal,
  MatchResult,
} from '../../core';

export interface Container extends MatchResult<undefined> {
  type: 'container';
}

const matcher = literal('container');

export default function container(feed: Feed): Container | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'container',
      value: undefined,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
