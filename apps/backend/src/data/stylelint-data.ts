import type { ILibraryData } from '@exlint-dashboard/common';

export const stylelintData: ILibraryData = {
	name: 'Stylelint',
	author: 'stylelint.io',
	description:
		'A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.',
	types: ['Linters'],
	categories: ['Code', 'Styles'],
	language: 'CSSHTML',
	configuration: {
		type: 'object',
		properties: {
			extends: {
				title: 'Extends',
				description: 'You can extend an existing configuration.',
				type: 'array',
				items: {
					type: 'array',
				},
			},
			defaultSeverity: {
				title: 'Default Severity',
				description:
					'You can set the default severity level for all rules that do not have a severity specified in their secondary options.',
				type: 'string',
				enum: ['warning', 'error'],
			},
			reportDescriptionlessDisables: {
				title: 'Report Descriptionless Disables',
				description: 'Report stylelint-disable comments without a description. A report* property.',
				type: 'boolean',
			},
			reportInvalidScopeDisables: {
				title: 'Report Invalid Scope Disables',
				description:
					"Report stylelint-disable comments that don't match rules that are specified in the configuration object. A report* property.",
				type: 'boolean',
			},
			reportNeedlessDisables: {
				title: 'Report Needless Disables',
				description:
					"Report stylelint-disable comments that don't actually match any lints that need to be disabled. A report* property.",
				type: 'boolean',
			},
			ignoreDisables: {
				title: 'Ignore Disables',
				description:
					'Ignore stylelint-disable (e.g. /* stylelint-disable block-no-empty */) comments.',
				type: 'boolean',
			},
			ignoreFiles: {
				title: 'Ignore Files',
				description: 'You can provide a glob or array of globs to ignore specific files.',
				type: 'array',
				items: {
					type: 'string',
				},
			},
		},
	},
};
