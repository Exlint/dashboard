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
		ignorePath: {
			title: 'Ignore Path',
			description: 'Ignore file path Inflint will use to ignore patterns',
			type: 'string',
		},
		ignore: {
			title: 'Ignore',
			description: 'Disable use of ignore files and patterns',
			type: 'string',
		},
		ignorePatterns: {
			title: 'Ignore Patterns',
			description: 'Patterns of files to ignore (in addition to those in .inflintignore)',
			type: 'multi-free',
			values: [],
		},
		quiet: {
			title: 'Quiet',
			description: 'Whether to report errors only',
			type: 'boolean',
		},
		maxWarnings: {
			title: 'Max Warnings',
			description: 'Number of warnings to trigger non-zero exit code',
			type: 'number',
		},
		bail: {
			title: 'Bail',
			description: 'Number of failures (errors) to make Inflint to exit',
			type: 'number',
		},
		outputFile: {
			title: 'Output File',
			description: 'Specify file to write report to',
			type: 'string',
		},
	},
};
