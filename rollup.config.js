import * as path from "path";
import * as rimraf from "rimraf";
import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';

import {
  readdirSync,
  statSync,
} from "fs";

const delimiter = path.sep;

const shared = (path = '') => ({
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    copy({
      targets: [
        {
          src: `.${delimiter}package.json`,
          dest: `dist${delimiter}${path}`,
        },
        {
          src: `.${delimiter}README.md`,
          dest: `dist${delimiter}${path}`,
        },
        {
          src: `.${delimiter}.eslintrc`,
          dest: `dist${delimiter}${path}`,
        },
      ],
    }),
  ],
});

function getOutputs(baseFolder = 'output', folderList = []) {
  const folders = readdirSync(baseFolder).filter(file => statSync(path.join(baseFolder, file)).isDirectory());

  folders.forEach((folder) => {
    // Skip first level
    if (baseFolder.indexOf(delimiter) !== -1) {
      folderList.push(path.join(baseFolder, folder));
    }

    getOutputs(path.join(baseFolder, folder), folderList);
  });

  return folderList.map((path) => path.replace(`${baseFolder}${delimiter}`, ''));
}

const outputs = getOutputs()
  .map((dir) => {
    return {
      input: path.join('output', dir),
      output: [
        {
          file: path.join('dist', dir, 'index.js'),
          format: 'cjs',
        },
      ],
      ...shared(dir),
    };
  });

try {
  rimraf.sync('dist');
} catch (err) {
  throw err;
}

export default [
  ...outputs,
];
