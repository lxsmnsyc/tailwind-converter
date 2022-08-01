import classlist, { ClassList } from './classlist';
import {
  createFeed,
  MatchResult,
  moreFeed,
  pattern,
  sequence,
} from './core';
import ParserError from './ParserError';
import { Selector } from './tokens';

const matcher = sequence(
  pattern('\\s*'),
  pattern(Selector),
  pattern('\\s*=\\s*'),
  classlist,
  pattern('\\s*'),
);

export interface Selector extends MatchResult<MatchResult<string>> {
  type: 'selector';
  classlist: ClassList;
}

export default function tokenize(classnames: string) {
  const result: Selector[] = [];
  const feed = createFeed(classnames);
  while (moreFeed(feed)) {
    const currentMatch = matcher(feed);
    if (currentMatch) {
      result.push({
        type: 'selector',
        value: currentMatch.value[1] as MatchResult<string>,
        classlist: currentMatch.value[3] as ClassList,
        start: currentMatch.start,
        end: currentMatch.end,
      });
    } else {
      throw new ParserError('character', feed.cursor, feed.size);
    }
  }

  return result;
}
