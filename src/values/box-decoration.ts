export const BOX_DECORATION = {
  'box-decoration-slice': { 'box-decoration-break': 'slice' },
  'box-decoration-clone': { 'box-decoration-break': 'clone' },
};

export type BoxDecorationValue = keyof typeof BOX_DECORATION;
