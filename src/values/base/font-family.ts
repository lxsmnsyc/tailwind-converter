function createFontFamilyList(fonts: string[]): string {
  return fonts.join(', ');
}

export const BASE_FONT_FAMILY = {
  sans: createFontFamilyList([
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ]),
  serif: createFontFamilyList([
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ]),
  mono: createFontFamilyList([
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ]),
};

export type BaseFontFamilyValue = keyof typeof BASE_FONT_FAMILY;
