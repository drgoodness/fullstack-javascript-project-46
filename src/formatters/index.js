import buildStylishOutput from './stylish.js';
import buildPlainOutput from './plain.js';

export default function buildOutput(items, format) {
  switch (format) {
    case 'stylish': return buildStylishOutput(items);
    case 'plain': return buildPlainOutput(items);
    case 'json': return JSON.stringify(items, null, 2);
    default: return undefined;
  }
}
