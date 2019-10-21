import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import url from 'rollup-plugin-url'
import sourceMaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy-glob';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json'

export default {
  input: 'src/library-index.tsx',
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    external(),
    url(),
    typescript({
      tsconfig: 'tsconfig-rollup.json',    
    }),
    /*copy([
      { files: 'src/styles/defs/*.scss', dest: 'styles' }
    ], { verbose: true }),*/
    commonjs(),
    sourceMaps(),
  ]
}
