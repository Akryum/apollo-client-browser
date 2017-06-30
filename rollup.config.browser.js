import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js-harmony'

export default {
  entry: 'index.js',
  dest: 'dist/apollo-client.min.js',
  format: 'iife',
  exports: 'named',
  moduleName: 'Apollo',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      include: ['node_modules/graphql/**'],
    }),
    uglify({}, minify),
  ],
}
