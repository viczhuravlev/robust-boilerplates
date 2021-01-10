const fs = require('fs').promises;
const path = require('path');

const config = require('../config');

function isObject(object) {
  return object && typeof object === 'object';
}

/**
 * Deep object merge.
 *
 * @param {object} target
 * @param {object} source
 *
 * @returns {object}
 */
function mergeDeep(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      const fullValues = new Set(targetValue.concat(sourceValue));

      target[key] = [...fullValues];
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

/**
 * Merge base and custom config for ts
 *
 * @returns {Promise<void>}
 */
async function mergeTsConfig() {
  const tsconfigBasePath = path.join(config.ROOT_PATH, 'tsconfig-base.json');
  const tsconfigBase = await fs.readFile(tsconfigBasePath);
  const tsconfigBaseJSON = JSON.parse(tsconfigBase);

  const tsconfigPath = path.join(config.ROOT_PATH, 'tsconfig.json');
  const tsconfig = await fs.readFile(tsconfigPath);
  const tsconfigJSON = JSON.parse(tsconfig);

  const fullTsconfigJSON = mergeDeep(tsconfigBaseJSON, tsconfigJSON);

  delete fullTsconfigJSON.extends;

  await fs.writeFile(tsconfigPath, JSON.stringify(fullTsconfigJSON, null, 2));
}

module.exports = {
  mergeTsConfig,
};
