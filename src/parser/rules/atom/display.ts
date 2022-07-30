import { DISPLAY, DisplayValue } from '../../../values/display';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Display extends MatchResult<DisplayValue> {
  type: 'display';
}

const matcher = match(DISPLAY);

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
