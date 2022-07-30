export default class ParserError extends Error {
  public position: number;

  public size: number;

  constructor(position: number, size: number) {
    super(`Unexpected character at position ${position}`);

    this.position = position;
    this.size = size;
  }
}
