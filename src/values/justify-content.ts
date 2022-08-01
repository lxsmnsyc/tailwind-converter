export const JUSTIFY_CONTENT = {
  'justify-start': 'justify-content: flex-start;',
  'justify-end': 'justify-content: flex-end;',
  'justify-center': 'justify-content: center;',
  'justify-between': 'justify-content: space-between;',
  'justify-around': 'justify-content: space-around;',
  'justify-evenly': 'justify-content: space-evenly;',
};

export type JustifyContentValue = keyof typeof JUSTIFY_CONTENT;
