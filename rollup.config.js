import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import url from 'rollup-plugin-url'
import sourceMaps from 'rollup-plugin-sourcemaps';
//import scss from 'rollup-plugin-scss';
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
    //scss(),
    commonjs(),
    sourceMaps(),
  ]
}
