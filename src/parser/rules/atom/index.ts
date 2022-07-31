import { ATOMS, AtomValue } from '../../../values';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Atom extends MatchResult<AtomValue> {
  type: 'atom';
}

const matcher = match(ATOMS);

export default function atom(feed: Feed): Atom | undefined {
  const result = matcher(feed);
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
