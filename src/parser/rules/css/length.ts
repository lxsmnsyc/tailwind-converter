import {
  alternation,
  Feed,
  literal,
  MatchResult,
} from '../../core';

export type CSSLengthValue =
  // Font-related
  | 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  | 'rem'
  | 'rlh'
  // Viewport
  | 'svh'
  | 'lvh'
  | 'dvh'
  | 'vh'
  | 'svw'
  | 'lvw'
  | 'dvw'
  | 'vw'
  | 'svmax'
  | 'lvmax'
  | 'dvmax'
  | 'vmax'
  | 'svmin'
  | 'lvmin'
  | 'dvmin'
  | 'vmin'
  | 'svb'
  | 'lvb'
  | 'dvb'
  | 'vb'
  | 'svi'
  | 'lvi'
  | 'dvi'
  | 'vi'
  // Absolute
  | 'px'
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt';

export interface CSSLength extends MatchResult<CSSLengthValue> {
  type: 'css:length';
}

const matcher = alternation(
  // Font-related
  literal('cap'),
  literal('ch'),
  literal('em'),
  literal('ex'),
  literal('ic'),
  literal('lh'),
  literal('rem'),
  literal('rlh'),
  // Viewport
  literal('svh'),
  literal('lvh'),
  literal('dvh'),
  literal('vh'),
  literal('svw'),
  literal('lvw'),
  literal('dvw'),
  literal('vw'),
  literal('svmax'),
  literal('lvmax'),
  literal('dvmax'),
  literal('vmax'),
  literal('svmin'),
  literal('lvmin'),
  literal('dvmin'),
  literal('vmin'),
  literal('svb'),
  literal('lvb'),
  literal('dvb'),
  literal('vb'),
  literal('svi'),
  literal('lvi'),
  literal('dvi'),
  literal('vi'),
  // Absolute
  literal('px'),
  literal('cm'),
  literal('mm'),
  literal('Q'),
  literal('in'),
  literal('pc'),
  literal('pt'),
);

export default function cssLength(feed: Feed): CSSLength | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'css:length',
      value: result.value as CSSLengthValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
