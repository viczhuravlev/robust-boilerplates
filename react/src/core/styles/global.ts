import { css } from '@linaria/core';

import { light, dark } from './theme';

const global = css`
  /* stylelint-disable */
  :global() {
    /* stylelint-enable */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    :root {
      /** Theme */
      --primary-color: ${dark['--primary-color']};
      --font-color: ${dark['--font-color']};
      --font-color-secondary: ${dark['--font-color-secondary']};
      --background-color: ${dark['--background-color']};
    }

    [data-theme='light'] {
      --primary-color: ${light['--primary-color']};
      --font-color: ${light['--font-color']};
      --font-color-secondary: ${light['--font-color-secondary']};
      --background-color: ${light['--background-color']};
    }

    * {
      padding: 0;
      margin: 0;

      outline: none;
      -webkit-overflow-scrolling: touch;
    }

    html,
    body {
      box-sizing: border-box;

      width: 100%;
      height: 100%;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 1.4;
      color: var(--font-color);

      background-color: var(--background-color);

      transition: color 0.3s, background-color 0.3s;

      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    div {
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: border-box;
      }
    }

    input,
    button,
    textarea {
      box-sizing: border-box;
    }

    span {
      word-wrap: break-word;
    }

    #app {
      width: 100%;
      height: 100%;
    }
  }
`;

export default global;
