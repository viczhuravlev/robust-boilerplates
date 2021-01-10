# 🔵 Robust React Application

## Advantages

- **Zero configuration**
- Type safety with **typescript**
- Write **CSS in JS**, but get CSS files during build
- Powerful **theme** customization

### Features project:

- **Development** and **production** build
- Definition of **environment variables** using env file
- Typescript **type checker** on a separate processa
- Support **source map**
- **Polyfills** and their customization
- **Hot Module Replacement**
- Prepare of files with **Brotli compression**
- Auto detect **circular dependencies**
- Warn about **duplicate** versions of the same **package**
- **Visualize size** of webpack output files with an interactive zoomable treemap
- Automatic **code quality** check on commit

## Browser Support:

The polyfills are customized, and you can change the settings to suit your needs.
By default, the project doesn't support internet explorer, but can be configured for this (see the [polyfills](./docs/POLYFILLS.md), point 4).

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| last 3 versions                                                                                                                                                                                      | last 3 versions                                                                                                                                                                                                  | last 3 versions                                                                                                                                                                                              | last 3 versions                                                                                                                                                                                              |

## The tech stack is:

- [TypeScript](https://www.typescriptlang.org) 4 version
- [React](https://reactjs.org) 17 version
- [Linaria](https://linaria.now.sh/) 3 version (doesn't support IE)

#### Bundler

[Webpack](https://webpack.js.org/) 5 version and [Babel](https://babeljs.io/) 7 version is used to build the project.

#### Linters

- [Eslint](https://eslint.org/) and [Stylelint](https://stylelint.io/) protect code quality
- [Prettier](https://prettier.io/) is responsible for the beauty of the code
- Сhecking commits with means [Commitlint](https://github.com/conventional-changelog/commitlint) and [Husky](https://typicode.github.io/husky/#/)

## Documentation

- [Setup](./docs/SETUP.md)
- Configuration
  - [Polyfills](./docs/POLYFILLS.md)

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at vzhuravlev15@gmail.com
