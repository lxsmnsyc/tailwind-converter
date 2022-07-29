import {
  Feed,
  literal,
  MatchResult,
} from '../../../core';

export interface Open extends MatchResult<undefined> {
  type: 'pseudo-selector:open';
}

const matcher = literal('open');

export default function openPseudoSelector(feed: Feed): Open | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'pseudo-selector:open',
      value: undefined,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
