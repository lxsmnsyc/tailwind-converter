import {
  alternation,
  createFeed,
  moreFeed,
} from './core';
import ParserError from './ParserError';
import atom, { Atom } from './rules/atom';
import atomWithVariant, { AtomWithVariant } from './rules/atom-with-variant';

export default function parseClassnames(
  classnames: string,
): (Atom | AtomWithVariant)[] {
  const matcher = alternation(
    atomWithVariant,
    atom,
  );

  const result: (Atom | AtomWithVariant)[] = [];

  const feed = createFeed(classnames);

  while (moreFeed(feed)) {
    const currentMatch = matcher(feed);
    if (currentMatch) {
      result.push(currentMatch);
    } else {
      throw new ParserError(feed.cursor, feed.size);
    }
  }

  return result;
}
