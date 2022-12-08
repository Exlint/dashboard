import type { ILibraryData } from '@exlint-dashboard/common';

export const eslintData: ILibraryData = {
	name: 'ESLint',
	author: 'Nicholas C. Zakas',
	description: 'Find and fix problems in your JavaScript code.',
	types: ['Linters'],
	categories: ['Code'],
	language: 'JavaScript',
	configuration: {
		type: 'object',
		properties: {
			root: {
				title: 'Root',
				description:
					'By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, place "root": true.',
				type: 'boolean',
				default: true,
			},
			extends: {
				title: 'Extends',
				description: 'The path to other config files or the package name of shareable configs',
				type: 'array',
				items: { type: 'string' },
			},
			env: {
				title: 'Env',
				description: 'An environment provides predefined global variables',
				type: 'object',
				properties: {
					'browser': { type: 'boolean' },
					'node': { type: 'boolean' },
					'commonjs': { type: 'boolean' },
					'shared-node-browser': { type: 'boolean' },
					'es6': { type: 'boolean' },
					'es2016': { type: 'boolean' },
					'es2017': { type: 'boolean' },
					'es2018': { type: 'boolean' },
					'es2019': { type: 'boolean' },
					'es2020': { type: 'boolean' },
					'es2021': { type: 'boolean' },
					'es2022': { type: 'boolean' },
					'worker': { type: 'boolean' },
					'amd': { type: 'boolean' },
					'mocha': { type: 'boolean' },
					'jasmine': { type: 'boolean' },
					'jest': { type: 'boolean' },
					'phantomjs': { type: 'boolean' },
					'protractor': { type: 'boolean' },
					'qunit': { type: 'boolean' },
					'jquery': { type: 'boolean' },
					'prototypejs': { type: 'boolean' },
					'shelljs': { type: 'boolean' },
					'meteor': { type: 'boolean' },
					'mongo': { type: 'boolean' },
					'applescript': { type: 'boolean' },
					'nashorn': { type: 'boolean' },
					'serviceworker': { type: 'boolean' },
					'atomtest': { type: 'boolean' },
					'embertest': { type: 'boolean' },
					'webextensions': { type: 'boolean' },
					'greasemonkey': { type: 'boolean' },
				},
			},
			parserOptions: {
				title: 'Parser Options',
				description:
					'ESLint allows you to specify the JavaScript language options you want to support.',
				type: 'object',
				properties: {
					ecmaVersion: {
						title: 'ECMA Version',
						description: 'The version of ECMAScript to support.',
						type: 'string',
						enum: [
							3,
							5,
							6,
							7,
							8,
							9,
							10,
							11,
							12,
							13,
							14,
							2015,
							2016,
							2017,
							2018,
							2019,
							2020,
							2021,
							2022,
							2023,
							'latest',
						],
					},
					sourceType: {
						title: 'Source Type',
						description: 'The source code type.',
						type: 'string',
						enum: ['script', 'module'],
					},
					allowReserved: {
						title: 'Allow Reserved',
						description: 'Allowing the use of reserved words as identifiers in ES3.',
						type: 'boolean',
					},
					ecmaFeatures: {
						title: 'ECMA Features',
						description:
							'An object indicating which additional language features you’d like to use',
						type: 'object',
						properties: {
							globalReturn: { type: 'boolean' },
							jsx: { type: 'boolean' },
							impliedStrict: { type: 'boolean' },
						},
					},
				},
			},
			globals: {
				title: 'Globals',
				description:
					'An object specifying additional objects that should be added to the global scope during linting.',
				type: 'object',
				additionalProperties: {
					type: 'string',
					enum: [true, false, 'off', 'readable', 'writable', 'writeable'],
				},
			},
			ignorePatterns: {
				title: 'Ignore Patterns',
				description: 'You can tell ESLint to ignore specific files and directories.',
				type: 'array',
				items: { type: 'string' },
			},
			noInlineConfig: {
				title: 'No Inline Config',
				description: 'If inline configuration is allowed.',
				type: 'boolean',
			},
			reportUnusedDisableDirectives: {
				title: 'Report Unused Disable Directives',
				description: 'If unused disable directives should be tracked and reported.',
				type: 'boolean',
			},
		},
	},
	rules: {
		'array-callback-return': {
			description: 'Enforce `return` statements in callbacks of array methods',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowImplicit: { type: 'boolean', default: false },
							checkForEach: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'constructor-super': {
			description: 'Require `super()` calls in constructors',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'for-direction': {
			description: 'Enforce "for" loop update clause moving the counter in the right direction',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'getter-return': {
			description: 'Enforce `return` statements in getters',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowImplicit: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-async-promise-executor': {
			description: 'Disallow using an async function as a Promise executor',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-await-in-loop': {
			description: 'Disallow `await` inside of loops',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-class-assign': {
			description: 'Disallow reassigning class members',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-compare-neg-zero': {
			description: 'Disallow comparing against -0',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-cond-assign': {
			description: 'Disallow assignment operators in conditional expressions',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: { type: 'array', items: [{ enum: ['except-parens', 'always'] }] },
		},
		'no-const-assign': {
			description: 'Disallow reassigning `const` variables',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-constant-binary-expression': {
			description: "Disallow expressions where the operation doesn't affect the value",
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-constant-condition': {
			description: 'Disallow constant expressions in conditions',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { checkLoops: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-constructor-return': {
			description: 'Disallow returning value from constructor',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {},
		},
		'no-control-regex': {
			description: 'Disallow control characters in regular expressions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-debugger': {
			description: 'Disallow the use of `debugger`',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-dupe-args': {
			description: 'Disallow duplicate arguments in `function` definitions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-dupe-class-members': {
			description: 'Disallow duplicate class members',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-dupe-else-if': {
			description: 'Disallow duplicate conditions in if-else-if chains',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-dupe-keys': {
			description: 'Disallow duplicate keys in object literals',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-duplicate-case': {
			description: 'Disallow duplicate case labels',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-duplicate-imports': {
			description: 'Disallow duplicate module imports',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { includeExports: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-empty-character-class': {
			description: 'Disallow empty character classes in regular expressions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-empty-pattern': {
			description: 'Disallow empty destructuring patterns',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-ex-assign': {
			description: 'Disallow reassigning exceptions in `catch` clauses',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-fallthrough': {
			description: 'Disallow fallthrough of `case` statements',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							commentPattern: { type: 'string', default: '' },
							allowEmptyCase: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-func-assign': {
			description: 'Disallow reassigning `function` declarations',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-import-assign': {
			description: 'Disallow assigning to imported bindings',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-inner-declarations': {
			description: 'Disallow variable or `function` declarations in nested blocks',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: { type: 'array', items: [{ enum: ['functions', 'both'] }] },
		},
		'no-invalid-regexp': {
			description: 'Disallow invalid regular expression strings in `RegExp` constructors',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowConstructorFlags: { type: 'array', items: { type: 'string' } } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-irregular-whitespace': {
			description: 'Disallow irregular whitespace',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							skipComments: { type: 'boolean', default: false },
							skipStrings: { type: 'boolean', default: true },
							skipTemplates: { type: 'boolean', default: false },
							skipRegExps: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-loss-of-precision': {
			description: 'Disallow literal numbers that lose precision',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-misleading-character-class': {
			description:
				'Disallow characters which are made with multiple code points in character class syntax',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-new-symbol': {
			description: 'Disallow `new` operators with the `Symbol` object',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-obj-calls': {
			description: 'Disallow calling global object properties as functions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-promise-executor-return': {
			description: 'Disallow returning values from Promise executor functions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-prototype-builtins': {
			description: 'Disallow calling some `Object.prototype` methods directly on objects',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-self-assign': {
			description: 'Disallow assignments where both sides are exactly the same',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { props: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-self-compare': {
			description: 'Disallow comparisons where both sides are exactly the same',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-setter-return': {
			description: 'Disallow returning values from setters',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-sparse-arrays': {
			description: 'Disallow sparse arrays',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-template-curly-in-string': {
			description: 'Disallow template literal placeholder syntax in regular strings',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-this-before-super': {
			description: 'Disallow `this`/`super` before calling `super()` in constructors',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-undef': {
			description:
				'Disallow the use of undeclared variables unless mentioned in `/*global */` comments',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { typeof: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-unexpected-multiline': {
			description: 'Disallow confusing multiline expressions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-unmodified-loop-condition': {
			description: 'Disallow unmodified loop conditions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-unreachable': {
			description:
				'Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-unreachable-loop': {
			description: 'Disallow loops with a body that allows only one iteration',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							ignore: {
								type: 'array',
								items: {
									enum: [
										'WhileStatement',
										'DoWhileStatement',
										'ForStatement',
										'ForInStatement',
										'ForOfStatement',
									],
								},
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-unsafe-finally': {
			description: 'Disallow control flow statements in `finally` blocks',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-unsafe-negation': {
			description: 'Disallow negating the left operand of relational operators',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { enforceForOrderingRelations: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-unsafe-optional-chaining': {
			description:
				'Disallow use of optional chaining in contexts where the `undefined` value is not allowed',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { disallowArithmeticOperators: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-unused-private-class-members': {
			description: 'Disallow unused private class members',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-unused-vars': {
			description: 'Disallow unused variables',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['all', 'local'] },
							{
								type: 'object',
								properties: {
									vars: { enum: ['all', 'local'] },
									varsIgnorePattern: { type: 'string' },
									args: { enum: ['all', 'after-used', 'none'] },
									ignoreRestSiblings: { type: 'boolean' },
									argsIgnorePattern: { type: 'string' },
									caughtErrors: { enum: ['all', 'none'] },
									caughtErrorsIgnorePattern: { type: 'string' },
									destructuredArrayIgnorePattern: { type: 'string' },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'no-use-before-define': {
			description: 'Disallow the use of variables before they are defined',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['nofunc'] },
							{
								type: 'object',
								properties: {
									functions: { type: 'boolean' },
									classes: { type: 'boolean' },
									variables: { type: 'boolean' },
									allowNamedExports: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'no-useless-backreference': {
			description: 'Disallow useless backreferences in regular expressions',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'require-atomic-updates': {
			description:
				'Disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowProperties: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'use-isnan': {
			description: 'Require calls to `isNaN()` when checking for `NaN`',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							enforceForSwitchCase: { type: 'boolean', default: true },
							enforceForIndexOf: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'valid-typeof': {
			description: 'Enforce comparing `typeof` expressions against valid strings',
			hasAutofix: false,
			category: 'Possible Problems',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { requireStringLiterals: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'accessor-pairs': {
			description: 'Enforce getter and setter pairs in objects and classes',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							getWithoutSet: { type: 'boolean', default: false },
							setWithoutGet: { type: 'boolean', default: true },
							enforceForClassMembers: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'arrow-body-style': {
			description: 'Require braces around arrow function bodies',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{ type: 'array', items: [{ enum: ['always', 'never'] }], minItems: 0, maxItems: 1 },
					{
						type: 'array',
						items: [
							{ enum: ['as-needed'] },
							{
								type: 'object',
								properties: { requireReturnForObjectLiteral: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'block-scoped-var': {
			description: 'Enforce the use of variables within the scope they are defined',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'camelcase': {
			description: 'Enforce camelcase naming convention',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							ignoreDestructuring: { type: 'boolean', default: false },
							ignoreImports: { type: 'boolean', default: false },
							ignoreGlobals: { type: 'boolean', default: false },
							properties: { enum: ['always', 'never'] },
							allow: {
								type: 'array',
								items: [{ type: 'string' }],
								minItems: 0,
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'capitalized-comments': {
			description: 'Enforce or disallow capitalization of the first letter of a comment',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						oneOf: [
							{
								type: 'object',
								properties: {
									ignorePattern: { type: 'string' },
									ignoreInlineComments: { type: 'boolean' },
									ignoreConsecutiveComments: { type: 'boolean' },
								},
								additionalProperties: false,
							},
							{
								type: 'object',
								properties: {
									line: {
										type: 'object',
										properties: {
											ignorePattern: { type: 'string' },
											ignoreInlineComments: { type: 'boolean' },
											ignoreConsecutiveComments: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									block: {
										type: 'object',
										properties: {
											ignorePattern: { type: 'string' },
											ignoreInlineComments: { type: 'boolean' },
											ignoreConsecutiveComments: { type: 'boolean' },
										},
										additionalProperties: false,
									},
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'class-methods-use-this': {
			description: 'Enforce that class methods utilize `this`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							exceptMethods: { type: 'array', items: { type: 'string' } },
							enforceForClassFields: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'complexity': {
			description: 'Enforce a maximum cyclomatic complexity allowed in a program',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 0 },
							{
								type: 'object',
								properties: {
									maximum: { type: 'integer', minimum: 0 },
									max: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'consistent-return': {
			description: 'Require `return` statements to either always or never specify values',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { treatUndefinedAsUnspecified: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'consistent-this': {
			description: 'Enforce consistent naming when capturing the current execution context',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: { type: 'array', items: { type: 'string', minLength: 1 }, uniqueItems: true },
		},
		'curly': {
			description: 'Enforce consistent brace style for all control statements',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{ type: 'array', items: [{ enum: ['all'] }], minItems: 0, maxItems: 1 },
					{
						type: 'array',
						items: [{ enum: ['multi', 'multi-line', 'multi-or-nest'] }, { enum: ['consistent'] }],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'default-case': {
			description: 'Require `default` cases in `switch` statements',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { commentPattern: { type: 'string' } },
						additionalProperties: false,
					},
				],
			},
		},
		'default-case-last': {
			description: 'Enforce default clauses in switch statements to be last',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'default-param-last': {
			description: 'Enforce default parameters to be last',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'dot-notation': {
			description: 'Enforce dot notation whenever possible',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowKeywords: { type: 'boolean', default: true },
							allowPattern: { type: 'string', default: '' },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'eqeqeq': {
			description: 'Require the use of `===` and `!==`',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{
						type: 'array',
						items: [
							{ enum: ['always'] },
							{
								type: 'object',
								properties: { null: { enum: ['always', 'never', 'ignore'] } },
								additionalProperties: false,
							},
						],
						additionalItems: false,
					},
					{ type: 'array', items: [{ enum: ['smart', 'allow-null'] }], additionalItems: false },
				],
			},
		},
		'func-name-matching': {
			description:
				'Require function names to match the name of the variable or property to which they are assigned',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{
						type: 'array',
						additionalItems: false,
						items: [
							{ enum: ['always', 'never'] },
							{
								type: 'object',
								properties: {
									considerPropertyDescriptor: { type: 'boolean' },
									includeCommonJSModuleExports: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
					},
					{
						type: 'array',
						additionalItems: false,
						items: [
							{
								type: 'object',
								properties: {
									considerPropertyDescriptor: { type: 'boolean' },
									includeCommonJSModuleExports: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'func-names': {
			description: 'Require or disallow named `function` expressions',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				definitions: { value: { enum: ['always', 'as-needed', 'never'] } },
				items: [
					{ $ref: '#/definitions/value' },
					{
						type: 'object',
						properties: { generators: { $ref: '#/definitions/value' } },
						additionalProperties: false,
					},
				],
			},
		},
		'func-style': {
			description: 'Enforce the consistent use of either `function` declarations or expressions',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['declaration', 'expression'] },
					{
						type: 'object',
						properties: { allowArrowFunctions: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'grouped-accessor-pairs': {
			description: 'Require grouped accessor pairs in object literals and classes',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: { type: 'array', items: [{ enum: ['anyOrder', 'getBeforeSet', 'setBeforeGet'] }] },
		},
		'guard-for-in': {
			description: 'Require `for-in` loops to include an `if` statement',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'id-denylist': {
			description: 'Disallow specified identifiers',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: { type: 'array', items: { type: 'string' }, uniqueItems: true },
		},
		'id-length': {
			description: 'Enforce minimum and maximum identifier lengths',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							min: { type: 'integer', default: 2 },
							max: { type: 'integer' },
							exceptions: { type: 'array', uniqueItems: true, items: { type: 'string' } },
							exceptionPatterns: {
								type: 'array',
								uniqueItems: true,
								items: { type: 'string' },
							},
							properties: { enum: ['always', 'never'] },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'id-match': {
			description: 'Require identifiers to match a specified regular expression',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{ type: 'string' },
					{
						type: 'object',
						properties: {
							properties: { type: 'boolean', default: false },
							classFields: { type: 'boolean', default: false },
							onlyDeclarations: { type: 'boolean', default: false },
							ignoreDestructuring: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'init-declarations': {
			description: 'Require or disallow initialization in variable declarations',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{ type: 'array', items: [{ enum: ['always'] }], minItems: 0, maxItems: 1 },
					{
						type: 'array',
						items: [
							{ enum: ['never'] },
							{
								type: 'object',
								properties: { ignoreForLoopInit: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'max-classes-per-file': {
			description: 'Enforce a maximum number of classes per file',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 1 },
							{
								type: 'object',
								properties: {
									ignoreExpressions: { type: 'boolean' },
									max: { type: 'integer', minimum: 1 },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'max-depth': {
			description: 'Enforce a maximum depth that blocks can be nested',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 0 },
							{
								type: 'object',
								properties: {
									maximum: { type: 'integer', minimum: 0 },
									max: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'max-lines': {
			description: 'Enforce a maximum number of lines per file',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 0 },
							{
								type: 'object',
								properties: {
									max: { type: 'integer', minimum: 0 },
									skipComments: { type: 'boolean' },
									skipBlankLines: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'max-lines-per-function': {
			description: 'Enforce a maximum number of lines of code in a function',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{
								type: 'object',
								properties: {
									max: { type: 'integer', minimum: 0 },
									skipComments: { type: 'boolean' },
									skipBlankLines: { type: 'boolean' },
									IIFEs: { type: 'boolean' },
								},
								additionalProperties: false,
							},
							{ type: 'integer', minimum: 1 },
						],
					},
				],
			},
		},
		'max-nested-callbacks': {
			description: 'Enforce a maximum depth that callbacks can be nested',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 0 },
							{
								type: 'object',
								properties: {
									maximum: { type: 'integer', minimum: 0 },
									max: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'max-params': {
			description: 'Enforce a maximum number of parameters in function definitions',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 0 },
							{
								type: 'object',
								properties: {
									maximum: { type: 'integer', minimum: 0 },
									max: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'max-statements': {
			description: 'Enforce a maximum number of statements allowed in function blocks',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ type: 'integer', minimum: 0 },
							{
								type: 'object',
								properties: {
									maximum: { type: 'integer', minimum: 0 },
									max: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
					{
						type: 'object',
						properties: { ignoreTopLevelFunctions: { type: 'boolean' } },
						additionalProperties: false,
					},
				],
			},
		},
		'multiline-comment-style': {
			description: 'Enforce a particular style for multiline comments',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [{ enum: ['starred-block', 'separate-lines', 'bare-block'] }],
			},
		},
		'new-cap': {
			description: 'Require constructor names to begin with a capital letter',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							newIsCap: { type: 'boolean', default: true },
							capIsNew: { type: 'boolean', default: true },
							newIsCapExceptions: { type: 'array', items: { type: 'string' } },
							newIsCapExceptionPattern: { type: 'string' },
							capIsNewExceptions: { type: 'array', items: { type: 'string' } },
							capIsNewExceptionPattern: { type: 'string' },
							properties: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-alert': {
			description: 'Disallow the use of `alert`, `confirm`, and `prompt`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-array-constructor': {
			description: 'Disallow `Array` constructors',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-bitwise': {
			description: 'Disallow bitwise operators',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allow: {
								type: 'array',
								items: {
									enum: [
										'^',
										'|',
										'&',
										'<<',
										'>>',
										'>>>',
										'^=',
										'|=',
										'&=',
										'<<=',
										'>>=',
										'>>>=',
										'~',
									],
								},
								uniqueItems: true,
							},
							int32Hint: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-caller': {
			description: 'Disallow the use of `arguments.caller` or `arguments.callee`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-case-declarations': {
			description: 'Disallow lexical declarations in case clauses',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-confusing-arrow': {
			description: 'Disallow arrow functions where they could be confused with comparisons',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowParens: { type: 'boolean', default: true },
							onlyOneSimpleParam: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-console': {
			description: 'Disallow the use of `console`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allow: {
								type: 'array',
								items: { type: 'string' },
								minItems: 1,
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-continue': {
			description: 'Disallow `continue` statements',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-delete-var': {
			description: 'Disallow deleting variables',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-div-regex': {
			description: 'Disallow division operators explicitly at the beginning of regular expressions',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-else-return': {
			description: 'Disallow `else` blocks after `return` statements in `if` statements',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowElseIf: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-empty': {
			description: 'Disallow empty block statements',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowEmptyCatch: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-empty-function': {
			description: 'Disallow empty functions',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allow: {
								type: 'array',
								items: {
									enum: [
										'functions',
										'arrowFunctions',
										'generatorFunctions',
										'methods',
										'generatorMethods',
										'getters',
										'setters',
										'constructors',
										'asyncFunctions',
										'asyncMethods',
									],
								},
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-eq-null': {
			description: 'Disallow `null` comparisons without type-checking operators',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-eval': {
			description: 'Disallow the use of `eval()`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowIndirect: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-extend-native': {
			description: 'Disallow extending native types',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							exceptions: { type: 'array', items: { type: 'string' }, uniqueItems: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-extra-bind': {
			description: 'Disallow unnecessary calls to `.bind()`',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-extra-boolean-cast': {
			description: 'Disallow unnecessary boolean casts',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { enforceForLogicalOperands: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-extra-label': {
			description: 'Disallow unnecessary labels',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-extra-semi': {
			description: 'Disallow unnecessary semicolons',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-floating-decimal': {
			description: 'Disallow leading or trailing decimal points in numeric literals',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-global-assign': {
			description: 'Disallow assignments to native objects or read-only global variables',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							exceptions: { type: 'array', items: { type: 'string' }, uniqueItems: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-implicit-coercion': {
			description: 'Disallow shorthand type conversions',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							boolean: { type: 'boolean', default: true },
							number: { type: 'boolean', default: true },
							string: { type: 'boolean', default: true },
							disallowTemplateShorthand: { type: 'boolean', default: false },
							allow: {
								type: 'array',
								items: { enum: ['~', '!!', '+', '*'] },
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-implicit-globals': {
			description: 'Disallow declarations in the global scope',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { lexicalBindings: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-implied-eval': {
			description: 'Disallow the use of `eval()`-like methods',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-inline-comments': {
			description: 'Disallow inline comments after code',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { ignorePattern: { type: 'string' } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-invalid-this': {
			description: 'Disallow use of `this` in contexts where the value of `this` is `undefined`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { capIsConstructor: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-iterator': {
			description: 'Disallow the use of the `__iterator__` property',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-label-var': {
			description: 'Disallow labels that share a name with a variable',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-labels': {
			description: 'Disallow labeled statements',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowLoop: { type: 'boolean', default: false },
							allowSwitch: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-lone-blocks': {
			description: 'Disallow unnecessary nested blocks',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-lonely-if': {
			description: 'Disallow `if` statements as the only statement in `else` blocks',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-loop-func': {
			description:
				'Disallow function declarations that contain unsafe references inside loop statements',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-magic-numbers': {
			description: 'Disallow magic numbers',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							detectObjects: { type: 'boolean', default: false },
							enforceConst: { type: 'boolean', default: false },
							ignore: {
								type: 'array',
								items: {
									anyOf: [
										{ type: 'number' },
										{ type: 'string', pattern: '^[+-]?(?:0|[1-9][0-9]*)n$' },
									],
								},
								uniqueItems: true,
							},
							ignoreArrayIndexes: { type: 'boolean', default: false },
							ignoreDefaultValues: { type: 'boolean', default: false },
							ignoreClassFieldInitialValues: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-mixed-operators': {
			description: 'Disallow mixed binary operators',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							groups: {
								type: 'array',
								items: {
									type: 'array',
									items: {
										enum: [
											'+',
											'-',
											'*',
											'/',
											'%',
											'**',
											'&',
											'|',
											'^',
											'~',
											'<<',
											'>>',
											'>>>',
											'==',
											'!=',
											'===',
											'!==',
											'>',
											'>=',
											'<',
											'<=',
											'&&',
											'||',
											'in',
											'instanceof',
											'?:',
											'??',
										],
									},
									minItems: 2,
									uniqueItems: true,
								},
								uniqueItems: true,
							},
							allowSamePrecedence: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-multi-assign': {
			description: 'Disallow use of chained assignment expressions',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { ignoreNonDeclaration: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-multi-str': {
			description: 'Disallow multiline strings',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-negated-condition': {
			description: 'Disallow negated conditions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-nested-ternary': {
			description: 'Disallow nested ternary expressions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-new': {
			description: 'Disallow `new` operators outside of assignments or comparisons',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-new-func': {
			description: 'Disallow `new` operators with the `Function` object',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-new-object': {
			description: 'Disallow `Object` constructors',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-new-wrappers': {
			description: 'Disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-nonoctal-decimal-escape': {
			description: 'Disallow `\\8` and `\\9` escape sequences in string literals',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-octal': { description: 'Disallow octal literals', hasAutofix: false, category: 'Suggestions' },
		'no-octal-escape': {
			description: 'Disallow octal escape sequences in string literals',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-param-reassign': {
			description: 'Disallow reassigning `function` parameters',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{
								type: 'object',
								properties: { props: { enum: [false] } },
								additionalProperties: false,
							},
							{
								type: 'object',
								properties: {
									props: { enum: [true] },
									ignorePropertyModificationsFor: {
										type: 'array',
										items: { type: 'string' },
										uniqueItems: true,
									},
									ignorePropertyModificationsForRegex: {
										type: 'array',
										items: { type: 'string' },
										uniqueItems: true,
									},
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'no-plusplus': {
			description: 'Disallow the unary operators `++` and `--`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowForLoopAfterthoughts: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-proto': {
			description: 'Disallow the use of the `__proto__` property',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-redeclare': {
			description: 'Disallow variable redeclaration',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { builtinGlobals: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-regex-spaces': {
			description: 'Disallow multiple spaces in regular expressions',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-restricted-exports': {
			description: 'Disallow specified names in exports',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							restrictedNamedExports: {
								type: 'array',
								items: { type: 'string' },
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-restricted-globals': {
			description: 'Disallow specified global variables',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: {
					oneOf: [
						{ type: 'string' },
						{
							type: 'object',
							properties: { name: { type: 'string' }, message: { type: 'string' } },
							required: ['name'],
							additionalProperties: false,
						},
					],
				},
				uniqueItems: true,
				minItems: 0,
			},
		},
		'no-restricted-imports': {
			description: 'Disallow specified modules when loaded by `import`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{
						type: 'array',
						items: {
							anyOf: [
								{ type: 'string' },
								{
									type: 'object',
									properties: {
										name: { type: 'string' },
										message: { type: 'string', minLength: 1 },
										importNames: { type: 'array', items: { type: 'string' } },
									},
									additionalProperties: false,
									required: ['name'],
								},
							],
						},
						uniqueItems: true,
					},
					{
						type: 'array',
						items: [
							{
								type: 'object',
								properties: {
									paths: {
										type: 'array',
										items: {
											anyOf: [
												{ type: 'string' },
												{
													type: 'object',
													properties: {
														name: { type: 'string' },
														message: { type: 'string', minLength: 1 },
														importNames: {
															type: 'array',
															items: { type: 'string' },
														},
													},
													additionalProperties: false,
													required: ['name'],
												},
											],
										},
										uniqueItems: true,
									},
									patterns: {
										anyOf: [
											{ type: 'array', items: { type: 'string' }, uniqueItems: true },
											{
												type: 'array',
												items: {
													type: 'object',
													properties: {
														importNames: {
															type: 'array',
															items: { type: 'string' },
															minItems: 1,
															uniqueItems: true,
														},
														group: {
															type: 'array',
															items: { type: 'string' },
															minItems: 1,
															uniqueItems: true,
														},
														message: { type: 'string', minLength: 1 },
														caseSensitive: { type: 'boolean' },
													},
													additionalProperties: false,
													required: ['group'],
												},
												uniqueItems: true,
											},
										],
									},
								},
								additionalProperties: false,
							},
						],
						additionalItems: false,
					},
				],
			},
		},
		'no-restricted-properties': {
			description: 'Disallow certain properties on certain objects',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: {
					anyOf: [
						{
							type: 'object',
							properties: {
								object: { type: 'string' },
								property: { type: 'string' },
								message: { type: 'string' },
							},
							additionalProperties: false,
							required: ['object'],
						},
						{
							type: 'object',
							properties: {
								object: { type: 'string' },
								property: { type: 'string' },
								message: { type: 'string' },
							},
							additionalProperties: false,
							required: ['property'],
						},
					],
				},
				uniqueItems: true,
			},
		},
		'no-restricted-syntax': {
			description: 'Disallow specified syntax',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: {
					oneOf: [
						{ type: 'string' },
						{
							type: 'object',
							properties: { selector: { type: 'string' }, message: { type: 'string' } },
							required: ['selector'],
							additionalProperties: false,
						},
					],
				},
				uniqueItems: true,
				minItems: 0,
			},
		},
		'no-return-assign': {
			description: 'Disallow assignment operators in `return` statements',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: { type: 'array', items: [{ enum: ['except-parens', 'always'] }] },
		},
		'no-return-await': {
			description: 'Disallow unnecessary `return await`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-script-url': {
			description: 'Disallow `javascript:` urls',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-sequences': {
			description: 'Disallow comma operators',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						properties: { allowInParentheses: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-shadow': {
			description:
				'Disallow variable declarations from shadowing variables declared in the outer scope',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							builtinGlobals: { type: 'boolean', default: false },
							hoist: { enum: ['all', 'functions', 'never'], default: 'functions' },
							allow: { type: 'array', items: { type: 'string' } },
							ignoreOnInitialization: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-shadow-restricted-names': {
			description: 'Disallow identifiers from shadowing restricted names',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-ternary': {
			description: 'Disallow ternary operators',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-throw-literal': {
			description: 'Disallow throwing literals as exceptions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-undef-init': {
			description: 'Disallow initializing variables to `undefined`',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-undefined': {
			description: 'Disallow the use of `undefined` as an identifier',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-underscore-dangle': {
			description: 'Disallow dangling underscores in identifiers',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allow: { type: 'array', items: { type: 'string' } },
							allowAfterThis: { type: 'boolean', default: false },
							allowAfterSuper: { type: 'boolean', default: false },
							allowAfterThisConstructor: { type: 'boolean', default: false },
							enforceInMethodNames: { type: 'boolean', default: false },
							allowFunctionParams: { type: 'boolean', default: true },
							enforceInClassFields: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-unneeded-ternary': {
			description: 'Disallow ternary operators when simpler alternatives exist',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { defaultAssignment: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-unused-expressions': {
			description: 'Disallow unused expressions',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowShortCircuit: { type: 'boolean', default: false },
							allowTernary: { type: 'boolean', default: false },
							allowTaggedTemplates: { type: 'boolean', default: false },
							enforceForJSX: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-unused-labels': {
			description: 'Disallow unused labels',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-useless-call': {
			description: 'Disallow unnecessary calls to `.call()` and `.apply()`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-useless-catch': {
			description: 'Disallow unnecessary `catch` clauses',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-useless-computed-key': {
			description: 'Disallow unnecessary computed property keys in objects and classes',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { enforceForClassMembers: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-useless-concat': {
			description: 'Disallow unnecessary concatenation of literals or template literals',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-useless-constructor': {
			description: 'Disallow unnecessary constructors',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-useless-escape': {
			description: 'Disallow unnecessary escape characters',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-useless-rename': {
			description: 'Disallow renaming import, export, and destructured assignments to the same name',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							ignoreDestructuring: { type: 'boolean', default: false },
							ignoreImport: { type: 'boolean', default: false },
							ignoreExport: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-useless-return': {
			description: 'Disallow redundant return statements',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-var': {
			description: 'Require `let` or `const` instead of `var`',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-void': {
			description: 'Disallow `void` operators',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowAsStatement: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-warning-comments': {
			description: 'Disallow specified warning terms in comments',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							terms: { type: 'array', items: { type: 'string' } },
							location: { enum: ['start', 'anywhere'] },
							decoration: {
								type: 'array',
								items: { type: 'string', pattern: '^\\S$' },
								minItems: 1,
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-with': { description: 'Disallow `with` statements', hasAutofix: false, category: 'Suggestions' },
		'object-shorthand': {
			description: 'Require or disallow method and property shorthand syntax for object literals',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{
						type: 'array',
						items: [
							{
								enum: [
									'always',
									'methods',
									'properties',
									'never',
									'consistent',
									'consistent-as-needed',
								],
							},
						],
						minItems: 0,
						maxItems: 1,
					},
					{
						type: 'array',
						items: [
							{ enum: ['always', 'methods', 'properties'] },
							{
								type: 'object',
								properties: { avoidQuotes: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
					{
						type: 'array',
						items: [
							{ enum: ['always', 'methods'] },
							{
								type: 'object',
								properties: {
									ignoreConstructors: { type: 'boolean' },
									methodsIgnorePattern: { type: 'string' },
									avoidQuotes: { type: 'boolean' },
									avoidExplicitReturnArrows: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'one-var': {
			description: 'Enforce variables to be declared either together or separately in functions',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['always', 'never', 'consecutive'] },
							{
								type: 'object',
								properties: {
									separateRequires: { type: 'boolean' },
									var: { enum: ['always', 'never', 'consecutive'] },
									let: { enum: ['always', 'never', 'consecutive'] },
									const: { enum: ['always', 'never', 'consecutive'] },
								},
								additionalProperties: false,
							},
							{
								type: 'object',
								properties: {
									initialized: { enum: ['always', 'never', 'consecutive'] },
									uninitialized: { enum: ['always', 'never', 'consecutive'] },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'one-var-declaration-per-line': {
			description: 'Require or disallow newlines around variable declarations',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: { type: 'array', items: [{ enum: ['always', 'initializations'] }] },
		},
		'operator-assignment': {
			description: 'Require or disallow assignment operator shorthand where possible',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: { type: 'array', items: [{ enum: ['always', 'never'] }] },
		},
		'prefer-arrow-callback': {
			description: 'Require using arrow functions for callbacks',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowNamedFunctions: { type: 'boolean', default: false },
							allowUnboundThis: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'prefer-const': {
			description:
				'Require `const` declarations for variables that are never reassigned after declared',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							destructuring: { enum: ['any', 'all'], default: 'any' },
							ignoreReadBeforeAssign: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'prefer-destructuring': {
			description: 'Require destructuring from arrays and/or objects',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{
								type: 'object',
								properties: {
									VariableDeclarator: {
										type: 'object',
										properties: {
											array: { type: 'boolean' },
											object: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									AssignmentExpression: {
										type: 'object',
										properties: {
											array: { type: 'boolean' },
											object: { type: 'boolean' },
										},
										additionalProperties: false,
									},
								},
								additionalProperties: false,
							},
							{
								type: 'object',
								properties: { array: { type: 'boolean' }, object: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
					},
					{
						type: 'object',
						properties: { enforceForRenamedProperties: { type: 'boolean' } },
						additionalProperties: false,
					},
				],
			},
		},
		'prefer-exponentiation-operator': {
			description: 'Disallow the use of `Math.pow` in favor of the `**` operator',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-named-capture-group': {
			description: 'Enforce using named capture group in regular expression',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'prefer-numeric-literals': {
			description:
				'Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-object-has-own': {
			description:
				'Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-object-spread': {
			description:
				'Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-promise-reject-errors': {
			description: 'Require using Error objects as Promise rejection reasons',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowEmptyReject: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'prefer-regex-literals': {
			description: 'Disallow use of the `RegExp` constructor in favor of regular expression literals',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { disallowRedundantWrapping: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'prefer-rest-params': {
			description: 'Require rest parameters instead of `arguments`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'prefer-spread': {
			description: 'Require spread operators instead of `.apply()`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'prefer-template': {
			description: 'Require template literals instead of string concatenation',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'quote-props': {
			description: 'Require quotes around object literal property names',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				anyOf: [
					{
						type: 'array',
						items: [{ enum: ['always', 'as-needed', 'consistent', 'consistent-as-needed'] }],
						minItems: 0,
						maxItems: 1,
					},
					{
						type: 'array',
						items: [
							{ enum: ['always', 'as-needed', 'consistent', 'consistent-as-needed'] },
							{
								type: 'object',
								properties: {
									keywords: { type: 'boolean' },
									unnecessary: { type: 'boolean' },
									numbers: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'radix': {
			description: 'Enforce the consistent use of the radix argument when using `parseInt()`',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: { type: 'array', items: [{ enum: ['always', 'as-needed'] }] },
		},
		'require-await': {
			description: 'Disallow async functions which have no `await` expression',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'require-unicode-regexp': {
			description: 'Enforce the use of `u` flag on RegExp',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'require-yield': {
			description: 'Require generator functions to contain `yield`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'sort-imports': {
			description: 'Enforce sorted import declarations within modules',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							ignoreCase: { type: 'boolean', default: false },
							memberSyntaxSortOrder: {
								type: 'array',
								items: { enum: ['none', 'all', 'multiple', 'single'] },
								uniqueItems: true,
								minItems: 4,
								maxItems: 4,
							},
							ignoreDeclarationSort: { type: 'boolean', default: false },
							ignoreMemberSort: { type: 'boolean', default: false },
							allowSeparatedGroups: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'sort-keys': {
			description: 'Require object keys to be sorted',
			hasAutofix: false,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['asc', 'desc'] },
					{
						type: 'object',
						properties: {
							caseSensitive: { type: 'boolean', default: true },
							natural: { type: 'boolean', default: false },
							minKeys: { type: 'integer', minimum: 2, default: 2 },
							allowLineSeparatedGroups: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'sort-vars': {
			description: 'Require variables within the same declaration block to be sorted',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { ignoreCase: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'spaced-comment': {
			description: 'Enforce consistent spacing after the `//` or `/*` in a comment',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: {
							exceptions: { type: 'array', items: { type: 'string' } },
							markers: { type: 'array', items: { type: 'string' } },
							line: {
								type: 'object',
								properties: {
									exceptions: { type: 'array', items: { type: 'string' } },
									markers: { type: 'array', items: { type: 'string' } },
								},
								additionalProperties: false,
							},
							block: {
								type: 'object',
								properties: {
									exceptions: { type: 'array', items: { type: 'string' } },
									markers: { type: 'array', items: { type: 'string' } },
									balanced: { type: 'boolean', default: false },
								},
								additionalProperties: false,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'strict': {
			description: 'Require or disallow strict mode directives',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: { type: 'array', items: [{ enum: ['never', 'global', 'function', 'safe'] }] },
		},
		'symbol-description': {
			description: 'Require symbol descriptions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'vars-on-top': {
			description: 'Require `var` declarations be placed at the top of their containing scope',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'yoda': {
			description: 'Require or disallow "Yoda" conditions',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: {
							exceptRange: { type: 'boolean', default: false },
							onlyEquality: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'array-bracket-newline': {
			description: 'Enforce linebreaks after opening and before closing array brackets',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['always', 'never', 'consistent'] },
							{
								type: 'object',
								properties: {
									multiline: { type: 'boolean' },
									minItems: { type: ['integer', 'null'], minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'array-bracket-spacing': {
			description: 'Enforce consistent spacing inside array brackets',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: {
							singleValue: { type: 'boolean' },
							objectsInArrays: { type: 'boolean' },
							arraysInArrays: { type: 'boolean' },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'array-element-newline': {
			description: 'Enforce line breaks after each array element',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				definitions: {
					basicConfig: {
						oneOf: [
							{ enum: ['always', 'never', 'consistent'] },
							{
								type: 'object',
								properties: {
									multiline: { type: 'boolean' },
									minItems: { type: ['integer', 'null'], minimum: 0 },
								},
								additionalProperties: false,
							},
						],
					},
				},
				items: [
					{
						oneOf: [
							{ $ref: '#/definitions/basicConfig' },
							{
								type: 'object',
								properties: {
									ArrayExpression: { $ref: '#/definitions/basicConfig' },
									ArrayPattern: { $ref: '#/definitions/basicConfig' },
								},
								additionalProperties: false,
								minProperties: 1,
							},
						],
					},
				],
			},
		},
		'arrow-parens': {
			description: 'Require parentheses around arrow function arguments',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'as-needed'] },
					{
						type: 'object',
						properties: { requireForBlockBody: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'arrow-spacing': {
			description: 'Enforce consistent spacing before and after the arrow in arrow functions',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							before: { type: 'boolean', default: true },
							after: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'block-spacing': {
			description:
				'Disallow or enforce spaces inside of blocks after opening block and before closing block',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never'] }] },
		},
		'brace-style': {
			description: 'Enforce consistent brace style for blocks',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['1tbs', 'stroustrup', 'allman'] },
					{
						type: 'object',
						properties: { allowSingleLine: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'comma-dangle': {
			description: 'Require or disallow trailing commas',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				definitions: {
					value: { enum: ['always-multiline', 'always', 'never', 'only-multiline'] },
					valueWithIgnore: {
						enum: ['always-multiline', 'always', 'ignore', 'never', 'only-multiline'],
					},
				},
				type: 'array',
				items: [
					{
						oneOf: [
							{ $ref: '#/definitions/value' },
							{
								type: 'object',
								properties: {
									arrays: { $ref: '#/definitions/valueWithIgnore' },
									objects: { $ref: '#/definitions/valueWithIgnore' },
									imports: { $ref: '#/definitions/valueWithIgnore' },
									exports: { $ref: '#/definitions/valueWithIgnore' },
									functions: { $ref: '#/definitions/valueWithIgnore' },
								},
								additionalProperties: false,
							},
						],
					},
				],
				additionalItems: false,
			},
		},
		'comma-spacing': {
			description: 'Enforce consistent spacing before and after commas',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							before: { type: 'boolean', default: false },
							after: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'comma-style': {
			description: 'Enforce consistent comma style',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['first', 'last'] },
					{
						type: 'object',
						properties: {
							exceptions: { type: 'object', additionalProperties: { type: 'boolean' } },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'computed-property-spacing': {
			description: 'Enforce consistent spacing inside computed property brackets',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: { enforceForClassMembers: { type: 'boolean', default: true } },
						additionalProperties: false,
					},
				],
			},
		},
		'dot-location': {
			description: 'Enforce consistent newlines before and after dots',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['object', 'property'] }] },
		},
		'eol-last': {
			description: 'Require or disallow newline at the end of files',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never', 'unix', 'windows'] }] },
		},
		'func-call-spacing': {
			description: 'Require or disallow spacing between function identifiers and their invocations',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				anyOf: [
					{ type: 'array', items: [{ enum: ['never'] }], minItems: 0, maxItems: 1 },
					{
						type: 'array',
						items: [
							{ enum: ['always'] },
							{
								type: 'object',
								properties: { allowNewlines: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'function-call-argument-newline': {
			description: 'Enforce line breaks between arguments of a function call',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never', 'consistent'] }] },
		},
		'function-paren-newline': {
			description: 'Enforce consistent line breaks inside function parentheses',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['always', 'never', 'consistent', 'multiline', 'multiline-arguments'] },
							{
								type: 'object',
								properties: { minItems: { type: 'integer', minimum: 0 } },
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'generator-star-spacing': {
			description: 'Enforce consistent spacing around `*` operators in generator functions',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['before', 'after', 'both', 'neither'] },
							{
								type: 'object',
								properties: {
									before: { type: 'boolean' },
									after: { type: 'boolean' },
									named: {
										oneOf: [
											{ enum: ['before', 'after', 'both', 'neither'] },
											{
												type: 'object',
												properties: {
													before: { type: 'boolean' },
													after: { type: 'boolean' },
												},
												additionalProperties: false,
											},
										],
									},
									anonymous: {
										oneOf: [
											{ enum: ['before', 'after', 'both', 'neither'] },
											{
												type: 'object',
												properties: {
													before: { type: 'boolean' },
													after: { type: 'boolean' },
												},
												additionalProperties: false,
											},
										],
									},
									method: {
										oneOf: [
											{ enum: ['before', 'after', 'both', 'neither'] },
											{
												type: 'object',
												properties: {
													before: { type: 'boolean' },
													after: { type: 'boolean' },
												},
												additionalProperties: false,
											},
										],
									},
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'implicit-arrow-linebreak': {
			description: 'Enforce the location of arrow function bodies',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['beside', 'below'] }] },
		},
		'indent': {
			description: 'Enforce consistent indentation',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ oneOf: [{ enum: ['tab'] }, { type: 'integer', minimum: 0 }] },
					{
						type: 'object',
						properties: {
							SwitchCase: { type: 'integer', minimum: 0, default: 0 },
							VariableDeclarator: {
								oneOf: [
									{ oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
									{
										type: 'object',
										properties: {
											var: {
												oneOf: [
													{ type: 'integer', minimum: 0 },
													{ enum: ['first', 'off'] },
												],
											},
											let: {
												oneOf: [
													{ type: 'integer', minimum: 0 },
													{ enum: ['first', 'off'] },
												],
											},
											const: {
												oneOf: [
													{ type: 'integer', minimum: 0 },
													{ enum: ['first', 'off'] },
												],
											},
										},
										additionalProperties: false,
									},
								],
							},
							outerIIFEBody: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['off'] }] },
							MemberExpression: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['off'] }] },
							FunctionDeclaration: {
								type: 'object',
								properties: {
									parameters: {
										oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }],
									},
									body: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
							FunctionExpression: {
								type: 'object',
								properties: {
									parameters: {
										oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }],
									},
									body: { type: 'integer', minimum: 0 },
								},
								additionalProperties: false,
							},
							StaticBlock: {
								type: 'object',
								properties: { body: { type: 'integer', minimum: 0 } },
								additionalProperties: false,
							},
							CallExpression: {
								type: 'object',
								properties: {
									arguments: {
										oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }],
									},
								},
								additionalProperties: false,
							},
							ArrayExpression: {
								oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }],
							},
							ObjectExpression: {
								oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }],
							},
							ImportDeclaration: {
								oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }],
							},
							flatTernaryExpressions: { type: 'boolean', default: false },
							offsetTernaryExpressions: { type: 'boolean', default: false },
							ignoredNodes: {
								type: 'array',
								items: { type: 'string', not: { pattern: ':exit$' } },
							},
							ignoreComments: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'jsx-quotes': {
			description: 'Enforce the consistent use of either double or single quotes in JSX attributes',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['prefer-single', 'prefer-double'] }] },
		},
		'key-spacing': {
			description: 'Enforce consistent spacing between keys and values in object literal properties',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						anyOf: [
							{
								type: 'object',
								properties: {
									align: {
										anyOf: [
											{ enum: ['colon', 'value'] },
											{
												type: 'object',
												properties: {
													mode: { enum: ['strict', 'minimum'] },
													on: { enum: ['colon', 'value'] },
													beforeColon: { type: 'boolean' },
													afterColon: { type: 'boolean' },
												},
												additionalProperties: false,
											},
										],
									},
									mode: { enum: ['strict', 'minimum'] },
									beforeColon: { type: 'boolean' },
									afterColon: { type: 'boolean' },
								},
								additionalProperties: false,
							},
							{
								type: 'object',
								properties: {
									singleLine: {
										type: 'object',
										properties: {
											mode: { enum: ['strict', 'minimum'] },
											beforeColon: { type: 'boolean' },
											afterColon: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									multiLine: {
										type: 'object',
										properties: {
											align: {
												anyOf: [
													{ enum: ['colon', 'value'] },
													{
														type: 'object',
														properties: {
															mode: { enum: ['strict', 'minimum'] },
															on: { enum: ['colon', 'value'] },
															beforeColon: { type: 'boolean' },
															afterColon: { type: 'boolean' },
														},
														additionalProperties: false,
													},
												],
											},
											mode: { enum: ['strict', 'minimum'] },
											beforeColon: { type: 'boolean' },
											afterColon: { type: 'boolean' },
										},
										additionalProperties: false,
									},
								},
								additionalProperties: false,
							},
							{
								type: 'object',
								properties: {
									singleLine: {
										type: 'object',
										properties: {
											mode: { enum: ['strict', 'minimum'] },
											beforeColon: { type: 'boolean' },
											afterColon: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									multiLine: {
										type: 'object',
										properties: {
											mode: { enum: ['strict', 'minimum'] },
											beforeColon: { type: 'boolean' },
											afterColon: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									align: {
										type: 'object',
										properties: {
											mode: { enum: ['strict', 'minimum'] },
											on: { enum: ['colon', 'value'] },
											beforeColon: { type: 'boolean' },
											afterColon: { type: 'boolean' },
										},
										additionalProperties: false,
									},
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'keyword-spacing': {
			description: 'Enforce consistent spacing before and after keywords',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							before: { type: 'boolean', default: true },
							after: { type: 'boolean', default: true },
							overrides: {
								type: 'object',
								properties: {
									abstract: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									as: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									async: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									await: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									boolean: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									break: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									byte: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									case: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									catch: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									char: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									class: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									const: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									continue: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									debugger: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									default: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									delete: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									do: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									double: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									else: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									enum: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									export: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									extends: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									false: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									final: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									finally: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									float: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									for: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									from: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									function: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									get: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									goto: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									if: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									implements: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									import: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									in: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									instanceof: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									int: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									interface: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									let: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									long: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									native: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									new: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									null: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									of: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									package: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									private: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									protected: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									public: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									return: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									set: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									short: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									static: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									super: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									switch: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									synchronized: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									this: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									throw: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									throws: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									transient: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									true: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									try: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									typeof: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									var: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									void: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									volatile: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									while: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									with: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
									yield: {
										type: 'object',
										properties: {
											before: { type: 'boolean' },
											after: { type: 'boolean' },
										},
										additionalProperties: false,
									},
								},
								additionalProperties: false,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'line-comment-position': {
			description: 'Enforce position of line comments',
			hasAutofix: false,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['above', 'beside'] },
							{
								type: 'object',
								properties: {
									position: { enum: ['above', 'beside'] },
									ignorePattern: { type: 'string' },
									applyDefaultPatterns: { type: 'boolean' },
									applyDefaultIgnorePatterns: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'linebreak-style': {
			description: 'Enforce consistent linebreak style',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['unix', 'windows'] }] },
		},
		'lines-around-comment': {
			description: 'Require empty lines around comments',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							beforeBlockComment: { type: 'boolean', default: true },
							afterBlockComment: { type: 'boolean', default: false },
							beforeLineComment: { type: 'boolean', default: false },
							afterLineComment: { type: 'boolean', default: false },
							allowBlockStart: { type: 'boolean', default: false },
							allowBlockEnd: { type: 'boolean', default: false },
							allowClassStart: { type: 'boolean' },
							allowClassEnd: { type: 'boolean' },
							allowObjectStart: { type: 'boolean' },
							allowObjectEnd: { type: 'boolean' },
							allowArrayStart: { type: 'boolean' },
							allowArrayEnd: { type: 'boolean' },
							ignorePattern: { type: 'string' },
							applyDefaultIgnorePatterns: { type: 'boolean' },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'lines-between-class-members': {
			description: 'Require or disallow an empty line between class members',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: { exceptAfterSingleLine: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'max-len': {
			description: 'Enforce a maximum line length',
			hasAutofix: false,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						anyOf: [
							{
								type: 'object',
								properties: {
									code: { type: 'integer', minimum: 0 },
									comments: { type: 'integer', minimum: 0 },
									tabWidth: { type: 'integer', minimum: 0 },
									ignorePattern: { type: 'string' },
									ignoreComments: { type: 'boolean' },
									ignoreStrings: { type: 'boolean' },
									ignoreUrls: { type: 'boolean' },
									ignoreTemplateLiterals: { type: 'boolean' },
									ignoreRegExpLiterals: { type: 'boolean' },
									ignoreTrailingComments: { type: 'boolean' },
								},
								additionalProperties: false,
							},
							{ type: 'integer', minimum: 0 },
						],
					},
					{
						anyOf: [
							{
								type: 'object',
								properties: {
									code: { type: 'integer', minimum: 0 },
									comments: { type: 'integer', minimum: 0 },
									tabWidth: { type: 'integer', minimum: 0 },
									ignorePattern: { type: 'string' },
									ignoreComments: { type: 'boolean' },
									ignoreStrings: { type: 'boolean' },
									ignoreUrls: { type: 'boolean' },
									ignoreTemplateLiterals: { type: 'boolean' },
									ignoreRegExpLiterals: { type: 'boolean' },
									ignoreTrailingComments: { type: 'boolean' },
								},
								additionalProperties: false,
							},
							{ type: 'integer', minimum: 0 },
						],
					},
					{
						type: 'object',
						properties: {
							code: { type: 'integer', minimum: 0 },
							comments: { type: 'integer', minimum: 0 },
							tabWidth: { type: 'integer', minimum: 0 },
							ignorePattern: { type: 'string' },
							ignoreComments: { type: 'boolean' },
							ignoreStrings: { type: 'boolean' },
							ignoreUrls: { type: 'boolean' },
							ignoreTemplateLiterals: { type: 'boolean' },
							ignoreRegExpLiterals: { type: 'boolean' },
							ignoreTrailingComments: { type: 'boolean' },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'max-statements-per-line': {
			description: 'Enforce a maximum number of statements allowed per line',
			hasAutofix: false,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { max: { type: 'integer', minimum: 1, default: 1 } },
						additionalProperties: false,
					},
				],
			},
		},
		'multiline-ternary': {
			description: 'Enforce newlines between operands of ternary expressions',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'always-multiline', 'never'] }] },
		},
		'new-parens': {
			description: 'Enforce or disallow parentheses when invoking a constructor with no arguments',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				anyOf: [{ type: 'array', items: [{ enum: ['always', 'never'] }], minItems: 0, maxItems: 1 }],
			},
		},
		'newline-per-chained-call': {
			description: 'Require a newline after each call in a method chain',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							ignoreChainWithDepth: { type: 'integer', minimum: 1, maximum: 10, default: 2 },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-extra-parens': {
			description: 'Disallow unnecessary parentheses',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				anyOf: [
					{ type: 'array', items: [{ enum: ['functions'] }], minItems: 0, maxItems: 1 },
					{
						type: 'array',
						items: [
							{ enum: ['all'] },
							{
								type: 'object',
								properties: {
									conditionalAssign: { type: 'boolean' },
									nestedBinaryExpressions: { type: 'boolean' },
									returnAssign: { type: 'boolean' },
									ignoreJSX: { enum: ['none', 'all', 'single-line', 'multi-line'] },
									enforceForArrowConditionals: { type: 'boolean' },
									enforceForSequenceExpressions: { type: 'boolean' },
									enforceForNewInMemberExpressions: { type: 'boolean' },
									enforceForFunctionPrototypeMethods: { type: 'boolean' },
									allowParensAfterCommentPattern: { type: 'string' },
								},
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'no-mixed-spaces-and-tabs': {
			description: 'Disallow mixed spaces and tabs for indentation',
			hasAutofix: false,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['smart-tabs', true, false] }] },
		},
		'no-multi-spaces': {
			description: 'Disallow multiple spaces',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							exceptions: {
								type: 'object',
								patternProperties: { '^([A-Z][a-z]*)+$': { type: 'boolean' } },
								additionalProperties: false,
							},
							ignoreEOLComments: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-multiple-empty-lines': {
			description: 'Disallow multiple empty lines',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							max: { type: 'integer', minimum: 0 },
							maxEOF: { type: 'integer', minimum: 0 },
							maxBOF: { type: 'integer', minimum: 0 },
						},
						required: ['max'],
						additionalProperties: false,
					},
				],
			},
		},
		'no-tabs': {
			description: 'Disallow all tabs',
			hasAutofix: false,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { allowIndentationTabs: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'no-trailing-spaces': {
			description: 'Disallow trailing whitespace at the end of lines',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							skipBlankLines: { type: 'boolean', default: false },
							ignoreComments: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'no-whitespace-before-property': {
			description: 'Disallow whitespace before properties',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'nonblock-statement-body-position': {
			description: 'Enforce the location of single-line statements',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['beside', 'below', 'any'] },
					{
						properties: {
							overrides: {
								properties: {
									if: { enum: ['beside', 'below', 'any'] },
									else: { enum: ['beside', 'below', 'any'] },
									while: { enum: ['beside', 'below', 'any'] },
									do: { enum: ['beside', 'below', 'any'] },
									for: { enum: ['beside', 'below', 'any'] },
								},
								additionalProperties: false,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'object-curly-newline': {
			description: 'Enforce consistent line breaks after opening and before closing braces',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{
								oneOf: [
									{ enum: ['always', 'never'] },
									{
										type: 'object',
										properties: {
											multiline: { type: 'boolean' },
											minProperties: { type: 'integer', minimum: 0 },
											consistent: { type: 'boolean' },
										},
										additionalProperties: false,
										minProperties: 1,
									},
								],
							},
							{
								type: 'object',
								properties: {
									ObjectExpression: {
										oneOf: [
											{ enum: ['always', 'never'] },
											{
												type: 'object',
												properties: {
													multiline: { type: 'boolean' },
													minProperties: { type: 'integer', minimum: 0 },
													consistent: { type: 'boolean' },
												},
												additionalProperties: false,
												minProperties: 1,
											},
										],
									},
									ObjectPattern: {
										oneOf: [
											{ enum: ['always', 'never'] },
											{
												type: 'object',
												properties: {
													multiline: { type: 'boolean' },
													minProperties: { type: 'integer', minimum: 0 },
													consistent: { type: 'boolean' },
												},
												additionalProperties: false,
												minProperties: 1,
											},
										],
									},
									ImportDeclaration: {
										oneOf: [
											{ enum: ['always', 'never'] },
											{
												type: 'object',
												properties: {
													multiline: { type: 'boolean' },
													minProperties: { type: 'integer', minimum: 0 },
													consistent: { type: 'boolean' },
												},
												additionalProperties: false,
												minProperties: 1,
											},
										],
									},
									ExportDeclaration: {
										oneOf: [
											{ enum: ['always', 'never'] },
											{
												type: 'object',
												properties: {
													multiline: { type: 'boolean' },
													minProperties: { type: 'integer', minimum: 0 },
													consistent: { type: 'boolean' },
												},
												additionalProperties: false,
												minProperties: 1,
											},
										],
									},
								},
								additionalProperties: false,
								minProperties: 1,
							},
						],
					},
				],
			},
		},
		'object-curly-spacing': {
			description: 'Enforce consistent spacing inside braces',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: {
							arraysInObjects: { type: 'boolean' },
							objectsInObjects: { type: 'boolean' },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'object-property-newline': {
			description: 'Enforce placing object properties on separate lines',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							allowAllPropertiesOnSameLine: { type: 'boolean', default: false },
							allowMultiplePropertiesPerLine: { type: 'boolean', default: false },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'operator-linebreak': {
			description: 'Enforce consistent linebreak style for operators',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['after', 'before', 'none', null] },
					{
						type: 'object',
						properties: {
							overrides: {
								type: 'object',
								additionalProperties: { enum: ['after', 'before', 'none', 'ignore'] },
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'padded-blocks': {
			description: 'Require or disallow padding within blocks',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['always', 'never'] },
							{
								type: 'object',
								properties: {
									blocks: { enum: ['always', 'never'] },
									switches: { enum: ['always', 'never'] },
									classes: { enum: ['always', 'never'] },
								},
								additionalProperties: false,
								minProperties: 1,
							},
						],
					},
					{
						type: 'object',
						properties: { allowSingleLineBlocks: { type: 'boolean' } },
						additionalProperties: false,
					},
				],
			},
		},
		'padding-line-between-statements': {
			description: 'Require or disallow padding lines between statements',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				definitions: {
					paddingType: { enum: ['any', 'never', 'always'] },
					statementType: {
						anyOf: [
							{
								enum: [
									'*',
									'block-like',
									'cjs-export',
									'cjs-import',
									'directive',
									'expression',
									'iife',
									'multiline-block-like',
									'multiline-expression',
									'multiline-const',
									'multiline-let',
									'multiline-var',
									'singleline-const',
									'singleline-let',
									'singleline-var',
									'block',
									'empty',
									'function',
									'break',
									'case',
									'class',
									'const',
									'continue',
									'debugger',
									'default',
									'do',
									'export',
									'for',
									'if',
									'import',
									'let',
									'return',
									'switch',
									'throw',
									'try',
									'var',
									'while',
									'with',
								],
							},
							{
								type: 'array',
								items: {
									enum: [
										'*',
										'block-like',
										'cjs-export',
										'cjs-import',
										'directive',
										'expression',
										'iife',
										'multiline-block-like',
										'multiline-expression',
										'multiline-const',
										'multiline-let',
										'multiline-var',
										'singleline-const',
										'singleline-let',
										'singleline-var',
										'block',
										'empty',
										'function',
										'break',
										'case',
										'class',
										'const',
										'continue',
										'debugger',
										'default',
										'do',
										'export',
										'for',
										'if',
										'import',
										'let',
										'return',
										'switch',
										'throw',
										'try',
										'var',
										'while',
										'with',
									],
								},
								minItems: 1,
								uniqueItems: true,
							},
						],
					},
				},
				type: 'array',
				items: {
					type: 'object',
					properties: {
						blankLine: { $ref: '#/definitions/paddingType' },
						prev: { $ref: '#/definitions/statementType' },
						next: { $ref: '#/definitions/statementType' },
					},
					additionalProperties: false,
					required: ['blankLine', 'prev', 'next'],
				},
			},
		},
		'quotes': {
			description: 'Enforce the consistent use of either backticks, double, or single quotes',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['single', 'double', 'backtick'] },
					{
						anyOf: [
							{ enum: ['avoid-escape'] },
							{
								type: 'object',
								properties: {
									avoidEscape: { type: 'boolean' },
									allowTemplateLiterals: { type: 'boolean' },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'rest-spread-spacing': {
			description: 'Enforce spacing between rest and spread operators and their expressions',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never'] }] },
		},
		'semi': {
			description: 'Require or disallow semicolons instead of ASI',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				anyOf: [
					{
						type: 'array',
						items: [
							{ enum: ['never'] },
							{
								type: 'object',
								properties: {
									beforeStatementContinuationChars: { enum: ['always', 'any', 'never'] },
								},
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
					{
						type: 'array',
						items: [
							{ enum: ['always'] },
							{
								type: 'object',
								properties: { omitLastInOneLineBlock: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
				],
			},
		},
		'semi-spacing': {
			description: 'Enforce consistent spacing before and after semicolons',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							before: { type: 'boolean', default: false },
							after: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'semi-style': {
			description: 'Enforce location of semicolons',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['last', 'first'] }] },
		},
		'space-before-blocks': {
			description: 'Enforce consistent spacing before blocks',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['always', 'never'] },
							{
								type: 'object',
								properties: {
									keywords: { enum: ['always', 'never', 'off'] },
									functions: { enum: ['always', 'never', 'off'] },
									classes: { enum: ['always', 'never', 'off'] },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'space-before-function-paren': {
			description: 'Enforce consistent spacing before `function` definition opening parenthesis',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['always', 'never'] },
							{
								type: 'object',
								properties: {
									anonymous: { enum: ['always', 'never', 'ignore'] },
									named: { enum: ['always', 'never', 'ignore'] },
									asyncArrow: { enum: ['always', 'never', 'ignore'] },
								},
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'space-in-parens': {
			description: 'Enforce consistent spacing inside parentheses',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['always', 'never'] },
					{
						type: 'object',
						properties: {
							exceptions: {
								type: 'array',
								items: { enum: ['{}', '[]', '()', 'empty'] },
								uniqueItems: true,
							},
						},
						additionalProperties: false,
					},
				],
			},
		},
		'space-infix-ops': {
			description: 'Require spacing around infix operators',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: { int32Hint: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'space-unary-ops': {
			description: 'Enforce consistent spacing before or after unary operators',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							words: { type: 'boolean', default: true },
							nonwords: { type: 'boolean', default: false },
							overrides: { type: 'object', additionalProperties: { type: 'boolean' } },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'switch-colon-spacing': {
			description: 'Enforce spacing around colons of switch statements',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						type: 'object',
						properties: {
							before: { type: 'boolean', default: false },
							after: { type: 'boolean', default: true },
						},
						additionalProperties: false,
					},
				],
			},
		},
		'template-curly-spacing': {
			description: 'Require or disallow spacing around embedded expressions of template strings',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never'] }] },
		},
		'template-tag-spacing': {
			description: 'Require or disallow spacing between template tags and their literals',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never'] }] },
		},
		'unicode-bom': {
			description: 'Require or disallow Unicode byte order mark (BOM)',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: { type: 'array', items: [{ enum: ['always', 'never'] }] },
		},
		'wrap-iife': {
			description: 'Require parentheses around immediate `function` invocations',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{ enum: ['outside', 'inside', 'any'] },
					{
						type: 'object',
						properties: { functionPrototypeMethods: { type: 'boolean', default: false } },
						additionalProperties: false,
					},
				],
			},
		},
		'wrap-regex': {
			description: 'Require parenthesis around regex literals',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'yield-star-spacing': {
			description: 'Require or disallow spacing around the `*` in `yield*` expressions',
			hasAutofix: true,
			category: 'Layout And Formatting',
			configuration: {
				type: 'array',
				items: [
					{
						oneOf: [
							{ enum: ['before', 'after', 'both', 'neither'] },
							{
								type: 'object',
								properties: { before: { type: 'boolean' }, after: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
					},
				],
			},
		},
		'logical-assignment-operators': {
			description: 'Require or disallow logical assignment logical operator shorthand',
			hasAutofix: true,
			category: 'Suggestions',
			configuration: {
				type: 'array',
				oneOf: [
					{
						items: [
							{ const: 'always' },
							{
								type: 'object',
								properties: { enforceForIfStatements: { type: 'boolean' } },
								additionalProperties: false,
							},
						],
						minItems: 0,
						maxItems: 2,
					},
					{ items: [{ const: 'never' }], minItems: 1, maxItems: 1 },
				],
			},
		},
	},
};
