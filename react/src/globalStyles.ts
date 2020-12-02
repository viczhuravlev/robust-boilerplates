import { css } from 'linaria';

const globalStyles = css`
  /* stylelint-disable */
  :global() {
    /* stylelint-enable */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    :root {
      --font-color: #fff;
      --font-color-secondary: #b0b0b1;
      --background-color: #333f52;
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

export default globalStyles;
