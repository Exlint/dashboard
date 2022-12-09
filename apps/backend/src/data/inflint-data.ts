import type { ILibraryData } from '@exlint-dashboard/common';

export const inflintData: ILibraryData = {
	name: 'Inflint',
	author: 'Tal Rofe',
	description: 'Inflint is a tool which scans and verifies file name conventions.',
	types: ['Linters'],
	categories: ['File System'],
	language: 'Agnostic',
	configuration: {
		type: 'object',
		properties: {
			extends: {
				title: 'Extends',
				description: 'The path to other config file to extend from',
				type: 'string',
			},
			aliases: {
				title: 'Aliases',
				description: 'Inflint aliases to use together with rules.',
				type: 'object',
				additionalProperties: {
					type: 'array',
					items: [
						{
							title: 'RegEx Matcher',
							description: 'Inflint will apply the alias name to match the provided RegEx.',
							type: 'string',
						},
						{
							title: 'RegEx Flags',
							description: 'Inflint will apply the flags together with the RegEx string.',
							type: 'string',
						},
					],
				},
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
				type: 'array',
				items: { type: 'string' },
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
	},
	rules: {
		'Files & Directories Names Convention': {
			description: 'Enforce names conventions for files and directories in project',
			hasAutofix: false,
			category: 'Name Convention',
			configuration: {
				anyOf: [
					{
						title: 'File Existence',
						description: 'Set file & directory existence',
						type: 'array',
						items: [
							{ title: 'Rule severity', type: 'string', enum: ['warn', 'error'] },
							{
								title: 'Rule options',
								type: 'object',
								properties: {
									onlyDirectories: { type: 'boolean', default: false },
									onlyFiles: { type: 'boolean', default: false },
									dot: { type: 'boolean', default: false },
									caseSensitiveMatch: { type: 'boolean', default: false },
								},
							},
						],
					},
					{
						title: 'Name conventions',
						description: 'Set file & directory name to match names conventions',
						type: 'array',
						items: [
							{ title: 'Rule severity', type: 'string', enum: ['warn', 'error'] },
							{ title: 'Convention', type: 'string' },
							{
								title: 'Rule options',
								type: 'object',
								properties: {
									onlyDirectories: { type: 'boolean', default: false },
									onlyFiles: { type: 'boolean', default: false },
									dot: { type: 'boolean', default: false },
									caseSensitiveMatch: { type: 'boolean', default: false },
								},
							},
						],
					},
				],
			},
		},
	},
};
