# Polyfills

> A default the project uses [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and [browserslist](https://github.com/browserslist/browserslist) config to determine the Polyfills needed for your project. You can change the settings according to your needs.

## The project uses `useBuiltIns: usage`. [default setting]

By default, the project automatically detects the polyfills needed based on the language features used in your source code. This ensures only the minimum amount of polyfills are included in your final bundle. However, this also means **if one of your dependencies has specific requirements on polyfills, by default Babel won't be able to detect it**.

### Third party solutions:

You can take advantage of the excellent [react-app-polyfill](https://www.npmjs.com/package/react-app-polyfill) package that is maintained by the create-react-app team, or you can just follow it as a good example. How to configure is described below.

### Control and manual setting:

1. **If one of your dependencies has specific requirements on polyfills, you will need to add it manually**.
   For example: If you use `fetch` in the project, you will need to add `whatwg-fetch` polyfill.

   ```js
   /* http.ts */
   import 'whatwg-fetch'

   fetch('https://api.github.com/users/viczhuravlev/repos')
       .then(...)
       .catch(...)
   ```

2. **If the dependency ships ES5 code and explicitly lists the polyfills needed**.
   You have to add these polyfills to the entry point file

   ```js
   /* index.ts */
   import 'core-js/es/promise';
   import 'core-js/es/symbol';
   ```

3. **If the dependency ships ES5 code, but uses ES6+ features without explicitly listing polyfill requirements**.
   You have to change the `preset-env` setting to `useBuiltIns: 'entry'`. You can find more information in the relevant section below.

4. **If the project needs support internet explorer(🤕), you have a few options**.
   The first thing to do is update `browserslist`.
   - You have to find all the places that have specific requirements on polyfills that babel could not determine and manually connect polyfills - see point 1.
   - You have to change the `preset-env` setting to `useBuiltIns: 'entry'`. You can find more information in the relevant section below.

## The project uses `useBuiltIns: 'entry'`.

You have to change the `preset-env` settings to `useBuiltIns: 'entry'` and then you need to add all polyfills to your entry file.
```js
 /* index.ts */
 import 'core-js/stable';
 import 'regenerator-runtime/runtime';
 ```
 This will import ALL polyfills based on your `browserslist` targets so that you don't need to worry about dependency polyfills anymore, but will likely increase your final bundle size with some unused polyfills.

## The project uses `useBuiltIns: false`.

If the project doesn't need polyfills, you will have to change the `preset-env` settings to `useBuiltIns: 'false'` to disable automatic polyfill injection. This ensures you don't include unnecessary polyfills in your code, as it should be the responsibility of the consuming app to include polyfills.
