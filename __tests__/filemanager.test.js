import path from 'path';
import { getFileExtension } from '../src/filemanager.js';

const getFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('getFileExtension()', () => {
  test('should return empty string if a file does not have an extension', () => {
    const filepath = getFilePath('file_wo_extension');
    const result = getFileExtension(filepath);

    expect(result).toBe('');
  });
});
