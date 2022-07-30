import { BaseScreenValue, BASE_SCREEN } from './base/screen';

type BreakpointProperties = {
  [key in BaseScreenValue]: string;
}

function createBreakpoints(): BreakpointProperties {
  const properties: Record<string, string> = {};

  for (const property of Object.keys(BASE_SCREEN)) {
    properties[property] = `(min-width: ${BASE_SCREEN[property as BaseScreenValue]})`;
  }

  return properties as BreakpointProperties;
}

export const BREAKPOINTS = createBreakpoints();

export type BreakpointValue = keyof typeof BREAKPOINTS;
