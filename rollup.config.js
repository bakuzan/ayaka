import '@babel/register';
import dotenv from 'dotenv';

import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import includePaths from 'rollup-plugin-includepaths';
import ts from 'rollup-plugin-typescript';
import typescript from 'typescript';

import pkg from './package.json';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const extensions = ['.ts', '.tsx'];
const input = 'lib/index.ts';

function rollupPlugins(options = {}) {
  const { isBrowser = false } = options;
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
      browser: isBrowser,
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
    input,
    output: {
      name: 'bundle',
      file: pkg.main,
      format: 'cjs',
      sourceMap: isProduction
    },
    plugins: rollupPlugins()
  },
  {
    input,
    output: {
      name: 'ayaka',
      file: pkg.browser,
      format: 'iife',
      sourceMap: isProduction
    },
    plugins: rollupPlugins({ isBrowser: true })
  }
];
