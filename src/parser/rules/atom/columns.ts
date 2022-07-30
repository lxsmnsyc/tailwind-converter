import { COLUMNS, ColumnsValue } from '../../../values/columns';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Columns extends MatchResult<ColumnsValue> {
  type: 'columns';
}

const matcher = match(COLUMNS);

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
