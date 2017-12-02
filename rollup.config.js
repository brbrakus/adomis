import uglify from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'

export default {
  entry: 'js/index.js',
  dest: 'public/bundle.js',
  format: 'iife',
  plugins: [buble(), uglify()],
}
