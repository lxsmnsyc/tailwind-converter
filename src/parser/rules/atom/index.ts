import { ATOMS, AtomValue } from '../../../values';
import {
  Feed,
  alternation,
  sequence,
  match,
  MatchResult,
} from '../../core';
import blank from '../blank';
import eof from '../eof';

export interface Atom extends MatchResult<AtomValue> {
  type: 'atom';
}

const baseMatcher = match(ATOMS);

const matcher = sequence(
  baseMatcher,
  alternation(
    blank,
    eof,
  ),
);

export default function atom(feed: Feed): Atom | undefined {
  const result = matcher(feed)?.value[0];
  if (result) {
    return {
      type: 'atom',
      value: result.value as AtomValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
