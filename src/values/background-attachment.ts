export const BACKGROUND_ATTACHMENT = {
  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-local': { 'background-attachment': 'local' },
  'bg-scroll': { 'background-attachment': 'scroll' },
};

export type BackgroundAttachmentValue = keyof typeof BACKGROUND_ATTACHMENT;
