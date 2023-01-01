import type { ILibraryData } from '@exlint-dashboard/common';

export const depcheckData: ILibraryData = {
	name: 'Depcheck',
	author: 'Djordje Lukic, Junle Li',
	description: 'Check your npm module for unused dependencies.',
	types: ['Linters'],
	categories: ['Dependencies'],
	language: 'JavaScript',
	configuration: {
		type: 'object',
		properties: {
			ignoreBinPackage: {
				title: 'Ignore Bin Package',
				description: ' A flag to indicate if depcheck ignores the packages containing bin entry.',
				type: 'boolean',
			},
			skipMissing: {
				title: 'Skip Missing',
				description: 'Skip calculation of missing dependencies',
				type: 'boolean',
			},
			json: {
				title: 'JSON Output',
				description:
					'Output results in JSON. When not specified, depcheck outputs in human friendly format.',
				type: 'boolean',
			},
			oneline: {
				title: 'Oneline output',
				description: 'Output results as space separated string. Useful for copy/paste.',
				type: 'boolean',
			},
			ignores: {
				title: 'Ignores',
				description:
					'A comma separated array containing package names to ignore. It can be glob expressions.',
				type: 'array',
				items: { type: 'string' },
			},
			ignorePath: {
				title: 'Ignore Path',
				description:
					'Path to a file with patterns describing files to ignore. Files must match the .gitignore spec. Example, --ignore-path=.eslintignore.',
				type: 'string',
			},
			ignorePatterns: {
				title: 'Ignore Patterns',
				description: 'Comma separated patterns describing files to ignore.',
				type: 'array',
				items: { type: 'string' },
			},
		},
	},
};
