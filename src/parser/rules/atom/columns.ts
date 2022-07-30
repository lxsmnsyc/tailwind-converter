import { COLUMNS, ColumnsValue } from '../../../values/columns';
import {
  alternation,
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Columns extends MatchResult<ColumnsValue> {
  type: 'columns';
}

const matcher = alternation(
  ...match(COLUMNS),
);

export default function columns(feed: Feed): Columns | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'columns',
      value: result.value as ColumnsValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
