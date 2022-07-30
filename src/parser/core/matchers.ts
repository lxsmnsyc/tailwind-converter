import { eatFeed, Feed, lookFeed } from './feed';

export interface ASTPosition {
  start: number;
  end: number;
}

export interface MatchResult<T> extends ASTPosition {
  value: T;
}

export type Matcher<T> = (feed: Feed) => MatchResult<T> | null | undefined;

type UnboxMatcher<T> =
  T extends Matcher<infer U>[]
    ? U
    : never;

export function alternation<T extends Matcher<any>[]>(
  ...matchers: T
): Matcher<UnboxMatcher<T>> {
  return (feed) => {
    for (let i = 0, len = matchers.length; i < len; i += 1) {
      const result = matchers[i](feed);

      if (result != null) {
        return result;
      }
    }
    return null;
  };
}

export function sequence<T extends Matcher<any>[]>(
  ...matchers: T
): Matcher<MatchResult<UnboxMatcher<T>>[]> {
  return (feed) => {
    const results: UnboxMatcher<T>[] = [];
    const { cursor } = feed;
    for (let i = 0, len = matchers.length; i < len; i += 1) {
      const result = matchers[i](feed) as UnboxMatcher<T>;

      if (result != null) {
        results.push(result);
      } else {
        feed.cursor = cursor;
        return null;
      }
    }
    return {
      value: results,
      start: cursor,
      end: feed.cursor,
    };
  };
}

export function pattern(value: string): Matcher<string> {
  const regexp = new RegExp(`^${value}`);
  return (feed) => {
    const peeked = lookFeed(feed);
    if (regexp.test(peeked)) {
      const result = regexp.exec(peeked);
      const { cursor } = feed;
      if (result != null && eatFeed(feed, result[0])) {
        return {
          value: result[0],
          start: cursor,
          end: feed.cursor,
        };
      }
    }
    return null;
  };
}

export function character(value: string): Matcher<string> {
  return (feed) => {
    const { cursor } = feed;
    if (eatFeed(feed, value, 1)) {
      return {
        value,
        start: cursor,
        end: feed.cursor,
      };
    }
    return null;
  };
}

export function literal(value: string): Matcher<string> {
  return (feed) => {
    const { cursor } = feed;
    if (eatFeed(feed, value, value.length)) {
      return {
        value,
        start: cursor,
        end: feed.cursor,
      };
    }
    return null;
  };
}

export function quantifier<T>(
  matcher: Matcher<T>,
  min = 0,
  max: number | undefined = undefined,
): Matcher<MatchResult<T>[]> {
  return (feed) => {
    const results: MatchResult<T>[] = [];
    const { cursor } = feed;
    let count = 0;
    while (true) {
      if (max != null && count >= max) {
        break;
      }
      const parsed = matcher(feed);
      if (!parsed) {
        break;
      }
      results.push(parsed);
      count += 1;
    }
    if (count >= min) {
      return {
        value: results,
        start: cursor,
        end: feed.cursor,
      };
    }
    feed.cursor = cursor;
    return null;
  };
}

export function optional<T>(matcher: Matcher<T>): Matcher<MatchResult<T> | null> {
  return (feed) => {
    const { cursor } = feed;
    const result = matcher(feed);
    if (result) {
      feed.cursor = cursor;
    }
    return {
      value: result ?? null,
      start: cursor,
      end: feed.cursor,
    };
  };
}

type Match = Record<string, string | string[]>;

export function match(map: Match): Matcher<string> {
  return alternation(
    ...Object.keys(map).map((item) => literal(item)),
  );
}
