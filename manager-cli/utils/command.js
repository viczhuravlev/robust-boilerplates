const { spawn } = require('child_process');

/**
 * command execution
 *
 * @param {string} command
 * @param {array} args
 * @param {object}options
 *
 * @returns {Promise<unknown>}
 */
function runCommand(command, args, options = undefined) {
  const spawned = spawn(command, args, options);

  return new Promise((resolve) => {
    spawned.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    spawned.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    spawned.on('close', () => {
      resolve();
    });
  });
}

module.exports = {
  runCommand,
};
