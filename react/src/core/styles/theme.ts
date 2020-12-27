export type ThemeValues = {
  '--primary-color': string;

  '--font-color': string;
  '--font-color-secondary': string;

  '--background-color': string;
};

const theme = {
  white: '#FFFFFF',
  black: '#000000',
  'primary-color': '#1991EB',
};

export const light: ThemeValues = {
  '--primary-color': theme['primary-color'],

  '--font-color': '#333F52',
  '--font-color-secondary': '#B0B0B1',

  '--background-color': '#F8FAFB',
};

export const dark: ThemeValues = {
  '--primary-color': theme['primary-color'],

  '--font-color': theme.white,
  '--font-color-secondary': '#B0B0B1',

  '--background-color': '#333F52',
};
