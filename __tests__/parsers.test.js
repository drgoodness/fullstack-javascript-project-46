import { parseData } from '../src/parsers.js';

describe('parseData()', () => {
  test('should throw an error if choosen an unsupported format', () => {
    const result = parseData('', 'inv-format');
    expect(result).toBe(undefined);
  });
});
