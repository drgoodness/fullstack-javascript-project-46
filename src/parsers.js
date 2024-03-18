import yaml from 'js-yaml';
import path from 'path';
import readFile from './filemanager.js';

function parseData(data, format) {
  switch (format) {
    case '.json': return JSON.parse(data);
    case '.yaml': return yaml.load(data);
    case '.yml': return yaml.load(data);
    default: throw new Error(`Invalid extension - ${format}`);
  }
}

export default function parseFile(filepath) {
  const data = readFile(filepath);
  const format = path.extname(filepath);
  return parseData(data, format);
}

export { parseData };
