export const TEXT_DECORATION_STYLE = {
  'decoration-solid': { 'text-decoration-style': 'solid' },
  'decoration-double': { 'text-decoration-style': 'double' },
  'decoration-dotted': { 'text-decoration-style': 'dotted' },
  'decoration-dashed': { 'text-decoration-style': 'dashed' },
  'decoration-wavy': { 'text-decoration-style': 'wavy' },
};

export type TextDecorationStyleValue = keyof typeof TEXT_DECORATION_STYLE;
