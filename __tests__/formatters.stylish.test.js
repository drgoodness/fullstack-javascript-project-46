import { buildStylishStrings, getShift } from '../src/formatters/stylish.js';

describe('buildStylishStrings()', () => {
  test('should return [""] for unsupported node types', () => {
    const tree = [{
      key: 'key',
      value: 'val',
      type: 'unsupported',
      children: [],
    }];

    const result = buildStylishStrings(tree);
    expect(result).toEqual(['']);
  });
});

describe('getShift()', () => {
  test('should return a valid string with default length', () => {
    const result = getShift(1);
    expect(result).toBe('  ');
  });
});
