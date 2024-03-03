import vituum from 'vituum';
import vitePug from '@vituum/vite-plugin-pug';
import pug from 'rollup-plugin-pug';

export default {
  plugins: [
    vituum(),
    pug(),
    vitePug({
      root: './src',
    }),
  ],
  css: {
    postcss: 'postcss.config.cjs',
  },

  // build: {
  //   outDir: 'public/dist',
  // },
};
