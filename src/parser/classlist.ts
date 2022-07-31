import {
  alternation,
  character,
  Feed,
  MatchResult,
  moreFeed,
} from './core';
import ParserError from './ParserError';
import atom, { Atom } from './rules/atom';
import atomWithVariant, { AtomWithVariant } from './rules/atom-with-variant';
import blank from './rules/blank';

export interface ClassList extends MatchResult<(Atom | AtomWithVariant)[]> {
  type: 'classlist';
}

const matcher = alternation(
  atomWithVariant,
  atom,
);

export default function classlist(
  feed: Feed,
): ClassList {
  const result: (Atom | AtomWithVariant)[] = [];

  const start = feed.cursor;

  while (moreFeed(feed)) {
    const currentMatch = matcher(feed);
    if (currentMatch) {
      result.push(currentMatch);

      const isWhitespace = blank(feed);
      if (!isWhitespace) {
        const isTerminator = character(';')(feed);
        if (isTerminator) {
          return {
            type: 'classlist',
            value: result,
            start,
            end: feed.cursor,
          };
        }
        throw new ParserError(feed);
      }
    } else {
      const isTerminator = character(';')(feed);
      if (isTerminator) {
        return {
          type: 'classlist',
          value: result,
          start,
          end: feed.cursor,
        };
      }
      throw new ParserError(feed);
    }
  }

  return {
    type: 'classlist',
    value: result,
    start,
    end: feed.cursor,
  };
}
