export type ThemeValues = {
  '--font-color': string;
  '--font-color-secondary': string;

  '--background-color': string;
};

const theme = {
  white: '#FFFFFF',
  black: '#000000',
};

export const light: ThemeValues = {
  '--font-color': '#333F52',
  '--font-color-secondary': '#B0B0B1',

  '--background-color': '#F8FAFB',
};

export const dark: ThemeValues = {
  '--font-color': theme.white,
  '--font-color-secondary': '#B0B0B1',

  '--background-color': '#333F52',
};
