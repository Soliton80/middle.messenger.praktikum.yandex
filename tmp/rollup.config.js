import pug from 'rollup-plugin-pug';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    pug({
      // Pug options here
    })
  ]
};