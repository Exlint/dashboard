import { PYTHON_PATTERN } from '../constants/file-patterns';
import type { IRecommendedResponseData } from '../interfaces/responses';

export const pythonPolicies: IRecommendedResponseData = [
	{
		library: 'Inflint',
		configuration: {
			rules: {
				'**/*.py': [2, 'snake_case', { dot: false }],
			},
		},
		lintedList: [PYTHON_PATTERN],
		ignoredList: [],
	},
];
