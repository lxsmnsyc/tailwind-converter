export const TEXT_OVERFLOW = {
  truncate: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  },
  'text-ellipsis': { 'text-overflow': 'ellipsis' },
  'text-clip': { 'text-overflow': 'clip' },
};

export type TextOverflowValue = keyof typeof TEXT_OVERFLOW;
