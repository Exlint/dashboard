const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	eslint: { enable: false },
	plugins: [
		{
			plugin: {
				overrideWebpackConfig: ({ webpackConfig }) => {
					webpackConfig.resolve.plugins.push(
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
};
