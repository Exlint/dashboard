import path from 'node:path';
import { createRequire } from 'node:module';
import fs from 'node:fs';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';
import sassDts from 'vite-plugin-sass-dts';

const hasDockerCGroup = () => {
	try {
		return fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch {
		return false;
	}
};

const hasDockerEnv = () => {
	try {
		fs.statSync('/.dockerenv');

		return true;
	} catch {
		return false;
	}
};

const prismaPlugin = () => {
	const require = createRequire(import.meta.url);
	const pathName = require.resolve('@prisma/client').replace('@prisma/client/index.js', '');

	return {
		name: 'prisma-vite-plugin',
		config: () => ({
			resolve: {
				alias: {
					'.prisma/client/index-browser': `${pathName}.prisma/client/index-browser.js`,
				},
			},
		}),
	};
};

const isDocker = hasDockerEnv() || hasDockerCGroup();

const removeDataTestIdsForProduction = [
	VitePluginReactRemoveAttributes({
		attributes: ['data-testid'],
	}),
];

export default defineConfig(({ mode }) => {
	const appMode = process.env.AUTOMATION === 'true' ? 'test' : mode;

	return {
		server: {
			port: 8080,
			open: !isDocker,
			host: isDocker ? '0.0.0.0' : 'localhost',
		},
		base: '/',
		build: { outDir: './dist' },
		plugins: [
			react(),
			tsconfigPaths(),
			prismaPlugin(),
			sassDts(),
			...(appMode !== 'test' ? removeDataTestIdsForProduction : []),
		],
		resolve: { alias: { '@/styles': path.join(__dirname, 'src', 'styles') } },
		preview: {
			port: 8080,
			open: appMode !== 'test',
			host: isDocker ? '0.0.0.0' : 'localhost',
		},
		mode: appMode,
	};
});
