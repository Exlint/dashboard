import type { IRecommendedResponseData } from '../interfaces/responses';

export const javascriptPolicies: IRecommendedResponseData = [
	{
		library: 'Inflint',
		configuration: {
			rules: {
				'**/*.{cjs,mjs,js,cts,mts,ts}': [2, 'kebab-case.point'],
			},
		},
		lintedList: [],
		ignoredList: [],
	},
	{
		library: 'Depcheck',
		configuration: {},
		lintedList: [],
		ignoredList: [],
	},
	{
		library: 'Prettier',
		configuration: {
			tabWidth: 4,
			printWidth: 110,
			useTabs: true,
			semi: true,
			singleQuote: true,
			quoteProps: 'consistent',
			trailingComma: 'all',
			bracketSpacing: true,
			arrowParens: 'always',
			bracketSameLine: false,
		},
		lintedList: ['**/*.{cjs,mjs,js,cts,mts,ts}'],
		ignoredList: [],
	},
	{
		library: 'ESLint',
		configuration: {
			root: true,
			env: { node: true },
			extends: ['eslint:recommended', 'prettier'],
			parserOptions: { ecmaVersion: 12, sourceType: 'module' },
			rules: {
				'capitalized-comments': ['error'],
				'indent': ['error', 'tab', { SwitchCase: 1 }],
				'quotes': ['error', 'single', { avoidEscape: true }],
				'semi': ['error', 'always'],
				'no-empty': [
					'error',
					{
						allowEmptyCatch: true,
					},
				],
				'no-duplicate-imports': 'error',
				'no-promise-executor-return': 'error',
				'no-self-compare': 'error',
				'no-template-curly-in-string': 'error',
				'no-unreachable-loop': 'error',
				'no-multiple-empty-lines': 'error',
				'no-trailing-spaces': 'error',
				'require-await': 'error',
				'no-var': 'error',
				'no-labels': 'error',
				'eqeqeq': 'error',
				'no-eval': 'error',
				'no-implicit-globals': 'error',
				'no-useless-call': 'error',
				'curly': ['error', 'all'],
			},
		},
		lintedList: ['**/*.{cjs,mjs,js,cts,mts,ts}'],
		ignoredList: [],
	},
];
