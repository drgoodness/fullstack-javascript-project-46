#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/index.js';

const run = () => {
  const program = new Command();

  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
      const data = getDiff(filepath1, filepath2, program.opts().format);
      console.log(data);
    });

  program.parse();
};

run();
