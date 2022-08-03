export const JUSTIFY_SELF = {
  'justify-items-start': { 'justify-items': 'start' },
  'justify-items-end': { 'justify-items': 'end' },
  'justify-items-center': { 'justify-items': 'center' },
  'justify-items-stretch': { 'justify-items': 'stretch' },
};

export type JustifySelfValue = keyof typeof JUSTIFY_SELF;
