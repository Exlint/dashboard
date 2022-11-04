import type { ILibraryData } from '../interfaces/libraries-data';

export const inflintData: ILibraryData = {
	name: 'Inflint',
	author: 'Tal Rofe',
	description: 'Inflint is a tool which scans and verifies file name conventions.',
	types: ['Linters'],
	categories: ['File System'],
	language: 'Agnostic',
	configuration: {
		extends: {
			title: 'Extends',
			description: 'The path to other config file to extend from',
			type: 'string',
		},
	},
};
