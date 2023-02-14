import { CSS_PATTERN, HTML_PATTERN, JAVASCRIPT_PATTERN, REACT_PATTERN } from '../constants/file-patterns';
import type { IRecommendedResponseData } from '../interfaces/responses';

export const reactPolicies: IRecommendedResponseData = [
	{
		library: 'Inflint',
		configuration: {
			rules: {
				[REACT_PATTERN]: [2, 'PascalCase.Point'],
				[JAVASCRIPT_PATTERN]: [2, 'kebab-case.point'],
				[HTML_PATTERN]: [2, 'kebab-case'],
				[CSS_PATTERN]: [2, 'PascalCase.Point'],
			},
		},
		lintedList: [],
		ignoredList: ['node_modules'],
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
		lintedList: [JAVASCRIPT_PATTERN, CSS_PATTERN, HTML_PATTERN, REACT_PATTERN],
		ignoredList: ['node_modules'],
	},
	{
		library: 'ESLint',
		configuration: {
			root: true,
			env: { browser: true, es2021: true },
			extends: ['eslint:recommended', 'prettier'],
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 12,
				sourceType: 'module',
			},
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
				'jsx-quotes': ['error', 'prefer-double'],
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
		lintedList: [JAVASCRIPT_PATTERN, REACT_PATTERN],
		ignoredList: ['node_modules'],
	},
	{
		library: 'Stylelint',
		configuration: {
			extends: ['stylelint-config-standard-scss'],
			rules: {
				'property-no-vendor-prefix': null,
				'value-no-vendor-prefix': null,
				'color-named': ['never'],
				'declaration-block-no-duplicate-properties': [true],
				'selector-pseudo-class-no-unknown': [
					true,
					{
						ignorePseudoClasses: ['global', 'export'],
					},
				],
			},
		},
		lintedList: [CSS_PATTERN],
		ignoredList: ['node_modules'],
	},
];
