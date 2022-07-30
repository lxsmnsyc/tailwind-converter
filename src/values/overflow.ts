export const OVERFLOW = {
  'overflow-auto': 'overflow: auto;',
  'overflow-hidden': 'overflow: hidden;',
  'overflow-clip': 'overflow: clip;',
  'overflow-visible': 'overflow: visible;',
  'overflow-scroll': 'overflow: scroll;',
  'overflow-x-auto': 'overflow-x: auto;',
  'overflow-y-auto': 'overflow-y: auto;',
  'overflow-x-hidden': 'overflow-x: hidden;',
  'overflow-y-hidden': 'overflow-y: hidden;',
  'overflow-x-clip': 'overflow-x: clip;',
  'overflow-y-clip': 'overflow-y: clip;',
  'overflow-x-visible': 'overflow-x: visible;',
  'overflow-y-visible': 'overflow-y: visible;',
  'overflow-x-scroll': 'overflow-x: scroll;',
  'overflow-y-scroll': 'overflow-y: scroll;',
};

export type OverflowValue = keyof typeof OVERFLOW;
