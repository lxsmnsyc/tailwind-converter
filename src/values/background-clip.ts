export const BACKGROUND_CLIP = {
  'bg-clip-border': { 'background-clip': 'border-box' },
  'bg-clip-padding': { 'background-clip': 'padding-box' },
  'bg-clip-content': { 'background-clip': 'content-box' },
  'bg-clip-text': { 'background-clip': 'text' },
};

export type BackgroundClipValue = keyof typeof BACKGROUND_CLIP;
