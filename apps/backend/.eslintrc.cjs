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
		'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],

		'node/no-sync': 'error',
	},
	overrides: [
		{
			files: ['./src/data/**/*.ts'],
			rules: {
				'max-lines': 'off',
			},
		},
	],
};
