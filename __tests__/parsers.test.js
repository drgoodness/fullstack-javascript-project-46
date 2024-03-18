import { parseData } from '../src/parsers.js';

describe('parseData()', () => {
  test('should throw an error if choosen an unsupported extension', () => {
    const ext = 'inv-format';
    expect(() => parseData('', ext)).toThrow(`Invalid extension - ${ext}`);
  });
});
