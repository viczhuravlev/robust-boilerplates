const ora = require('ora');

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Add loader for function.
 *
 * @param {string} text - The text for the user describing the process.
 * @param {function} fn
 * @param {array} params - The params of fn
 *
 * @returns {Promise<*>}
 */
async function withLoader(text, fn, params) {
  const spinner = ora(text).start();

  const result = await fn.apply(null, params);

  await timeout(300);

  spinner.succeed();

  return result;
}

module.exports = {
  withLoader,
};
