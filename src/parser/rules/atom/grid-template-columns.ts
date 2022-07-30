import { GRID_TEMPLATE_COLUMNS, GridTemplateColumnsValue } from '../../../values/grid-template-columns';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface GridTemplateColumns extends MatchResult<GridTemplateColumnsValue> {
  type: 'grid-template-columns';
}

const matcher = match(GRID_TEMPLATE_COLUMNS);

export default function gridTemplateColumns(feed: Feed): GridTemplateColumns | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'grid-template-columns',
      value: result.value as GridTemplateColumnsValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
