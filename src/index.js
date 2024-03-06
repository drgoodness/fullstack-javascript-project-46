import parseFile from './parsers.js';
import { buildDiffTree } from './diffbuilder.js';
import buildOutput from './formatters/index.js';

export default function getDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const resultArr = buildDiffTree(data1, data2);
  return buildOutput(resultArr, format);
}
