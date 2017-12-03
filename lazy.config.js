import uglify from 'rollup-plugin-uglify' // eslint-disable-line import/no-extraneous-dependencies
import buble from 'rollup-plugin-buble' // eslint-disable-line import/no-extraneous-dependencies

export default {
  entry: 'js/lazyLoad/index.js',
  dest: 'public/lazy.js',
  format: 'iife',
  plugins: [buble(), uglify()],
}
