#!/usr/bin/env node
const path = require('path')
const { Command } = require('commander');

const pkg = require(path.join(__dirname, '../', 'package.json'));

const program = new Command();
program.version(pkg.version)

program
  .command('init')
  .description('Test the npm CLI executables.')
  .option('-n, --name <name>', 'Your name.')
  .action(({ name }) => {
    const userName = name || 'Guest'
    console.log(`Hi, ${userName}`)
  });

program.parse();