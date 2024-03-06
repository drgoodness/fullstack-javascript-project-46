import _ from 'lodash';
import { NodeTypes } from '../diffbuilder.js';

export const getShift = (depth, isShort = true) => {
  const count = isShort ? depth * 4 - 2 : depth * 4;
  return ' '.repeat(count);
};

const stringify = (obj, depth) => {
  if (_.isPlainObject(obj)) {
    const strs = Object.entries(obj).map(([key, value]) => `${getShift(depth + 1, false)}${key}: ${stringify(value, depth + 1)}`);
    return `{\n${strs.join('\n')}\n${getShift(depth, false)}}`;
  }
  return String(obj);
};

const getString = (depth, symbol, item, isShort = true) => {
  const formattedValue = stringify(item.value, depth);
  return `${getShift(depth, isShort)}${symbol} ${item.key}: ${formattedValue}`;
};

export const buildStylishStrings = (items, depth = 1) => {
  const result = items.map((item) => {
    switch (item.type) {
      case NodeTypes.added: return getString(depth, '+', item);
      case NodeTypes.removed: return getString(depth, '-', item);
      case NodeTypes.unchanged: return getString(depth, ' ', item);
      case NodeTypes.compound: {
        const strs = buildStylishStrings(item.children, depth + 1);
        return `${getShift(depth, false)}${item.key}: {\n${strs.join('\n')}\n${getShift(depth, false)}}`;
      }
      default: return '';
    }
  });

  return result;
};

export default function buildStylishOutput(items) {
  const result = buildStylishStrings(items);
  return `{\n${result.join('\n')}\n}`;
}
