export interface Feed {
  source: string;
  size: number;
  cursor: number;
}

export function createFeed(source: string): Feed {
  return {
    source,
    size: source.length,
    cursor: 0,
  };
}

export function lookFeed(feed: Feed): string {
  return feed.source.substring(feed.cursor);
}

export function peekFeed(feed: Feed, size: number): string {
  return feed.source.substring(feed.cursor, Math.min(feed.cursor + size, feed.size));
}

export function eatFeed(feed: Feed, pattern: string, size = pattern.length): boolean {
  if (lookFeed(feed).startsWith(pattern)) {
    feed.cursor += size;
    return true;
  }
  return false;
}

export function moreFeed(feed: Feed): boolean {
  return feed.cursor < feed.size;
}
