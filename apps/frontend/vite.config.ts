import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
	server: {
		port: 8080,
		open: true,
	},
	base: './',
	build: { outDir: './dist' },
	plugins: [react(), tsconfigPaths()],
	resolve: { alias: { '@/styles': path.join(__dirname, 'src', 'styles') } },
}));
