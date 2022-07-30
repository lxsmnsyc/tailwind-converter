import { GRID_COLUMN_START, GridColumnStartValue } from '../../../values/grid-column-start';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface GridColumnStart extends MatchResult<GridColumnStartValue> {
  type: 'grid-column-start';
}

const matcher = match(GRID_COLUMN_START);

export default function gridColumnStart(feed: Feed): GridColumnStart | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'grid-column-start',
      value: result.value as GridColumnStartValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
