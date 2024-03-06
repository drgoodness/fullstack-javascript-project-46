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
    const res = acc;

    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        res.push(buildNode(key, null, NodeTypes.compound, buildDiffTree(obj1[key], obj2[key])));
      } else if (obj1[key] === obj2[key]) {
        res.push(buildNode(key, obj1[key], NodeTypes.unchanged, []));
      } else {
        res.push(buildNode(key, obj1[key], NodeTypes.removed, []));
        res.push(buildNode(key, obj2[key], NodeTypes.added, []));
      }
    } else {
      if (!_.has(obj1, key)) {
        res.push(buildNode(key, obj2[key], NodeTypes.added, []));
      }
      if (!_.has(obj2, key)) {
        res.push(buildNode(key, obj1[key], NodeTypes.removed, []));
      }
    }

    return res;
  }, []);

  return result;
};

export { NodeTypes, buildDiffTree };
