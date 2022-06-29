import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => ({
	server: {
		port: 4200,
	},
	plugins: [eslintPlugin()],
}));
