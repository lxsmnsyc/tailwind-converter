export default class ParserError extends Error {
  public start: number;

  public end: number;

  constructor(tokenType: string, start: number, end: number) {
    super(`Unexpected ${tokenType} at position ${start} to ${end}`);

    this.start = start;
    this.end = end;
  }
}
