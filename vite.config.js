import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'



export default ({
    plugins: [
        vituum(),
        pug({
            root: './src',
        })
    ],
    css: {
        postcss: 'postcss.config.cjs'
    },

    build: {
        outDir: 'public/dist',
    },
    
});
