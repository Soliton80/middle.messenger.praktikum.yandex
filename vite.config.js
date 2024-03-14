import pug from 'rollup-plugin-pug';

export default ({ mode }) => ({
  root: './src/pages',
  build: {
    outDir: '../../dist',
    rollupOptions: {
      plugins: [
        pug(),
      ],
    },
  },
  plugins: mode === 'development' ? [
    pug(),
  ] : [],
  css: {
    postcss: 'postcss.config.cjs',
  },
});
