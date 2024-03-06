import { buildPlainStrings } from '../src/formatters/plain.js';

describe('buildPlainStrings()', () => {
  test('should return [] for unsupported node types', () => {
    const tree = [{
      key: 'key',
      value: 'val',
      type: 'unsupported',
      children: [],
    }];

    const result = buildPlainStrings(tree, '');
    expect(result).toEqual([]);
  });
});
