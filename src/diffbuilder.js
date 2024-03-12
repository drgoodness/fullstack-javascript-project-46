import _ from 'lodash';

const NodeTypes = {
  added: 'added',
  removed: 'removed',
  unchanged: 'unchanged',
  compound: 'compound',
};

const buildNode = (key, value, type, children) => ({
  key, value, type, children,
});

const buildDiffTree = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const result = keys.reduce((acc, key) => {
    if (!_.has(obj1, key)) {
      return [
        ...acc,
        buildNode(key, obj2[key], NodeTypes.added, []),
      ];
    }
    if (!_.has(obj2, key)) {
      return [
        ...acc,
        buildNode(key, obj1[key], NodeTypes.removed, []),
      ];
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return [
        ...acc,
        buildNode(key, null, NodeTypes.compound, buildDiffTree(obj1[key], obj2[key])),
      ];
    }
    if (obj1[key] === obj2[key]) {
      return [
        ...acc,
        buildNode(key, obj1[key], NodeTypes.unchanged, []),
      ];
    }
    return [
      ...acc,
      buildNode(key, obj1[key], NodeTypes.removed, []),
      buildNode(key, obj2[key], NodeTypes.added, []),
    ];
  }, []);

  return result;
};

export { NodeTypes, buildDiffTree };
