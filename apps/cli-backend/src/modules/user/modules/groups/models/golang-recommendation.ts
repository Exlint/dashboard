import type { IRecommendedResponseData } from '../interfaces/responses';

export const golangPolicies: IRecommendedResponseData = [
	{
		library: 'Inflint',
		configuration: {
			rules: {
				'**/*.go': [2, 'snake_case', { dot: false }],
			},
		},
		lintedList: [],
		ignoredList: [],
	},
];
