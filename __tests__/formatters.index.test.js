import buildOutput from '../src/formatters/index.js';

describe('buildOutput()', () => {
  test('should return undefined for unsupported formats', () => {
    const tree = [{
      key: 'key',
      value: 'val',
      type: 'added',
      children: [],
    }];
    const result = buildOutput(tree, 'unsupported');
    expect(result).toBe(undefined);
  });
});
