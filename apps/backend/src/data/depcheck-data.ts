import type { ILibraryData } from '../interfaces/libraries-data';

export const depcheckData: ILibraryData = {
	name: 'Depcheck',
	author: 'Djordje Lukic, Junle Li',
	description: 'Check your npm module for unused dependencies.',
	types: ['Linters'],
	categories: ['Dependencies'],
	language: 'JavaScript',
	configuration: {
		ignoreBinPackage: {
			title: 'Ignore Bin Package',
			description: ' A flag to indicate if depcheck ignores the packages containing bin entry.',
			type: 'radio',
		},
		skipMissing: {
			title: 'Skip Missing',
			description: 'Skip calculation of missing dependencies',
			type: 'radio',
		},
		json: {
			title: 'JSON Output',
			description:
				'Output results in JSON. When not specified, depcheck outputs in human friendly format.',
			type: 'radio',
		},
		oneline: {
			title: 'Oneline output',
			description: 'Output results as space separated string. Useful for copy/paste.',
			type: 'radio',
		},
		ignores: {
			title: 'Ignores',
			description:
				'A comma separated array containing package names to ignore. It can be glob expressions.',
			type: 'free-multi',
		},
		ignorePath: {
			title: 'Ignore Matches',
			description: 'Ignore dependencies that matches these globs',
			type: 'string',
		},
		ignorePatterns: {
			title: 'Ignore Patterns',
			description: 'Comma separated patterns describing files to ignore.',
			type: 'free-multi',
		},
	},
};
