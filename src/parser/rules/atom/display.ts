import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type DisplayValue =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'hidden';

export interface Display extends MatchResult<DisplayValue> {
  type: 'display';
}

const matcher = alternation(
  literal('aspect-auto'),
  literal('aspect-square'),
  literal('aspect-video'),
);

export default function display(feed: Feed): Display | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'display',
      value: result.value as DisplayValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
