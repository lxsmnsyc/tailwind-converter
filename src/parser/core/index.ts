import { createFeed } from './feed';
import { Matcher, MatchResult } from './matchers';

export function parse<T>(matcher: Matcher<T>, value: string): MatchResult<T> | null | undefined {
  return matcher(createFeed(value));
}

export * from './feed';
export * from './matchers';
