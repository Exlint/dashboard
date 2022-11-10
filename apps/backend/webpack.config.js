const { version } = require('../../package.json');

const configuration = (options, webpack) => ({
	...options,
	plugins: [
		...options.plugins,
		new webpack.DefinePlugin({
			__PACKAGE_VERSION__: JSON.stringify(version),
		}),
	],
});

module.exports = configuration;
