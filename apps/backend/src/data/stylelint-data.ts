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
	rules: {
		'color-no-invalid-hex': {
			description: 'Disallow invalid hex colors.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'font-family-no-duplicate-names': {
			description: 'Disallow duplicate font family names.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreFontFamilyNames: {
										title: 'Ignore font family names',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'font-family-no-missing-generic-family-keyword': {
			description: 'Disallow missing generic families in lists of font family names.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreFontFamilies: {
										title: 'Ignore font families.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'named-grid-areas-no-invalid': {
			description: 'Disallow invalid named grid areas.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-calc-no-unspaced-operator': {
			description: 'Disallow an unspaced operator within calc functions.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-linear-gradient-no-nonstandard-direction': {
			description:
				'Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-no-unknown': {
			description: 'Disallow unknown functions.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreFunctions: {
										title: 'Ignore functions',
										description: 'Ignore the specified functions.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'string-no-newline': {
			description: 'Disallow (unescaped) newlines in strings.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'unit-no-unknown': {
			description: 'Disallow unknown units.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreUnits: {
										title: 'Ignore units',
										type: 'array',
										items: { type: 'string' },
									},
									ignoreFunctions: {
										title: 'Ignore functions',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'custom-property-no-missing-var-function': {
			description: 'Disallow missing var function for custom properties.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'property-no-unknown': {
			description: 'Disallow unknown properties.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreProperties: {
										title: 'Ignore properties',
										type: 'array',
										items: { type: 'string' },
									},
									ignoreSelectors: {
										title: 'Ignore selectors',
										description:
											'Skips checking properties of the given selectors against this rule.',
										type: 'array',
										items: { type: 'string' },
									},
									ignoreAtRules: {
										title: 'Ignore at-rules',
										description: 'Ignores properties nested within specified at-rules.',
										type: 'array',
										items: { type: 'string' },
									},
									checkPrefixed: {
										title: 'Check prefixed',
										description:
											'If true, this rule will check vendor-prefixed properties.',
										type: 'boolean',
										default: false,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'keyframe-declaration-no-important': {
			description: 'Disallow !important within keyframe declarations.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'keyframe-block-no-duplicate-selectors': {
			description: 'Disallow duplicate selectors within keyframe blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-no-duplicate-custom-properties': {
			description: 'Disallow duplicate custom properties within declaration blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-no-duplicate-properties': {
			description: 'Disallow duplicate properties within declaration blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'"consecutive-duplicates" - Ignore consecutive duplicated properties. They can prove to be useful fallbacks for older browsers. "consecutive-duplicates-with-different-values" - Ignore consecutive duplicated properties with different values. Including duplicate properties (fallbacks) is useful to deal with older browsers support for CSS properties. E.g. using px units when rem isn\'t available. "consecutive-duplicates-with-same-prefixless-values" - Ignore consecutive duplicated properties with identical values, when ignoring their prefix. This option is useful to deal with draft CSS values while still being future proof. E.g. using fit-content and -moz-fit-content.',
										type: 'array',
										items: {
											enum: [
												'consecutive-duplicates',
												'consecutive-duplicates-with-different-values',
												'consecutive-duplicates-with-same-prefixless-values',
											],
										},
										uniqueItems: true,
										maxItems: 3,
									},
									ignoreProperties: {
										title: 'Ignore properties',
										description: 'Ignore duplicates of specific properties.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-no-shorthand-property-overrides': {
			description: 'Disallow shorthand properties that override related longhand properties.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-no-empty': {
			description: 'Disallow empty blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'Exclude comments from being treated as content inside of a block.',
										type: 'array',
										items: {
											enum: ['comments'],
										},
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-class-no-unknown': {
			description: 'Disallow unknown pseudo-class selectors.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignorePseudoClasses: {
										title: 'Ignore pseudo classes',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-element-no-unknown': {
			description: 'Disallow unknown pseudo-element selectors.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignorePseudoElements: {
										title: 'Ignore pseudo elements',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-type-no-unknown': {
			description: 'Disallow unknown type selectors.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'"custom-elements" - Allow custom elements. "default-namespaces" - Allow unknown type selectors if they belong to the default namespace.',
										type: 'array',
										items: { enum: ['custom-elements', 'default-namespaces'] },
										uniqueItems: true,
										maxItems: 2,
									},
									ignoreNamespaces: {
										title: 'Ignore namespaces',
										type: 'array',
										items: { type: 'string' },
									},
									ignoreTypes: {
										title: 'Ignore types',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-name-no-unknown': {
			description: 'Disallow unknown media feature names.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreMediaFeatureNames: {
										title: 'Ignore media feature names',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-no-unknown': {
			description: 'Disallow unknown at-rules.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreAtRules: {
										title: 'Ignore at-rules',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'comment-no-empty': {
			description: 'Disallow empty comments.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-descending-specificity': {
			description:
				'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description: 'Ignores selectors within list of selectors.',
										type: 'array',
										items: { enum: ['selectors-within-list'] },
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-duplicate-at-import-rules': {
			description: 'Disallow duplicate @use rules within a stylesheet.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-duplicate-selectors': {
			description: 'Disallow duplicate selectors within a stylesheet.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disallowInList: {
										title: 'Disallow in list',
										description:
											'This option will also disallow duplicate selectors within selector lists.',
										type: 'boolean',
										default: false,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-empty-source': {
			description: 'Disallow empty sources.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-invalid-double-slash-comments': {
			description: 'Disallow double-slash comments (//...) which are not supported by CSS.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-invalid-position-at-import-rule': {
			description: 'Disallow invalid position @use rules within a stylesheet.',
			hasAutofix: false,
			category: 'Avoid Errors',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreAtRules: {
										title: 'Ignore at-rules',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'alpha-value-notation': {
			description: 'Specify percentage or number notation for alpha-values.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['number', 'percentage'],
								description:
									'"number" - Alpha-values must always use the number notation. "percentage" - Alpha-values must always use percentage notation.',
							},
							{
								type: 'object',
								properties: {
									exceptProperties: {
										title: 'Except properties',
										description: 'Reverse the primary option for matching properties.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'hue-degree-notation': {
			description: 'Specify number or angle notation for degree hues.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['angle', 'number'],
								description:
									'"angle" - Degree hues must always use angle notation. "number" - Degree hues must always use the number notation.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'color-function-notation': {
			description: 'Specify modern or legacy notation for applicable color-functions.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['modern', 'legacy'],
								description:
									'"modern" - Applicable color-functions must always use modern notation. "legacy" - Applicable color-functions must always use the legacy notation.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'color-hex-alpha': {
			description: 'Require or disallow alpha channel for hex colors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['always', 'never'],
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'color-hex-length': {
			description: 'Specify short or long notation for hex colors.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'string', enum: ['short', 'long'] },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'color-named': {
			description: 'Require (where possible) or disallow named colors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['always-where-possible', 'never'],
								description:
									'"always-where-possible" - Colors must always, where possible, be named. This will complain if a hex (3, 4, 6 and 8 digit), rgb(), rgba(), hsl(), hsla(), hwb() or gray() color can be represented as a named color. "never" - Colors must never be named.',
							},
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description: 'Ignore colors that are inside a function.',
										type: 'array',
										items: { enum: ['inside-function'] },
										uniqueItems: true,
										maxItems: 1,
									},
									ignoreProperties: {
										title: 'Ignore properties',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'color-no-hex': {
			description: 'Disallow hex colors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'length-zero-no-unit': {
			description: 'Disallow units for zero lengths.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description: 'Ignore units for zero length in custom properties.',
										type: 'array',
										items: {
											enum: ['custom-properties'],
										},
										uniqueItems: true,
										maxItems: 1,
									},
									ignoreFunctions: {
										title: 'Ignore functions',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'font-family-name-quotes': {
			description: 'Specify whether or not quotation marks should be used around font family names.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								description:
									'"always-unless-keyword" - Expect quotes around every font family name that is not a keyword. "always-where-required" - Expect quotes only when quotes are required according to the criteria above, and disallow quotes in all other cases. "always-where-recommended" - Expect quotes only when quotes are recommended according to the criteria above, and disallow quotes in all other cases. (This includes all cases where quotes are required, as well.)',
								type: 'string',
								enum: [
									'always-where-required',
									'always-where-recommended',
									'always-unless-keyword',
								],
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'font-weight-notation': {
			description:
				'Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								description:
									'"numeric" - font-weight values must always be numbers. "named-where-possible" - font-weight values must always be keywords when an appropriate keyword is available. This means that only 400 and 700 will be rejected, because those are the only numbers with keyword equivalents (normal and bold).',
								type: 'string',
								enum: ['numeric', 'named-where-possible'],
							},
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'Ignore the relative keyword names of bolder and lighter.',
										type: 'array',
										items: { enum: ['relative'] },
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-allowed-list': {
			description: 'Specify a list of allowed functions.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/^rgb/"), it is interpreted as a regular expression.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-disallowed-list': {
			description: 'Specify a list of disallowed functions.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/^rgb/"), it is interpreted as a regular expression.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-url-no-scheme-relative': {
			description: 'Disallow scheme-relative urls.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-url-quotes': {
			description: 'Require or disallow quotes for urls.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['always', 'never'],
								description:
									'"always" - Urls must always be quoted. "never" - Urls must never be quoted.',
							},
							{
								type: 'object',
								properties: {
									except: {
										title: 'Except',
										description:
											'Reverse the primary option for functions that have no arguments.',
										type: 'array',
										items: {
											enum: ['empty'],
										},
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-url-scheme-allowed-list': {
			description: 'Specify a list of allowed URL schemes.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-url-scheme-disallowed-list': {
			description: 'Specify a list of disallowed URL schemes.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'import-notation': {
			description: 'Specify string or URL notation for @use rules.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['string', 'url'],
								description:
									'"string" - @import rules must always use string notation. "url" - @import rules must always use URL notation.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'keyframes-name-pattern': {
			description: 'Specify a pattern for keyframe names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								description:
									'A string will be translated into a RegExp like so new RegExp(yourString) — so be sure to escape properly.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'number-max-precision': {
			description: 'Limit the number of decimal places allowed in numbers.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'integer',
								description: 'Maximum number of decimal places allowed.',
							},
							{
								type: 'object',
								properties: {
									ignoreProperties: {
										title: 'Ignore properties',
										description:
											'Ignore the precision of numbers for the specified properties.',
										type: 'array',
										items: { type: 'string' },
									},
									ignoreUnits: {
										title: 'Ignore units',
										description:
											'Ignore the precision of numbers for values with the specified units.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'time-min-milliseconds': {
			description: 'Specify the minimum number of milliseconds for time values.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'number',
								description: 'Minimum number of milliseconds for time values.',
							},
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'Ignore time values for an animation or transition delay.',
										type: 'array',
										items: { enum: ['delay'] },
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'unit-allowed-list': {
			description: 'Specify a list of allowed units.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
							},
							{
								type: 'object',
								properties: {
									ignoreProperties: {
										title: 'Ignore properties',
										description:
											'Ignore units in the values of declarations with the specified properties.',
										type: 'object',
										additionalProperties: { type: 'array', items: { type: 'string' } },
									},
									ignoreFunctions: {
										title: 'Ignore functions',
										description:
											'Ignore units that are inside of the specified functions.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'unit-disallowed-list': {
			description: 'Specify a list of disallowed units.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
							},
							{
								type: 'object',
								properties: {
									ignoreProperties: {
										title: 'Ignore properties',
										description:
											'Ignore units in the values of declarations with the specified properties.',
										type: 'object',
										additionalProperties: { type: 'array', items: { type: 'string' } },
									},
									ignoreMediaFeatureNames: {
										title: 'Ignore media feature names',
										description: 'Ignore units for specific feature names.',
										type: 'object',
										additionalProperties: { type: 'array', items: { type: 'string' } },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'shorthand-property-no-redundant-values': {
			description: 'Disallow redundant values in shorthand properties.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for values.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreValues: {
										title: 'Ignore values',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'custom-property-pattern': {
			description: 'Specify a pattern for custom properties.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								description:
									'A string will be translated into a RegExp like so new RegExp(yourString) — so be sure to escape properly.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'property-allowed-list': {
			description: 'Specify a list of allowed properties.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/^background/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^background/ will match background, background-size, background-color, etc.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'property-disallowed-list': {
			description: 'Specify a list of disallowed properties.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/^background/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^background/ will match background, background-size, background-color, etc.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'property-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for properties.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreProperties: {
										title: 'Ignore properties',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-no-important': {
			description: 'Disallow !important within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-property-max-values': {
			description: 'Limit the number of values for a list of properties within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								description:
									'If a property name is surrounded with "/" (e.g. "/^margin/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^margin/ will match margin, margin-top, margin-inline, etc.',
								type: 'object',
								additionalProperties: { type: 'integer' },
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-property-unit-allowed-list': {
			description: 'Specify a list of allowed property and unit pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'object',
								description:
									'If a property name is surrounded with "/" (e.g. "/^animation/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^animation/ will match animation, animation-duration, animation-timing-function, etc.',
								additionalProperties: { type: 'array', items: { type: 'string' } },
							},
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description: 'Ignore units that are inside a function.',
										type: 'array',
										items: { enum: ['inside-function'] },
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-property-unit-disallowed-list': {
			description: 'Specify a list of disallowed property and unit pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'object',
								description:
									'If a property name is surrounded with "/" (e.g. "/^animation/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^animation/ will match animation, animation-duration, animation-timing-function, etc.',
								additionalProperties: { type: 'array', items: { type: 'string' } },
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-property-value-allowed-list': {
			description: 'Specify a list of allowed property and value pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'object',
								description:
									'If a property name is found in the object, only the listed property values are allowed. This rule complains about all non-matching values. (If the property name is not included in the object, anything goes.). If a property name is surrounded with "/" (e.g. "/^animation/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^animation/ will match animation, animation-duration, animation-timing-function, etc. The same goes for values. Keep in mind that a regular expression value is matched against the entire value of the declaration, not specific parts of it. For example, a value like "10px solid rgba( 255 , 0 , 0 , 0.5 )" will not match "/^solid/" (notice beginning of the line boundary) but will match "/\\s+solid\\s+/" or "/\\bsolid\\b/". Be careful with regex matching not to accidentally consider quoted string values and url() arguments. For example, "/red/" will match value such as "1px dotted red" as well as "\\"red\\"" and "white url(/mysite.com/red.png)".',
								additionalProperties: { type: 'array', items: { type: 'string' } },
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-property-value-disallowed-list': {
			description: 'Specify a list of disallowed property and value pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'object',
								description:
									'If a property name is surrounded with "/" (e.g. "/^animation/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^animation/ will match animation, animation-duration, animation-timing-function, etc. The same goes for values. Keep in mind that a regular expression value is matched against the entire value of the declaration, not specific parts of it. For example, a value like "10px solid rgba( 255 , 0 , 0 , 0.5 )" will not match "/^solid/" (notice beginning of the line boundary) but will match "/\\s+solid\\s+/" or "/\\bsolid\\b/". Be careful with regex matching not to accidentally consider quoted string values and url() arguments. For example, "/red/" will match value such as "1px dotted red" as well as ""foo"" and "white url(/mysite.com/red.png)".',
								additionalProperties: { type: 'array', items: { type: 'string' } },
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-no-redundant-longhand-properties': {
			description: 'Disallow longhand properties that can be combined into one shorthand property.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreShorthands: {
										title: 'Ignore shorthands',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-single-line-max-declarations': {
			description: 'Limit the number of declarations within a single-line declaration block.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum number of declarations allowed.' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-name-disallowed-list': {
			description: 'Specify a list of disallowed attribute names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'array', items: { type: 'string' } },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-operator-allowed-list': {
			description: 'Specify a list of allowed attribute operators.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'array', items: { type: 'string' } },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-operator-disallowed-list': {
			description: 'Specify a list of disallowed attribute operators.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'array', items: { type: 'string' } },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-quotes': {
			description: 'Require or disallow quotes for attribute values.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['always', 'never'],
								description:
									'"always" - Attribute values must always be quoted. "never" - Attribute values must never be quoted.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-class-pattern': {
			description: 'Specify a pattern for class selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								description:
									'A string will be translated into a RegExp like so new RegExp(yourString) — so be sure to escape properly. The selector value after . will be checked. No need to include . in your pattern.',
							},
							{
								type: 'object',
								properties: {
									resolveNestedSelectors: {
										title: 'Resolve nested selectors',
										description:
											'This option will resolve nested selectors with & interpolation.',
										type: 'boolean',
										default: false,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-combinator-allowed-list': {
			description:
				'Specify a list of allowed combinators. This rule normalizes the whitespace descendant combinator to be a single space.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'array', items: { type: 'string' } },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-combinator-disallowed-list': {
			description:
				'Specify a list of disallowed combinators. This rule normalizes the whitespace descendant combinator to be a single space.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'array', items: { type: 'string' } },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-disallowed-list': {
			description: 'Specify a list of disallowed selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/.foo/"), it is interpreted as a regular expression.',
							},
							{
								type: 'object',
								properties: {
									splitList: {
										title: 'Split list',
										description: 'Split selector lists into individual selectors.',
										type: 'boolean',
										default: false,
									},
									ignore: {
										title: 'Ignore',
										description: 'Ignore selectors that are inside a block.',
										type: 'array',
										items: { enum: ['inside-block'] },
										uniqueItems: true,
										maxItems: 1,
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-id-pattern': {
			description: 'Specify a pattern for ID selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								description:
									'A string will be translated into a RegExp like so new RegExp(yourString) — so be sure to escape properly. The selector value after # will be checked. No need to include # in your pattern.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-attribute': {
			description: 'Limit the number of attribute selectors in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum attribute selectors allowed.' },
							{
								type: 'object',
								properties: {
									ignoreAttributes: {
										title: 'Ignore attributes',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-class': {
			description:
				'Limit the number of classes in a selector. This rule resolves nested selectors before counting the number of classes in a selector. Each selector in a selector list is evaluated separately. The :not() pseudo-class is also evaluated separately. The rule processes the argument as if it were an independent selector, and the result does not count toward the total for the entire selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum classes allowed.' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-combinators': {
			description: 'Limit the number of combinators in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum combinators selectors allowed.' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-compound-selectors': {
			description:
				'Limit the number of compound selectors in a selector. A compound selector is a chain of one or more simple (tag, class, ID, universal, attribute) selectors. If there is more than one compound selector in a complete selector, they will be separated by combinators (e.g. ``, +, `>`). One reason why you might want to limit the number of compound selectors is described in the SMACSS book. This rule resolves nested selectors before counting the depth of a selector. Each selector in a selector list is evaluated separately. :not() is considered one compound selector irrespective to the complexity of the selector inside it. The rule does process that inner selector, but does so separately, independent of the main selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum compound selectors allowed.' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-id': {
			description:
				'Limit the number of ID selectors in a selector. This rule resolves nested selectors before counting the number of ID selectors. Each selector in a selector list is evaluated separately. The :not() pseudo-class is also evaluated separately. The rule processes the argument as if it were an independent selector, and the result does not count toward the total for the entire selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum universal selectors allowed.' },
							{
								type: 'object',
								properties: {
									ignoreContextFunctionalPseudoClasses: {
										title: 'Ignore context functional pseudo classes',
										description:
											'Ignore selectors inside of specified functional pseudo-classes that provide evaluation contexts.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-pseudo-class': {
			description:
				'Limit the number of pseudo-classes in a selector. This rule resolves nested selectors before counting the number of pseudo-classes in a selector. Each selector in a selector list is evaluated separately. The content of the :not() pseudo-class is also evaluated separately. The rule processes the argument as if it were an independent selector, and the result does not count toward the total for the entire selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum pseudo-classes allowed.' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-specificity': {
			description:
				'Limit the specificity of selectors. This rule ignores selectors with variable interpolation (#{$var}, @{var}, $(var)). This rule resolves nested selectors before counting the specificity of a selector. Each selector in a selector list is evaluated separately.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								description:
									'Maximum specificity allowed. Format is "id,class,type", as laid out in the W3C selector spec.',
							},
							{
								type: 'object',
								properties: {
									ignoreSelectors: {
										title: 'Ignore selectors',
										type: 'string',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-type': {
			description:
				'Limit the number of type in a selector.   This rule resolves nested selectors before counting the number of type selectors. Each selector in a selector list is evaluated separately. The :not() pseudo-class is also evaluated separately. The rule processes the argument as if it were an independent selector, and the result does not count toward the total for the entire selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum type selectors allowed.' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'"child" - Discount child type selectors. "compounded" - Discount compounded type selectors -- i.e. type selectors chained with other selectors. "descendant" - Discount descendant type selectors. "next-sibling" - Discount next-sibling type selectors.',
										type: 'array',
										enum: ['child', 'compounded', 'descendant', 'next-sibling'],
									},
									ignoreTypes: {
										title: 'Ignore types',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-universal': {
			description:
				'Limit the number of universal selectors in a selector. This rule resolves nested selectors before counting the number of universal selectors. Each selector in a selector list is evaluated separately. The logical combinations pseudo-class (e.g. :not, :has) is also evaluated separately. The rule processes the argument as if it were an independent selector, and the result does not count toward the total for the entire selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'integer', description: 'Maximum universal selectors allowed.' },
							{
								type: 'object',
								properties: {
									ignoreAfterCombinators: {
										title: 'Ignore after combinators',
										description:
											'Ignore universal selectors that come after one of the specified combinators.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-nested-pattern': {
			description:
				'Specify a pattern for the selectors of rules nested within rules. Non-standard selectors (e.g. selectors with Sass or Less interpolation) and selectors of rules nested within at-rules are ignored.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								description:
									"A string will be translated into a RegExp like so new RegExp(yourString) — so be sure to escape properly. The selector value will be checked in its entirety. If you'd like to allow for combinators and commas, you must incorporate them into your pattern.",
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-no-qualifying-type': {
			description:
				'Disallow qualifying a selector by type. A type selector is "qualifying" when it is compounded with (chained to) another selector (e.g. a.foo, a#foo). This rule does not regulate type selectors that are combined with other selectors via a combinator (e.g. a > .foo, a #foo).',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										title: 'Ignore',
										description:
											'"attribute" - Allow attribute selectors qualified by type. "class" - Allow class selectors qualified by type. "id" - Allow ID selectors qualified by type.',
										type: 'array',
										items: { enum: ['attribute', 'class', 'id'] },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-no-vendor-prefix': {
			description:
				"Disallow vendor prefixes for selectors. This rule ignores non-standard vendor-prefixed selectors that aren't handled by Autoprefixer. The fix option can automatically fix all of the problems reported by this rule. However, it will not remove duplicate selectors produced when the prefixes are removed. You can use Autoprefixer itself, with the add option off and the remove option on, in these situations.",
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignoreSelectors: {
										title: 'Ignore selectors',
										description: 'Ignore vendor prefixes for selectors.',
										type: 'array',
										items: { type: 'string' },
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-not-notation': {
			description:
				'Specify simple or complex notation for :not() pseudo-class selectors. In Selectors Level 3, only a single simple selector was allowed as the argument to :not(), whereas Selectors Level 4 allows a selector list.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['simple', 'complex'],
								description:
									'"complex" - to author modern Selectors Level 4 CSS. "simple" - for backwards compatibility with older browsers',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-class-allowed-list': {
			description:
				'Specify a list of allowed pseudo-class selectors. This rule ignores selectors that use variable interpolation e.g. :#{$variable} {}.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/^nth-/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^nth-/ will match nth-child, nth-last-child, nth-of-type, etc.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-class-disallowed-list': {
			description:
				'Specify a list of disallowed pseudo-class selectors. This rule ignores selectors that use variable interpolation e.g. :#{$variable} {}.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'array',
								items: { type: 'string' },
								description:
									'If a string is surrounded with "/" (e.g. "/^nth-/"), it is interpreted as a regular expression. This allows, for example, easy targeting of shorthands: /^nth-/ will match nth-child, nth-last-child, nth-of-type, etc.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-element-allowed-list': {
			description:
				'Specify a list of allowed pseudo-element selectors. This rule ignores: CSS2 pseudo-elements i.e. those prefixed with a single colon. selectors that use variable interpolation e.g. ::#{$variable} {}',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'array', items: { type: 'string' } },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-element-colon-notation': {
			description:
				'Specify single or double colon notation for applicable pseudo-elements. The :: notation was chosen for pseudo-elements to establish a discrimination between pseudo-classes (which subclass existing elements) and pseudo-elements (which are elements not represented in the document tree). However, for compatibility with existing style sheets, user agents also accept the previous one-colon notation for pseudo-elements introduced in CSS levels 1 and 2 (namely, :first-line, :first-letter, :before and :after).',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['single', 'double'],
								description:
									'"single" - Applicable pseudo-elements must always use the single colon notation. "double" - Applicable pseudo-elements must always use the double colon notation.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-element-disallowed-list': {
			description: 'Specify a list of disallowed pseudo-element selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'rule-selector-property-disallowed-list': {
			description: 'Specify a list of disallowed properties for selectors within rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-name-allowed-list': {
			description: 'Specify a list of allowed media feature names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-name-disallowed-list': {
			description: 'Specify a list of disallowed media feature names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-name-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for media feature names.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-name-value-allowed-list': {
			description: 'Specify a list of allowed media feature name and value pairs.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'custom-media-pattern': {
			description: 'Specify a pattern for custom media query names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-allowed-list': {
			description: 'Specify a list of allowed at-rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-disallowed-list': {
			description: 'Specify a list of disallowed at-rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for at-rules.',
			hasAutofix: true,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-property-required-list': {
			description: 'Specify a list of required properties for an at-rule.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'comment-pattern': {
			description: 'Specify a pattern for comments.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'comment-word-disallowed-list': {
			description: 'Specify a list of disallowed words within comments.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'max-nesting-depth': {
			description: 'Limit the depth of nesting.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-irregular-whitespace': {
			description: 'Disallow irregular whitespace.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-unknown-animations': {
			description: 'Disallow unknown animations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'unicode-bom': {
			description: 'Require or disallow Unicode BOM.',
			hasAutofix: false,
			category: 'Enforce Conventions',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-keyword-case': {
			description: 'Specify lowercase or uppercase for keywords values.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-name-case': {
			description: 'Specify lowercase or uppercase for function names.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'custom-property-empty-line-before': {
			description: 'Require or disallow an empty line before custom properties.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-type-case': {
			description: 'Specify lowercase or uppercase for type selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'rule-empty-line-before': {
			description: 'Require or disallow an empty line before rules.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-empty-line-before': {
			description: 'Require or disallow an empty line before at-rules.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'comment-empty-line-before': {
			description: 'Require or disallow an empty line before comments.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'comment-whitespace-inside': {
			description: 'Require or disallow whitespace on the inside of comment markers.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'color-hex-case': {
			description: 'Specify lowercase or uppercase for hex colors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-comma-newline-after': {
			description: 'Require a newline or disallow whitespace after the commas of functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-comma-newline-before': {
			description: 'Require a newline or disallow whitespace before the commas of functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-comma-space-after': {
			description: 'Require a single space or disallow whitespace after the commas of functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-comma-space-before': {
			description: 'Require a single space or disallow whitespace before the commas of functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-max-empty-lines': {
			description: 'Limit the number of adjacent empty lines within functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-parentheses-newline-inside': {
			description:
				'Require a newline or disallow whitespace on the inside of the parentheses of functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-parentheses-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses of functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'function-whitespace-after': {
			description: 'Require or disallow whitespace after functions.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'number-leading-zero': {
			description: 'Require or disallow a leading zero for fractional numbers less than 1.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'number-no-trailing-zeros': {
			description: 'Disallow trailing zeros in numbers.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'string-quotes': {
			description: 'Specify single or double quotes around strings.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'unit-case': {
			description: 'Specify lowercase or uppercase for units.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-list-comma-newline-after': {
			description: 'Require a newline or disallow whitespace after the commas of value lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-list-comma-newline-before': {
			description: 'Require a newline or disallow whitespace before the commas of value lists.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-list-comma-space-after': {
			description: 'Require a single space or disallow whitespace after the commas of value lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-list-comma-space-before': {
			description: 'Require a single space or disallow whitespace before the commas of value lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'value-list-max-empty-lines': {
			description: 'Limit the number of adjacent empty lines within value lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'property-case': {
			description: 'Specify lowercase or uppercase for properties.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-bang-space-after': {
			description: 'Require a single space or disallow whitespace after the bang of declarations.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-bang-space-before': {
			description: 'Require a single space or disallow whitespace before the bang of declarations.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-colon-newline-after': {
			description: 'Require a newline or disallow whitespace after the colon of declarations.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-colon-space-after': {
			description: 'Require a single space or disallow whitespace after the colon of declarations.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-colon-space-before': {
			description: 'Require a single space or disallow whitespace before the colon of declarations.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-empty-line-before': {
			description: 'Require or disallow an empty line before declarations.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-semicolon-newline-after': {
			description:
				'Require a newline or disallow whitespace after the semicolons of declaration blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-semicolon-newline-before': {
			description:
				'Require a newline or disallow whitespace before the semicolons of declaration blocks.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-semicolon-space-after': {
			description:
				'Require a single space or disallow whitespace after the semicolons of declaration blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-semicolon-space-before': {
			description:
				'Require a single space or disallow whitespace before the semicolons of declaration blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'declaration-block-trailing-semicolon': {
			description: 'Require or disallow a trailing semicolon within declaration blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-closing-brace-empty-line-before': {
			description: 'Require or disallow an empty line before the closing brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-closing-brace-newline-after': {
			description: 'Require a newline or disallow whitespace after the closing brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-closing-brace-newline-before': {
			description: 'Require a newline or disallow whitespace before the closing brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-closing-brace-space-after': {
			description: 'Require a single space or disallow whitespace after the closing brace of blocks.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-closing-brace-space-before': {
			description: 'Require a single space or disallow whitespace before the closing brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-opening-brace-newline-after': {
			description: 'Require a newline after the opening brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-opening-brace-newline-before': {
			description: 'Require a newline or disallow whitespace before the opening brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-opening-brace-space-after': {
			description: 'Require a single space or disallow whitespace after the opening brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'block-opening-brace-space-before': {
			description: 'Require a single space or disallow whitespace before the opening brace of blocks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-brackets-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-operator-space-after': {
			description:
				'Require a single space or disallow whitespace after operators within attribute selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-attribute-operator-space-before': {
			description:
				'Require a single space or disallow whitespace before operators within attribute selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-combinator-space-after': {
			description: 'Require a single space or disallow whitespace after the combinators of selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-combinator-space-before': {
			description: 'Require a single space or disallow whitespace before the combinators of selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-descendant-combinator-no-non-space': {
			description: 'Disallow non-space characters for descendant combinators of selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-max-empty-lines': {
			description: 'Limit the number of adjacent empty lines within selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-class-case': {
			description: 'Specify lowercase or uppercase for pseudo-class selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-class-parentheses-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-pseudo-element-case': {
			description: 'Specify lowercase or uppercase for pseudo-element selectors.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-list-comma-newline-after': {
			description: 'Require a newline or disallow whitespace after the commas of selector lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-list-comma-newline-before': {
			description: 'Require a newline or disallow whitespace before the commas of selector lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-list-comma-space-after': {
			description: 'Require a single space or disallow whitespace after the commas of selector lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'selector-list-comma-space-before': {
			description: 'Require a single space or disallow whitespace before the commas of selector lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-colon-space-after': {
			description: 'Require a single space or disallow whitespace after the colon in media features.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-colon-space-before': {
			description: 'Require a single space or disallow whitespace before the colon in media features.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-name-case': {
			description: 'Specify lowercase or uppercase for media feature names.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-parentheses-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses within media features.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-range-operator-space-after': {
			description:
				'Require a single space or disallow whitespace after the range operator in media features.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-feature-range-operator-space-before': {
			description:
				'Require a single space or disallow whitespace before the range operator in media features.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-query-list-comma-newline-after': {
			description: 'Require a newline or disallow whitespace after the commas of media query lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-query-list-comma-newline-before': {
			description: 'Require a newline or disallow whitespace before the commas of media query lists.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-query-list-comma-space-after': {
			description:
				'Require a single space or disallow whitespace after the commas of media query lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'media-query-list-comma-space-before': {
			description:
				'Require a single space or disallow whitespace before the commas of media query lists.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-name-case': {
			description: 'Specify lowercase or uppercase for at-rules names.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-name-newline-after': {
			description: 'Require a newline after at-rule names.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-name-space-after': {
			description: 'Require a single space after at-rule names.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['always', 'always-single-line'],
								description:
									'"always" - There must always be a single space after at-rule names. "always-single-line" - There must always be a single space after at-rule names in single-line declaration blocks.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-semicolon-newline-after': {
			description: 'Require a newline after the semicolon of at-rules.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['alwyas'],
								readOnly: true,
								default: 'always',
								description: '"always"- There must always be a newline after the semicolon.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'at-rule-semicolon-space-before': {
			description: 'Require a single space or disallow whitespace before the semicolons of at-rules.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								type: 'string',
								enum: ['always', 'never'],
								description:
									'"always" - There must always be a single space before the semicolons. "never" - There must never be a single space before the semicolons.',
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'indentation': {
			description: 'Specify indentation.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								title: 'Number of spaces (or use tabs)',
								anyOf: [
									{ type: 'integer' },
									{ type: 'string', enum: ['tab'], default: 'tab', readOnly: true },
								],
							},
							{
								type: 'object',
								properties: {
									baseIndentLevel: {
										title: 'Base indent level',
										description:
											'By default, the indent level of the CSS code block in non-CSS-like files is determined by the shortest indent of non-empty line. The setting baseIndentLevel allows you to define a relative indent level based on CSS code block opening or closing line.',
										anyOf: [
											{ type: 'integer' },
											{
												type: 'string',
												enum: ['auto'],
												default: 'auto',
												readOnly: true,
											},
										],
									},
									indentInsideParens: {
										title: 'Indent inside parens',
										description:
											'By default, one extra indentation (of your specified type) is expected after newlines inside parentheses, and the closing parenthesis is expected to have no extra indentation. If you would like to change the quantity of extra indentation inside parentheses, use this option. "twice" means you expect two extra indentations (of your specified type) after newlines inside parentheses, and expect the closing parenthesis to have one extra indentation. "once-at-root-twice-in-block" means two things: You want the behavior of "once", as documented above, when the parenthetical expression is part of a node that is an immediate descendent of the root — i.e. not inside a block. And you want the behavior of "twice", as documented above, when the parenthetical expression is part of a node that is inside a block.',
										type: 'string',
										enum: ['twice', 'once-at-root-twice-in-block'],
									},
									indentClosingBrace: {
										title: 'Indent closing brace',
										description:
											"If true, the closing brace of a block (rule or at-rule) will be expected at the same indentation level as the block's inner nodes.",
										type: 'boolean',
									},
									except: {
										title: 'Except',
										description: 'Do not indent for these things.',
										type: 'string',
										enum: ['block', 'param', 'value'],
									},
									ignore: {
										title: 'Ignore',
										description:
											'"inside-parens" - Ignore the indentation inside parentheses. "param" - Ignore the indentation of at-rule params. "value" - Ignore the indentation of values.',
										type: 'string',
										enum: ['inside-parens', 'param', 'value'],
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'linebreaks': {
			description: 'Specify unix or windows linebreaks.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'string', enum: ['unix', 'windows'] },
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'max-empty-lines': {
			description: 'Limit the number of adjacent empty lines.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								title: 'Maximum number of adjacent empty lines allowed',
								type: 'integer',
							},
							{
								type: 'object',
								properties: {
									ignore: {
										type: 'string',
										enum: ['comments'],
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'max-line-length': {
			description: 'Limit the length of a line.',
			hasAutofix: false,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{
								title: 'Maximum number of characters allowed.',
								type: 'integer',
							},
							{
								type: 'object',
								properties: {
									ignore: {
										type: 'string',
										enum: ['non-comments', 'comments'],
									},
									ignorePattern: { type: 'string' },
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-eol-whitespace': {
			description: 'Disallow end-of-line whitespace.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{ title: 'Turn the rule off', type: 'null' },
					{
						type: 'array',
						items: [
							{ type: 'boolean', readOnly: true, default: true, title: 'Rule is enabled' },
							{
								type: 'object',
								properties: {
									ignore: {
										type: 'string',
										enum: ['empty-lines'],
									},
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-missing-end-of-source-newline': {
			description: 'Disallow missing end-of-source newlines.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{
						title: 'Turn the rule off',
						type: 'null',
					},
					{
						type: 'array',
						items: [
							{
								type: 'boolean',
								readOnly: true,
								default: true,
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-empty-first-line': {
			description: 'Disallow empty first lines.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{
						title: 'Turn the rule off',
						type: 'null',
					},
					{
						type: 'array',
						items: [
							{
								type: 'boolean',
								readOnly: true,
								default: true,
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
		'no-extra-semicolons': {
			description: 'Disallow extra semicolons.',
			hasAutofix: true,
			category: 'Stylistic Issues',
			configuration: {
				anyOf: [
					{
						title: 'Turn the rule off',
						type: 'null',
					},
					{
						type: 'array',
						items: [
							{
								type: 'boolean',
								readOnly: true,
								default: true,
							},
							{
								type: 'object',
								properties: {
									disableFix: {
										title: 'Disable fix',
										description:
											'You can set the disableFix secondary option to disable autofix on a per rule basis.',
										type: 'boolean',
									},
									message: {
										title: 'Message',
										description:
											'You can use the message option to deliver a custom message when a rule is violated.',
										type: 'string',
									},
									reportDisables: {
										title: 'Report disables',
										description:
											'You can set the reportDisables option to report any stylelint-disable comments for this rule, effectively disallowing authors to opt out of it.',
										type: 'boolean',
									},
									severity: {
										title: 'Severity',
										description:
											"You can use the severity option to adjust the rule's severity.",
										type: 'string',
										enum: ['warning', 'error'],
										default: 'error',
									},
								},
							},
						],
					},
				],
			},
		},
	},
};
