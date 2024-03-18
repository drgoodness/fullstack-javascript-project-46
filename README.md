# gendiff.js
[![Hexlet | Actions Status](https://github.com/drgoodness/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/drgoodness/fullstack-javascript-project-46/actions)
[![Node CI | Actions Status](https://github.com/drgoodness/fullstack-javascript-project-46/actions/workflows/node-ci.yml/badge.svg)](https://github.com/drgoodness/fullstack-javascript-project-46/actions)
[![Codeclimate | Maintainability](https://api.codeclimate.com/v1/badges/3a8fca23bac973d20abe/maintainability)](https://codeclimate.com/github/drgoodness/fullstack-javascript-project-46/maintainability)
[![Codeclimate | Test Coverage](https://api.codeclimate.com/v1/badges/3a8fca23bac973d20abe/test_coverage)](https://codeclimate.com/github/drgoodness/fullstack-javascript-project-46/test_coverage)

## Description
Here is introduced a cli-app which finds differences in 2 files and shows them in different formats.

Supported file extensions:
- json
- yaml
- yml

Supported output formats:
- stylish (by default)
- plain
- json

## Usage
### Prerequisites
- Node 21 is installed.
### Install
```bash
git clone https://github.com/drgoodness/fullstack-javascript-project-46.git

npm ci

npm link
```
### Run
Start an app. For example:
```bash
gendiff -h

Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           display help for command
```

## Demo
[![asciicast](https://asciinema.org/a/aiJQ5v9IsMu1p9nVzSlXRe9Ki.svg)](https://asciinema.org/a/aiJQ5v9IsMu1p9nVzSlXRe9Ki)