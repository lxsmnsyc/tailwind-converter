import classlist, { ClassList } from './classlist';
import {
  character,
  Feed,
  MatchResult,
  pattern,
  sequence,
} from './core';
import cssSelector, { CSSSelector } from './css-selector';
import ParserError from './ParserError';

export interface Selector extends MatchResult<ClassList> {
  type: 'selector';
  selector: CSSSelector;
}

const matcher = sequence(
  pattern('\\s*'),
  cssSelector,
  pattern('\\s*'),
  character('='),
  pattern('\\s*'),
  classlist,
  pattern('\\s*'),
);

export default function selector(feed: Feed): Selector {
  const result = matcher(feed);

  if (result) {
    const selectorValue = result.value[1];
    const list = result.value[5];

    return {
      type: 'selector',
      selector: selectorValue as CSSSelector,
      value: list as ClassList,
      start: result.start,
      end: result.end,
    };
  }
  throw new ParserError(feed);
}
