import { Feed } from './core';

export default class ParserError extends Error {
  public position: number;

  public size: number;

  constructor(feed: Feed) {
    super(`Unexpected character at position ${feed.cursor}`);

    const nextBlank = feed.source.indexOf(' ', feed.cursor);
    const endCharacter = nextBlank !== -1 ? nextBlank : feed.size;
    this.position = feed.cursor;
    this.size = endCharacter;
  }
}
