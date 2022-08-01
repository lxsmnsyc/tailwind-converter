export const PLACE_SELF = {
  'place-self-auto': 'place-self: auto;',
  'place-self-start': 'place-self: start;',
  'place-self-end': 'place-self: end;',
  'place-self-center': 'place-self: center;',
  'place-self-stretch': 'place-self: stretch;',
};

export type PlaceSelfValue = keyof typeof PLACE_SELF;
