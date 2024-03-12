import pug from 'rollup-plugin-pug';


export default {
  root: './src/pages',
  build: {
    rollupOptions: {
      plugins: [
        pug({ inlineRuntimeFunctions: true }),
      ],
    },
  },
  plugins: [
    pug({ inlineRuntimeFunctions: true }),
  ],
  
  css: {
    postcss: 'postcss.config.cjs',
  },

}

