import path from 'path';
import getDiff from '../src/index.js';
import readFile from '../src/filemanager.js';

const getFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('getDiff()', () => {
  test('should find differences in 2 files and print output in default format', () => {
    const filepath1 = getFilePath('file1.json');
    const filepath2 = getFilePath('file2.json');
    const result = getDiff(filepath1, filepath2);

    const expectedResult = readFile(getFilePath('expected_result_stylish'));
    expect(result).toBe(expectedResult);
  });
  test.each([
    ['file1.json', 'file2.json', 'stylish', 'expected_result_stylish'],
    ['file1.yaml', 'file2.yaml', 'stylish', 'expected_result_stylish'],
    ['file1.yml', 'file2.yml', 'stylish', 'expected_result_stylish'],
    ['file1.json', 'file2.json', 'json', 'expected_result_json'],
    ['file1.json', 'file2.json', 'plain', 'expected_result_plain'],
  ])('should find differences in 2 files and format output correctly', (file1, file2, format, expectedResultFile) => {
    const filepath1 = getFilePath(file1);
    const filepath2 = getFilePath(file2);
    const result = getDiff(filepath1, filepath2, format);

    const expectedResult = readFile(getFilePath(expectedResultFile));
    expect(result).toBe(expectedResult);
  });
});
