import { ORDER, OrderValue } from '../../../values/order';
import {
  Feed,
  match,
  MatchResult,
} from '../../core';

export interface Order extends MatchResult<OrderValue> {
  type: 'order';
}

const matcher = match(ORDER);

export default function order(feed: Feed): Order | undefined {
  const result = matcher(feed);

  if (result) {
    return {
      type: 'order',
      value: result.value as OrderValue,
      start: result.start,
      end: result.end,
    };
  }
  return undefined;
}
