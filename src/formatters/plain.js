import _ from 'lodash';
import { NodeTypes } from '../diffbuilder.js';

const getPath = (node, rootPath) => {
  if (rootPath === '') {
    return String(node.key);
  }
  return `${rootPath}.${node.key}`;
};

const stringify = (obj) => {
  if (typeof obj === 'string') {
    return `'${obj}'`;
  }
  if (_.isPlainObject(obj)) {
    return '[complex value]';
  }
  return String(obj);
};

export const buildPlainStrings = (items, rootPath) => {
  const result = items.filter((item) => item.type !== NodeTypes.unchanged)
    .map((item) => {
      const path = getPath(item, rootPath);
      switch (item.type) {
        case NodeTypes.added: {
          const removedItem = _.find(items, { key: item.key, type: NodeTypes.removed });
          if (removedItem) {
            return `Property '${path}' was updated. From ${stringify(removedItem.value)} to ${stringify(item.value)}`;
          }
          return `Property '${path}' was added with value: ${stringify(item.value)}`;
        }
        case NodeTypes.removed: {
          if (_.find(items, { key: item.key, type: NodeTypes.added })) {
            return '';
          }
          return `Property '${path}' was removed`;
        }
        case NodeTypes.compound: return buildPlainStrings(item.children, path).join('\n');
        default: return '';
      }
    })
    .filter((str) => str !== '');

  return result;
};

export default function buildPlainOutput(items) {
  const result = buildPlainStrings(items, '');
  return `${result.join('\n')}`;
}
