#!/usr/bin/env node

const program = require('commander');
const config = require('./configs/configs');

const rc = require('./commands/generate-rc');

program
  .version(config.version)

program
  .command('rc')
  .description('Generates a vimrc.')
  .option('-c', '--config [config]', 'specify a config file')
  .action(rc);

program.parse(process.argv);
