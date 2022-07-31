import {
  createFeed,
  moreFeed,
} from './core';
import ParserError from './ParserError';
import selector, { Selector } from './selector';

export default function parseClassnames(
  classnames: string,
): Selector[] {
  const result: Selector[] = [];

  const feed = createFeed(classnames);

  while (moreFeed(feed)) {
    const currentMatch = selector(feed);
    if (currentMatch) {
      result.push(currentMatch);
    } else {
      throw new ParserError(feed);
    }
  }

  return result;
}
