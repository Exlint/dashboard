module.exports = {
	root: true,
	extends: ['../../.eslintrc.cjs'],
	parserOptions: {
		ecmaVersion: 12,
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		extraFileExtensions: ['.cjs'],
	},
	plugins: ['node'],
	rules: {
		'node/no-sync': 'error',
	},
};
