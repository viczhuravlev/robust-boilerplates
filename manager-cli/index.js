#!/usr/bin/env node

const prompts = require('prompts');

const config = require('./config');

const { withLoader } = require('./utils/loader');
const { runCommand } = require('./utils/command');

const {
  getBoilerplates,
  createBoilerplate,
  removeBoilerplates,
  boilerplatePreparation,
} = require('./boilerplate');

async function init() {
  console.log(`
====================================

  💬 Hello! I will help you choose
  and prepare a project for you.
`);

  const boilerplates = await withLoader('Loading boilerplates', getBoilerplates);

  const response = await prompts([
    {
      type: 'select',
      name: 'selectedBoilerplate',
      message: 'Pick boilerplates',
      choices: boilerplates.map((boilerplate) => ({
        title: boilerplate.name,
        value: boilerplate.name,
      })),
    },
    {
      type: 'toggle',
      name: 'isEmpty',
      message: 'Is empty repository?',
      initial: false,
      active: 'yes',
      inactive: 'no',
    },
  ]);

  const { selectedBoilerplate, isEmpty } = response;

  await withLoader(`Creating the ${selectedBoilerplate} boilerplate`, createBoilerplate, [
    selectedBoilerplate,
  ]);

  await withLoader(`Removing unnecessary boilerplates`, removeBoilerplates, [boilerplates]);

  await withLoader(`Project preparation`, boilerplatePreparation, [selectedBoilerplate, isEmpty]);

  await withLoader('Installing dependencies', runCommand, [
    'yarn',
    ['install'],
    {
      cwd: config.ROOT_PATH,
    },
  ]);

  console.log(`
  ✅ Done

====================================
  `);
}

init();

process.on('uncaughtException', (error) => {
  console.error(`🔥 An uncaught exception detected: ${error}`);
  process.exit(-1);
});

process.on('unhandledRejection', (error) => {
  console.error(`🔥 An unhandled rejection detected: ${error}`);
  process.exit(-1);
});
