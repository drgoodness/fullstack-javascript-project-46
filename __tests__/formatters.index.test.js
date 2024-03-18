import buildOutput from '../src/formatters/index.js';

describe('buildOutput()', () => {
  test('should throw an error in case of an unsupported format', () => {
    const tree = [{
      key: 'key',
      value: 'val',
      type: 'added',
      children: [],
    }];
    const format = 'unsupported';
    expect(() => buildOutput(tree, format)).toThrow(`Invalid format - ${format}`);
  });
});
