const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

const configuration = (options, webpack) => ({
	...options,
	entry: ['webpack/hot/poll?100', options.entry],
	externals: [
		nodeExternals({
			allowlist: ['webpack/hot/poll?100'],
		}),
	],
	plugins: [
		...options.plugins,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.WatchIgnorePlugin({
			paths: [/\.d\.ts$/],
		}),
		new RunScriptWebpackPlugin({ name: options.output.filename, autoRestart: false }),
	],
});

module.exports = configuration;
