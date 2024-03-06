import yaml from 'js-yaml';
import { readFile, getFileExtension } from './filemanager.js';

function parseData(data, format) {
  switch (format) {
    case 'json': return JSON.parse(data);
    case 'yaml': return yaml.load(data);
    case 'yml': return yaml.load(data);
    default: return undefined;
  }
}

export default function parseFile(filepath) {
  const data = readFile(filepath);
  const format = getFileExtension(filepath);
  return parseData(data, format);
}

export { parseData };
