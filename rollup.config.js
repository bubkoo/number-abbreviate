import config from '@bubkoo/rollup-config'

export default config({
  output: [
    {
      name: 'numabbr',
      format: 'umd',
      file: 'dist/numabbr.js',
      sourcemap: true,
    },
  ],
})
