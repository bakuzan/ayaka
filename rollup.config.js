import '@babel/register';
import dotenv from 'dotenv';
import fse from 'fs-extra';
import path from 'path';

import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import includePaths from 'rollup-plugin-includepaths';
import ts from 'rollup-plugin-typescript';
import typescript from 'typescript';

import debugPlugin from './tools/debugPlugin';

import pkg from './package.json';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const extensions = ['.ts', '.tsx'];

function readFileNamesFor(dir, prefix) {
  return fse
    .readdirSync(dir)
    .filter((x) => x.endsWith('.ts'))
    .map((x) => `${prefix}${x}`);
}

function getInputFiles() {
  const libDir = path.join(__dirname, './lib/');
  const constantsDir = path.join(libDir, './constants');
  const files = [
    ...readFileNamesFor(libDir, 'lib/'),
    ...readFileNamesFor(constantsDir, 'lib/constants/')
  ];
  files.forEach((x) => console.log(x));
  return files;
}

function rollupPlugins() {
  return [
    replace({
      ['process.env.NODE_ENV']: JSON.stringify('production')
    }),
    includePaths({
      include: {},
      paths: ['lib'],
      external: [],
      extensions
    }),
    resolve({
      main: true,
      preferBuiltins: false
    }),
    ts({
      typescript
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions
    }),
    debugPlugin(),
    commonjs(),
    isProduction &&
      uglify({
        output: {
          comments: false
        },
        compress: {
          unused: true,
          dead_code: true, // big one--strip code that will never execute
          warnings: false,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true,
          sequences: true,
          booleans: true
        }
      })
  ];
}

export default [
  {
    input: [getInputFiles()],
    output: {
      name: 'bundle',
      file: pkg.main,
      format: 'cjs',
      sourceMap: isProduction
    },
    plugins: rollupPlugins()
  }
];
