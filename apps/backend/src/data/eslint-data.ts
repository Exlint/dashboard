import type { ILibraryData } from '@exlint-dashboard/common';

export const eslintData: ILibraryData = {
	name: 'ESLint',
	author: 'Nicholas C. Zakas',
	description: 'Find and fix problems in your JavaScript code.',
	types: ['Linters'],
	categories: ['Code'],
	language: 'JavaScript',
	configuration: {
		root: {
			title: 'Root',
			description:
				'By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, place "root": true.',
			type: 'boolean',
		},
		extends: {
			title: 'Extends',
			description: 'The path to other config files or the package name of shareable configs',
			type: 'multi',
			options: ['eslint:recommended', 'eslint-all'],
		},
		env: {
			title: 'Env',
			description: 'An environment provides predefined global variables',
			type: 'object',
			properties: {
				'browser': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'node': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'commonjs': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'shared-node-browser': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es6': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2016': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2017': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2018': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2019': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2020': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2021': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'es2022': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'worker': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'amd': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'mocha': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'jasmine': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'jest': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'phantomjs': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'protractor': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'qunit': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'jquery': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'prototypejs': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'shelljs': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'meteor': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'mongo': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'applescript': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'nashorn': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'serviceworker': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'atomtest': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'embertest': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'webextensions': {
					title: null,
					description: null,
					type: 'boolean',
				},
				'greasemonkey': {
					title: null,
					description: null,
					type: 'boolean',
				},
			},
		},
		parserOptions: {
			title: 'Parser Options',
			description: 'ESLint allows you to specify the JavaScript language options you want to support.',
			type: 'object',
			properties: {
				ecmaVersion: {
					title: 'ECMA Version',
					description: 'The version of ECMAScript to support.',
					type: 'select',
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
					type: 'select',
					enum: ['script', 'module'],
				},
				allowReserved: {
					title: 'Allow Reserved',
					description: 'Allowing the use of reserved words as identifiers in ES3.',
					type: 'boolean',
				},
				ecmaFeatures: {
					title: 'ECMA Features',
					description: 'Nn object indicating which additional language features you’d like to use',
					type: 'object',
					properties: {
						globalReturn: {
							title: null,
							description: null,
							type: 'boolean',
						},
						jsx: {
							title: null,
							description: null,
							type: 'boolean',
						},
						impliedStrict: {
							title: null,
							description: null,
							type: 'boolean',
						},
					},
				},
			},
		},
		globals: {
			title: 'Globals',
			description:
				'An object specifying additional objects that should be added to the global scope during linting.',
			type: 'dynamic-object',
			propertySchema: {
				title: null,
				description: null,
				type: 'select',
				enum: [true, false, 'off', 'readable', 'writable', 'writeable'],
			},
		},
		ignorePatterns: {
			title: 'Ignore Patterns',
			description: 'You can tell ESLint to ignore specific files and directories.',
			type: 'multi',
			options: [],
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
	rules: {
		'array-callback-return': {
			description: 'Enforce `return` statements in callbacks of array methods',
			hasAutofix: false,
			category: 'Possible Problems',
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
		},
		'no-constructor-return': {
			description: 'Disallow returning value from constructor',
			hasAutofix: false,
			category: 'Possible Problems',
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
		},
		'no-invalid-regexp': {
			description: 'Disallow invalid regular expression strings in `RegExp` constructors',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'no-irregular-whitespace': {
			description: 'Disallow irregular whitespace',
			hasAutofix: false,
			category: 'Possible Problems',
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
		},
		'no-unsafe-optional-chaining': {
			description:
				'Disallow use of optional chaining in contexts where the `undefined` value is not allowed',
			hasAutofix: false,
			category: 'Possible Problems',
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
		},
		'no-use-before-define': {
			description: 'Disallow the use of variables before they are defined',
			hasAutofix: false,
			category: 'Possible Problems',
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
		},
		'use-isnan': {
			description: 'Require calls to `isNaN()` when checking for `NaN`',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'valid-typeof': {
			description: 'Enforce comparing `typeof` expressions against valid strings',
			hasAutofix: false,
			category: 'Possible Problems',
		},
		'accessor-pairs': {
			description: 'Enforce getter and setter pairs in objects and classes',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'arrow-body-style': {
			description: 'Require braces around arrow function bodies',
			hasAutofix: true,
			category: 'Suggestions',
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
		},
		'capitalized-comments': {
			description: 'Enforce or disallow capitalization of the first letter of a comment',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'class-methods-use-this': {
			description: 'Enforce that class methods utilize `this`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'complexity': {
			description: 'Enforce a maximum cyclomatic complexity allowed in a program',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'consistent-return': {
			description: 'Require `return` statements to either always or never specify values',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'consistent-this': {
			description: 'Enforce consistent naming when capturing the current execution context',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'curly': {
			description: 'Enforce consistent brace style for all control statements',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'default-case': {
			description: 'Require `default` cases in `switch` statements',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'eqeqeq': {
			description: 'Require the use of `===` and `!==`',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'func-name-matching': {
			description:
				'Require function names to match the name of the variable or property to which they are assigned',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'func-names': {
			description: 'Require or disallow named `function` expressions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'func-style': {
			description: 'Enforce the consistent use of either `function` declarations or expressions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'grouped-accessor-pairs': {
			description: 'Require grouped accessor pairs in object literals and classes',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'id-length': {
			description: 'Enforce minimum and maximum identifier lengths',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'id-match': {
			description: 'Require identifiers to match a specified regular expression',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'init-declarations': {
			description: 'Require or disallow initialization in variable declarations',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-classes-per-file': {
			description: 'Enforce a maximum number of classes per file',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-depth': {
			description: 'Enforce a maximum depth that blocks can be nested',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-lines': {
			description: 'Enforce a maximum number of lines per file',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-lines-per-function': {
			description: 'Enforce a maximum number of lines of code in a function',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-nested-callbacks': {
			description: 'Enforce a maximum depth that callbacks can be nested',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-params': {
			description: 'Enforce a maximum number of parameters in function definitions',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'max-statements': {
			description: 'Enforce a maximum number of statements allowed in function blocks',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'multiline-comment-style': {
			description: 'Enforce a particular style for multiline comments',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'new-cap': {
			description: 'Require constructor names to begin with a capital letter',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-console': {
			description: 'Disallow the use of `console`',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-empty': {
			description: 'Disallow empty block statements',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-empty-function': {
			description: 'Disallow empty functions',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-extend-native': {
			description: 'Disallow extending native types',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-implicit-coercion': {
			description: 'Disallow shorthand type conversions',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-implicit-globals': {
			description: 'Disallow declarations in the global scope',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-invalid-this': {
			description: 'Disallow use of `this` in contexts where the value of `this` is `undefined`',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-mixed-operators': {
			description: 'Disallow mixed binary operators',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-multi-assign': {
			description: 'Disallow use of chained assignment expressions',
			hasAutofix: false,
			category: 'Suggestions',
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
		'no-octal': {
			description: 'Disallow octal literals',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-octal-escape': {
			description: 'Disallow octal escape sequences in string literals',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-param-reassign': {
			description: 'Disallow reassigning `function` parameters',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-plusplus': {
			description: 'Disallow the unary operators `++` and `--`',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-restricted-globals': {
			description: 'Disallow specified global variables',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-restricted-imports': {
			description: 'Disallow specified modules when loaded by `import`',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-restricted-properties': {
			description: 'Disallow certain properties on certain objects',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-restricted-syntax': {
			description: 'Disallow specified syntax',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-return-assign': {
			description: 'Disallow assignment operators in `return` statements',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-shadow': {
			description:
				'Disallow variable declarations from shadowing variables declared in the outer scope',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-unneeded-ternary': {
			description: 'Disallow ternary operators when simpler alternatives exist',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'no-unused-expressions': {
			description: 'Disallow unused expressions',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'no-warning-comments': {
			description: 'Disallow specified warning terms in comments',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'no-with': {
			description: 'Disallow `with` statements',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'object-shorthand': {
			description: 'Require or disallow method and property shorthand syntax for object literals',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'one-var': {
			description: 'Enforce variables to be declared either together or separately in functions',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'one-var-declaration-per-line': {
			description: 'Require or disallow newlines around variable declarations',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'operator-assignment': {
			description: 'Require or disallow assignment operator shorthand where possible',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-arrow-callback': {
			description: 'Require using arrow functions for callbacks',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-const': {
			description:
				'Require `const` declarations for variables that are never reassigned after declared',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'prefer-destructuring': {
			description: 'Require destructuring from arrays and/or objects',
			hasAutofix: true,
			category: 'Suggestions',
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
		},
		'prefer-regex-literals': {
			description: 'Disallow use of the `RegExp` constructor in favor of regular expression literals',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'radix': {
			description: 'Enforce the consistent use of the radix argument when using `parseInt()`',
			hasAutofix: false,
			category: 'Suggestions',
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
		},
		'sort-keys': {
			description: 'Require object keys to be sorted',
			hasAutofix: false,
			category: 'Suggestions',
		},
		'sort-vars': {
			description: 'Require variables within the same declaration block to be sorted',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'spaced-comment': {
			description: 'Enforce consistent spacing after the `//` or `/*` in a comment',
			hasAutofix: true,
			category: 'Suggestions',
		},
		'strict': {
			description: 'Require or disallow strict mode directives',
			hasAutofix: true,
			category: 'Suggestions',
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
		},
		'array-bracket-newline': {
			description: 'Enforce linebreaks after opening and before closing array brackets',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'array-bracket-spacing': {
			description: 'Enforce consistent spacing inside array brackets',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'array-element-newline': {
			description: 'Enforce line breaks after each array element',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'arrow-parens': {
			description: 'Require parentheses around arrow function arguments',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'arrow-spacing': {
			description: 'Enforce consistent spacing before and after the arrow in arrow functions',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'block-spacing': {
			description:
				'Disallow or enforce spaces inside of blocks after opening block and before closing block',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'brace-style': {
			description: 'Enforce consistent brace style for blocks',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'comma-dangle': {
			description: 'Require or disallow trailing commas',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'comma-spacing': {
			description: 'Enforce consistent spacing before and after commas',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'comma-style': {
			description: 'Enforce consistent comma style',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'computed-property-spacing': {
			description: 'Enforce consistent spacing inside computed property brackets',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'dot-location': {
			description: 'Enforce consistent newlines before and after dots',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'eol-last': {
			description: 'Require or disallow newline at the end of files',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'func-call-spacing': {
			description: 'Require or disallow spacing between function identifiers and their invocations',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'function-call-argument-newline': {
			description: 'Enforce line breaks between arguments of a function call',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'function-paren-newline': {
			description: 'Enforce consistent line breaks inside function parentheses',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'generator-star-spacing': {
			description: 'Enforce consistent spacing around `*` operators in generator functions',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'implicit-arrow-linebreak': {
			description: 'Enforce the location of arrow function bodies',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'indent': {
			description: 'Enforce consistent indentation',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'jsx-quotes': {
			description: 'Enforce the consistent use of either double or single quotes in JSX attributes',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'key-spacing': {
			description: 'Enforce consistent spacing between keys and values in object literal properties',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'keyword-spacing': {
			description: 'Enforce consistent spacing before and after keywords',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'line-comment-position': {
			description: 'Enforce position of line comments',
			hasAutofix: false,
			category: 'Layout And Formatting',
		},
		'linebreak-style': {
			description: 'Enforce consistent linebreak style',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'lines-around-comment': {
			description: 'Require empty lines around comments',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'lines-between-class-members': {
			description: 'Require or disallow an empty line between class members',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'max-len': {
			description: 'Enforce a maximum line length',
			hasAutofix: false,
			category: 'Layout And Formatting',
		},
		'max-statements-per-line': {
			description: 'Enforce a maximum number of statements allowed per line',
			hasAutofix: false,
			category: 'Layout And Formatting',
		},
		'multiline-ternary': {
			description: 'Enforce newlines between operands of ternary expressions',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'new-parens': {
			description: 'Enforce or disallow parentheses when invoking a constructor with no arguments',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'newline-per-chained-call': {
			description: 'Require a newline after each call in a method chain',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'no-extra-parens': {
			description: 'Disallow unnecessary parentheses',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'no-mixed-spaces-and-tabs': {
			description: 'Disallow mixed spaces and tabs for indentation',
			hasAutofix: false,
			category: 'Layout And Formatting',
		},
		'no-multi-spaces': {
			description: 'Disallow multiple spaces',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'no-multiple-empty-lines': {
			description: 'Disallow multiple empty lines',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'no-tabs': {
			description: 'Disallow all tabs',
			hasAutofix: false,
			category: 'Layout And Formatting',
		},
		'no-trailing-spaces': {
			description: 'Disallow trailing whitespace at the end of lines',
			hasAutofix: true,
			category: 'Layout And Formatting',
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
		},
		'object-curly-newline': {
			description: 'Enforce consistent line breaks after opening and before closing braces',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'object-curly-spacing': {
			description: 'Enforce consistent spacing inside braces',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'object-property-newline': {
			description: 'Enforce placing object properties on separate lines',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'operator-linebreak': {
			description: 'Enforce consistent linebreak style for operators',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'padded-blocks': {
			description: 'Require or disallow padding within blocks',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'padding-line-between-statements': {
			description: 'Require or disallow padding lines between statements',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'quotes': {
			description: 'Enforce the consistent use of either backticks, double, or single quotes',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'rest-spread-spacing': {
			description: 'Enforce spacing between rest and spread operators and their expressions',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'semi': {
			description: 'Require or disallow semicolons instead of ASI',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'semi-spacing': {
			description: 'Enforce consistent spacing before and after semicolons',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'semi-style': {
			description: 'Enforce location of semicolons',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'space-before-blocks': {
			description: 'Enforce consistent spacing before blocks',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'space-before-function-paren': {
			description: 'Enforce consistent spacing before `function` definition opening parenthesis',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'space-in-parens': {
			description: 'Enforce consistent spacing inside parentheses',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'space-infix-ops': {
			description: 'Require spacing around infix operators',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'space-unary-ops': {
			description: 'Enforce consistent spacing before or after unary operators',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'switch-colon-spacing': {
			description: 'Enforce spacing around colons of switch statements',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'template-curly-spacing': {
			description: 'Require or disallow spacing around embedded expressions of template strings',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'template-tag-spacing': {
			description: 'Require or disallow spacing between template tags and their literals',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'unicode-bom': {
			description: 'Require or disallow Unicode byte order mark (BOM)',
			hasAutofix: true,
			category: 'Layout And Formatting',
		},
		'wrap-iife': {
			description: 'Require parentheses around immediate `function` invocations',
			hasAutofix: true,
			category: 'Layout And Formatting',
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
		},
	},
};
