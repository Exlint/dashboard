import { GOLANG_PATTERN } from '../constants/file-patterns';
import type { IRecommendedResponseData } from '../interfaces/responses';

export const golangPolicies: IRecommendedResponseData = [
	{
		library: 'Inflint',
		configuration: {
			rules: {
				[GOLANG_PATTERN]: [2, 'snake_case', { dot: false }],
			},
		},
		lintedList: [],
		ignoredList: [],
	},
];
