import {
  alternation,
  Feed,
  literal,
  MatchResult,
  pattern,
  sequence,
} from '../core';

export interface AtomWithVariant extends MatchResult<AtomWithVariant | MatchResult<string>> {
  type: 'atom-with-variant';
  variant: MatchResult<string>;
}

const identifier = pattern('[^:;\\s]+');

export default function atomWithVariant(feed: Feed): AtomWithVariant | undefined {
  const matcher = sequence(
    identifier,
    literal(':'),
    alternation(
      atomWithVariant,
      identifier,
    ),
  );

  const result = matcher(feed);

  console.log('atom-with-variant', result);

  if (result) {
    return {
      type: 'atom-with-variant',
      variant: result.value[0] as MatchResult<string>,
      value: result.value[2] as AtomWithVariant | MatchResult<string>,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
