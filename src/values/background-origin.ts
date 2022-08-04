export const BACKGROUND_ORIGIN = {
  'bg-origin-border': { 'background-origin': 'border-box' },
  'bg-origin-padding': { 'background-origin': 'padding-box' },
  'bg-origin-content': { 'background-origin': 'content-box' },
};

export type BackgroundOriginValue = keyof typeof BACKGROUND_ORIGIN;
