import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type ColumnsValue =
  | 'columns-1'
  | 'columns-2'
  | 'columns-3'
  | 'columns-4'
  | 'columns-5'
  | 'columns-6'
  | 'columns-7'
  | 'columns-8'
  | 'columns-9'
  | 'columns-10'
  | 'columns-11'
  | 'columns-12'
  | 'columns-auto'
  | 'columns-3xs'
  | 'columns-2xs'
  | 'columns-xs'
  | 'columns-sm'
  | 'columns-md'
  | 'columns-lg'
  | 'columns-xl'
  | 'columns-2xl'
  | 'columns-3xl'
  | 'columns-4xl'
  | 'columns-5xl'
  | 'columns-6xl'
  | 'columns-7xl';

export interface Columns extends MatchResult<ColumnsValue> {
  type: 'columns';
}

const matcher = alternation(
  literal('columns-1'),
  literal('columns-2'),
  literal('columns-3'),
  literal('columns-4'),
  literal('columns-5'),
  literal('columns-6'),
  literal('columns-7'),
  literal('columns-8'),
  literal('columns-9'),
  literal('columns-10'),
  literal('columns-11'),
  literal('columns-12'),
  literal('columns-auto'),
  literal('columns-3xs'),
  literal('columns-2xs'),
  literal('columns-xs'),
  literal('columns-sm'),
  literal('columns-md'),
  literal('columns-lg'),
  literal('columns-xl'),
  literal('columns-2xl'),
  literal('columns-3xl'),
  literal('columns-4xl'),
  literal('columns-5xl'),
  literal('columns-6xl'),
  literal('columns-7xl'),
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
