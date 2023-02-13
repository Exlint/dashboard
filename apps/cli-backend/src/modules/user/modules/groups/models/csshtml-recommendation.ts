import { CSS_PATTERN, HTML_PATTERN } from '../constants/file-patterns';
import type { IRecommendedResponseData } from '../interfaces/responses';

export const cssHtmlPolicies: IRecommendedResponseData = [
	{
		library: 'Stylelint',
		configuration: {
			extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
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
	{
		library: 'Depcheck',
		configuration: {},
		lintedList: [],
		ignoredList: [],
	},
	{
		library: 'Inflint',
		configuration: {
			rules: {
				[HTML_PATTERN]: [2, 'kebab-case'],
				[CSS_PATTERN]: [2, 'kebab-case'],
			},
		},
		lintedList: [],
		ignoredList: ['node_modules'],
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
		lintedList: [HTML_PATTERN, CSS_PATTERN],
		ignoredList: ['node_modules'],
	},
];
