import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import ViteRestart from 'vite-plugin-restart';
import copy from 'rollup-plugin-copy';

import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

export default ({ command }) => ({
	base: command === 'serve' ? '' : '/dist/',
	publicDir: 'src/public',
	build: {
		outDir: 'web/dist/',
		emptyOutDir: true,
		sourcemap: true,
		manifest: 'manifest.json',
		minify: 'esbuild',
		rollupOptions: {
			input: {
				index: './src/index.js',
			},
			output: {
				dir: 'web/dist/',
			},
		},
	},
	server: {
		fs: {
			strict: false,
		},
		host: '0.0.0.0',
		origin: 'http://localhost:3000',
		port: 3000,
		strictPort: true,
	},
	plugins: [
		ViteRestart({
			reload: ['templates/**/*'],
		}),
		ViteFaviconsPlugin({
			logo: 'src/public/images/favicon.png',
			inject: false,
			outputPath: '../favicon',
			// favicons: {
			// 	cacheBustingQueryParam: '?v=' + Date.now(),
			// }
		}),
		copy({
			targets: [
				{
					src: 'src/public/**/*',
					dest: 'web/dist',
				},
			],
		}),
		viteImagemin({
			plugins: {
				png: imageminPngquant(),
				svg: imageminSvgo(),
			},
		}),
	],
});
