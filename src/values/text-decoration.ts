export const TEXT_DECORATION = {
  underline: 'text-decoration-line: underline;',
  overline: 'text-decoration-line: overline;',
  'line-through': 'text-decoration-line: line-through;',
  'no-underline': 'text-decoration-line: none;',
};

export type TextDecorationValue = keyof typeof TEXT_DECORATION;
