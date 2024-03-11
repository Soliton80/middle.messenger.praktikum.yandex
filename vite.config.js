import vituum from 'vituum';
import pug from 'rollup-plugin-pug';
import vitePug from '@vituum/vite-plugin-pug';
// import { rollup } from 'rollup';


export default {
  build: {
    rollupOptions: {
      plugins: [
        pug(),
      ],
    },
  },
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

}
