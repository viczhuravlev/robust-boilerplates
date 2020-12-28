const THEME_ATTRIBUTE_NAME = 'data-theme';

export enum ThemeMode {
  light = 'light',
  dark = 'dark',
}

function getBody(): HTMLElement {
  return document.body;
}

function setBodyAttribute(name: string, value: string) {
  getBody().setAttribute(name, value);
}

function turnOnLightTheme() {
  setBodyAttribute(THEME_ATTRIBUTE_NAME, ThemeMode.light);
}

function turnOnDarkTheme() {
  setBodyAttribute(THEME_ATTRIBUTE_NAME, ThemeMode.dark);
}

export function getCurrentThemeMode(): ThemeMode {
  const theme = getBody().getAttribute('data-theme');

  return theme === ThemeMode.light ? ThemeMode.light : ThemeMode.dark;
}

function isLightMode() {
  const currentThemeMode = getCurrentThemeMode();

  return currentThemeMode === ThemeMode.light;
}

export function switchOnTheme(): ThemeMode {
  if (isLightMode()) {
    turnOnDarkTheme();

    return ThemeMode.dark;
  }

  turnOnLightTheme();

  return ThemeMode.light;
}
