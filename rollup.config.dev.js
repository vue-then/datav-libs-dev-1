const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')

const inputPath = path.resolve(__dirname, './src/index.js')
const ouputUmdPath = path.resolve(__dirname, './dist/datav.js')
const ouputEsPath = path.resolve(__dirname, './dist/datav.es.js')

module.exports =  {
  input: inputPath,
  output: [{
    file: ouputUmdPath,
    format: 'umd',
    name: 'datav'
  }, {
    file: ouputEsPath,
    format: 'es'
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json()
  ],
  external: [
    'vue'
  ]
}