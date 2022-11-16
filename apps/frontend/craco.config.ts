import path from 'path';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { CracoConfig } from '@craco/craco';

const config: CracoConfig = {
	eslint: { enable: false },
	plugins: [
		{
			plugin: {
				overrideWebpackConfig: ({ webpackConfig }) => {
					webpackConfig.resolve!.plugins!.push(
						new TsconfigPathsPlugin({
							configFile: './tsconfig.base.json',
							extensions: ['.ts'],
						}),
					);

					return webpackConfig;
				},
			},
		},
	],
	webpack: {
		alias: { '@/styles': path.resolve(__dirname, 'src', 'styles') },
	},
};

export default config;
