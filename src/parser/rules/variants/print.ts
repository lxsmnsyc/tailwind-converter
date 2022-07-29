import {
  Feed,
  literal,
  MatchResult,
} from '../../core';

export interface Print extends MatchResult<undefined> {
  type: 'variant:print';
}

const matcher = literal('print');

export default function printVariant(feed: Feed): Print | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'variant:print',
      value: undefined,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
