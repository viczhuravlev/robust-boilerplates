const THEME_ATTRIBUTE_NAME = 'data-theme';

export enum ThemeMode {
  light = 'light',
  dark = 'dark',
}

export function getBody(): HTMLElement {
  return document.body;
}

function setBodyAttribute(name: string, value: string) {
  getBody().setAttribute(name, value);
}

export function turnOnLightTheme() {
  setBodyAttribute(THEME_ATTRIBUTE_NAME, ThemeMode.light);
}

export function turnOnDarkTheme() {
  setBodyAttribute(THEME_ATTRIBUTE_NAME, ThemeMode.dark);
}
