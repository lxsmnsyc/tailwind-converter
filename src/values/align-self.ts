export const ALIGN_SELF = {
  'self-auto': 'align-self: auto;',
  'self-start': 'align-self: flex-start;',
  'self-end': 'align-self: flex-end;',
  'self-center': 'align-self: center;',
  'self-stretch': 'align-self: stretch;',
  'self-baseline': 'align-self: baseline;',
};

export type AlignSelfValue = keyof typeof ALIGN_SELF;
