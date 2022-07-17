/* eslint-disable max-lines */
export const librariesList = {
	ESLint: {
		logo: '../assets/images/eslintLogo.png',
		title: 'ESLint',
		madeBy: 'Nicholas C. Zakas',
		description: ' Code linting is a type of static analysis that is frequently',
		type: 'type',
		category: 'category',
		rulesList: {
			possibleProblems: {
				'array-callback-return': 'enforce `return` statements in callbacks of array methods',
				'constructor-super': 'require `super()` calls in constructors',

				'for-direction':
					'enforce "for" loop update clause moving the counter in the right direction.',
				'getter-return': 'enforce `return` statements in getters',
				'no-async-promise-executor': 'disallow using an async function as a Promise executor',
				'no-await-in-loop': 'disallow `await` inside of loops',
				'no-class-assign': 'disallow reassigning class members',
				'no-compare-neg-zero': 'disallow comparing against -0',
				'no-cond-assign': 'disallow assignment operators in conditional expressions',
				'no-const-assign': 'disallow reassigning `const` variables',

				'no-constant-binary-expression':
					"disallow expressions where the operation doesn't affect the value",
				'no-constant-condition': 'disallow constant expressions in conditions',
				'no-constructor-return': 'disallow returning value from constructor',
				'no-control-regex': 'disallow control characters in regular expressions',
				'no-debugger': 'disallow the use of `debugger`',
				'no-dupe-args': 'disallow duplicate arguments in `function` definitions',
				'no-dupe-class-members': 'disallow duplicate class members',
				'no-dupe-else-if': 'disallow duplicate conditions in if-else-if chains',
				'no-dupe-keys': 'disallow duplicate keys in object literals',
				'no-duplicate-case': 'disallow duplicate case labels',
				'no-duplicate-imports': 'disallow duplicate module imports',
				'no-empty-character-class': 'disallow empty character classes in regular expressions',
				'no-empty-pattern': 'disallow empty destructuring patterns',
				'no-ex-assign': 'disallow reassigning exceptions in `catch` clauses',
				'no-fallthrough': 'disallow fallthrough of `case` statements',
				'no-func-assign': 'disallow reassigning `function` declarations',
				'no-import-assign': 'disallow assigning to imported bindings',
				'no-inner-declarations': 'disallow variable or `function` declarations in nested blocks',
				'no-invalid-regexp': 'disallow invalid regular expression strings in `RegExp` constructors',
				'no-irregular-whitespace': 'disallow irregular whitespace',
				'no-loss-of-precision': 'disallow literal numbers that lose precision',

				'no-misleading-character-class':
					'disallow characters which are made with multiple code points in character class syntax',
				'no-new-symbol': 'disallow `new` operators with the `Symbol` object',
				'no-obj-calls': 'disallow calling global object properties as functions',
				'no-promise-executor-return': 'disallow returning values from Promise executor functions',

				'no-prototype-builtins':
					'disallow calling some `Object.prototype` methods directly on objects',
				'no-self-assign': 'disallow assignments where both sides are exactly the same',
				'no-self-compare': 'disallow comparisons where both sides are exactly the same',
				'no-setter-return': 'disallow returning values from setters',
				'no-sparse-arrays': 'disallow sparse arrays',

				'no-template-curly-in-string':
					'disallow template literal placeholder syntax in regular strings',
				'no-this-before-super': 'disallow `this`/`super` before calling `super()` in constructors',

				'no-undef':
					'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
				'no-unexpected-multiline': 'disallow confusing multiline expressions',
				'no-unmodified-loop-condition': 'disallow unmodified loop conditions',

				'no-unreachable':
					'disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
				'no-unreachable-loop': 'disallow loops with a body that allows only one iteration',
				'no-unsafe-finally': 'disallow control flow statements in `finally` blocks',
				'no-unsafe-negation': 'disallow negating the left operand of relational operators',

				'no-unsafe-optional-chaining':
					'disallow use of optional chaining in contexts where the `undefined` value is not allowed',
				'no-unused-private-class-members': 'disallow unused private class members',
				'no-unused-vars': 'disallow unused variables',
				'no-use-before-define': 'disallow the use of variables before they are defined',
				'no-useless-backreference': 'disallow useless backreferences in regular expressions',

				'require-atomic-updates':
					'disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
				'use-isnan': 'require calls to `isNaN()` when checking for `NaN`',
				'valid-typeof': 'enforce comparing `typeof` expressions against valid strings',
			},

			suggestions: {
				'accessor-pairs': 'enforce getter and setter pairs in objects and classes',
				'arrow-body-style': 'require braces around arrow function bodies',
				'block-scoped-var': 'enforce the use of variables within the scope they are defined',
				'camelcase': 'enforce camelcase naming convention',
				'capitalized-comments': 'enforce or disallow capitalization of the first letter of a comment',
				'class-methods-use-this': 'enforce that class methods utilize `this`',
				'complexity': 'enforce a maximum cyclomatic complexity allowed in a program',
				'consistent-return': 'require `return` statements to either always or never specify values',
				'consistent-this': 'enforce consistent naming when capturing the current execution context',
				'curly': 'enforce consistent brace style for all control statements',
				'default-case': 'require `default` cases in `switch` statements',
				'default-case-last': 'enforce default clauses in switch statements to be last',
				'default-param-last': 'enforce default parameters to be last',
				'dot-notation': 'enforce dot notation whenever possible',
				'eqeqeq': 'require the use of `===` and `!==`',

				'func-name-matching':
					'require function names to match the name of the variable or property to which they are assigned',
				'func-names': 'require or disallow named `function` expressions',
				'func-style': 'enforce the consistent use of either `function` declarations or expressions',
				'grouped-accessor-pairs': 'require grouped accessor pairs in object literals and classes',
				'guard-for-in': 'require `for-in` loops to include an `if` statement',
				'id-denylist': 'disallow specified identifiers',
				'id-length': 'enforce minimum and maximum identifier lengths',
				'id-match': 'require identifiers to match a specified regular expression',
				'init-declarations': 'require or disallow initialization in variable declarations',
				'max-classes-per-file': 'enforce a maximum number of classes per file',
				'max-depth': 'enforce a maximum depth that blocks can be nested',
				'max-lines': 'enforce a maximum number of lines per file',
				'max-lines-per-function': 'enforce a maximum number of lines of code in a function',
				'max-nested-callbacks': 'enforce a maximum depth that callbacks can be nested',
				'max-params': 'enforce a maximum number of parameters in function definitions',
				'max-statements': 'enforce a maximum number of statements allowed in function blocks',
				'multiline-comment-style': 'enforce a particular style for multiline comments',
				'new-cap': 'require constructor names to begin with a capital letter',
				'no-alert': 'disallow the use of `alert`, `confirm`, and `prompt`',
				'no-array-constructor': 'disallow `Array` constructors',
				'no-bitwise': 'disallow bitwise operators',
				'no-caller': 'disallow the use of `arguments.caller` or `arguments.callee`',
				'no-case-declarations': 'disallow lexical declarations in case clauses',

				'no-confusing-arrow':
					'disallow arrow functions where they could be confused with comparisons',
				'no-console': 'disallow the use of `console`',
				'no-continue': 'disallow `continue` statements',
				'no-delete-var': 'disallow deleting variables',

				'no-div-regex':
					'disallow division operators explicitly at the beginning of regular expressions',
				'no-else-return': 'disallow `else` blocks after `return` statements in `if` statements',
				'no-empty': 'disallow empty block statements',
				'no-empty-function': 'disallow empty functions',
				'no-eq-null': 'disallow `null` comparisons without type-checking operators',
				'no-eval': 'disallow the use of `eval()`',
				'no-extend-native': 'disallow extending native types',
				'no-extra-bind': 'disallow unnecessary calls to `.bind()`',
				'no-extra-boolean-cast': 'disallow unnecessary boolean casts',
				'no-extra-label': 'disallow unnecessary labels',
				'no-extra-semi': 'disallow unnecessary semicolons',
				'no-floating-decimal': 'disallow leading or trailing decimal points in numeric literals',
				'no-global-assign': 'disallow assignments to native objects or read-only global variables',
				'no-implicit-coercion': 'disallow shorthand type conversions',
				'no-implicit-globals': 'disallow declarations in the global scope',
				'no-implied-eval': 'disallow the use of `eval()`-like methods',
				'no-inline-comments': 'disallow inline comments after code',

				'no-invalid-this':
					'disallow use of `this` in contexts where the value of `this` is `undefined`',
				'no-iterator': 'disallow the use of the `__iterator__` property',
				'no-label-var': 'disallow labels that share a name with a variable',
				'no-labels': 'disallow labeled statements',
				'no-lone-blocks': 'disallow unnecessary nested blocks',
				'no-lonely-if': 'disallow `if` statements as the only statement in `else` blocks',

				'no-loop-func':
					'disallow function declarations that contain unsafe references inside loop statements',
				'no-magic-numbers': 'disallow magic numbers',
				'no-mixed-operators': 'disallow mixed binary operators',
				'no-multi-assign': 'disallow use of chained assignment expressions',
				'no-multi-str': 'disallow multiline strings',
				'no-negated-condition': 'disallow negated conditions',
				'no-nested-ternary': 'disallow nested ternary expressions',
				'no-new': 'disallow `new` operators outside of assignments or comparisons',
				'no-new-func': 'disallow `new` operators with the `Function` object',
				'no-new-object': 'disallow `Object` constructors',

				'no-new-wrappers':
					'disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
				'no-nonoctal-decimal-escape': 'disallow `\\8` and `\\9` escape sequences in string literals',
				'no-octal': 'disallow octal literals',
				'no-octal-escape': 'disallow octal escape sequences in string literals',
				'no-param-reassign': 'disallow reassigning `function` parameters',
				'no-plusplus': 'disallow the unary operators `++` and `--`',
				'no-proto': 'disallow the use of the `__proto__` property',
				'no-redeclare': 'disallow variable redeclaration',
				'no-regex-spaces': 'disallow multiple spaces in regular expressions',
				'no-restricted-exports': 'disallow specified names in exports',
				'no-restricted-globals': 'disallow specified global variables',
				'no-restricted-imports': 'disallow specified modules when loaded by `import`',
				'no-restricted-properties': 'disallow certain properties on certain objects',
				'no-restricted-syntax': 'disallow specified syntax',
				'no-return-assign': 'disallow assignment operators in `return` statements',
				'no-return-await': 'disallow unnecessary `return await`',
				'no-script-url': 'disallow `javascript:` urls',
				'no-sequences': 'disallow comma operators',

				'no-shadow':
					'disallow variable declarations from shadowing variables declared in the outer scope',
				'no-shadow-restricted-names': 'disallow identifiers from shadowing restricted names',
				'no-ternary': 'disallow ternary operators',
				'no-throw-literal': 'disallow throwing literals as exceptions',
				'no-undef-init': 'disallow initializing variables to `undefined`',
				'no-undefined': 'disallow the use of `undefined` as an identifier',
				'no-underscore-dangle': 'disallow dangling underscores in identifiers',
				'no-unneeded-ternary': 'disallow ternary operators when simpler alternatives exist',
				'no-unused-expressions': 'disallow unused expressions',
				'no-unused-labels': 'disallow unused labels',
				'no-useless-call': 'disallow unnecessary calls to `.call()` and `.apply()`',
				'no-useless-catch': 'disallow unnecessary `catch` clauses',

				'no-useless-computed-key':
					'disallow unnecessary computed property keys in objects and classes',
				'no-useless-concat': 'disallow unnecessary concatenation of literals or template literals',
				'no-useless-constructor': 'disallow unnecessary constructors',
				'no-useless-escape': 'disallow unnecessary escape characters',

				'no-useless-rename':
					'disallow renaming import, export, and destructured assignments to the same name',
				'no-useless-return': 'disallow redundant return statements',
				'no-var': 'require `let` or `const` instead of `var`',
				'no-void': 'disallow `void` operators',
				'no-warning-comments': 'disallow specified warning terms in comments',
				'no-with': 'disallow `with` statements',

				'object-shorthand':
					'require or disallow method and property shorthand syntax for object literals',
				'one-var': 'enforce variables to be declared either together or separately in functions',
				'one-var-declaration-per-line': 'require or disallow newlines around variable declarations',
				'operator-assignment': 'require or disallow assignment operator shorthand where possible',
				'prefer-arrow-callback': 'require using arrow functions for callbacks',

				'prefer-const':
					'require `const` declarations for variables that are never reassigned after declared',
				'prefer-destructuring': 'require destructuring from arrays and/or objects',

				'prefer-exponentiation-operator':
					'disallow the use of `Math.pow` in favor of the `**` operator',
				'prefer-named-capture-group': 'enforce using named capture group in regular expression',

				'prefer-numeric-literals':
					'disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',

				'prefer-object-has-own':
					'disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`',

				'prefer-object-spread':
					'disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
				'prefer-promise-reject-errors': 'require using Error objects as Promise rejection reasons',

				'prefer-regex-literals':
					'disallow use of the `RegExp` constructor in favor of regular expression literals',
				'prefer-rest-params': 'require rest parameters instead of `arguments`',
				'prefer-spread': 'require spread operators instead of `.apply()`',
				'prefer-template': 'require template literals instead of string concatenation',
				'quote-props': 'require quotes around object literal property names',
				'radix': 'enforce the consistent use of the radix argument when using `parseInt()`',
				'require-await': 'disallow async functions which have no `await` expression',
				'require-unicode-regexp': 'enforce the use of `u` flag on RegExp',
				'require-yield': 'require generator functions to contain `yield`',
				'sort-imports': 'enforce sorted import declarations within modules',
				'sort-keys': 'require object keys to be sorted',
				'sort-vars': 'require variables within the same declaration block to be sorted',
				'spaced-comment': 'enforce consistent spacing after the `//` or `/*` in a comment',
				'strict': 'require or disallow strict mode directives',
				'symbol-description': 'require symbol descriptions',
				'vars-on-top': 'require `var` declarations be placed at the top of their containing scope',
				'yoda': 'require or disallow "Yoda" conditions',
			},
			layoutAndFormatting: {
				'array-bracket-newline': 'enforce linebreaks after opening and before closing array brackets',
				'array-bracket-spacing': 'enforce consistent spacing inside array brackets',
				'array-element-newline': 'enforce line breaks after each array element',
				'arrow-parens': 'require parentheses around arrow function arguments',
				'arrow-spacing': 'enforce consistent spacing before and after the arrow in arrow functions',

				'block-spacing':
					'disallow or enforce spaces inside of blocks after opening block and before closing block',
				'brace-style': 'enforce consistent brace style for blocks',
				'comma-dangle': 'require or disallow trailing commas',
				'comma-spacing': 'enforce consistent spacing before and after commas',
				'comma-style': 'enforce consistent comma style',
				'computed-property-spacing': 'enforce consistent spacing inside computed property brackets',
				'dot-location': 'enforce consistent newlines before and after dots',
				'eol-last': 'require or disallow newline at the end of files',

				'func-call-spacing':
					'require or disallow spacing between function identifiers and their invocations',
				'function-call-argument-newline': 'enforce line breaks between arguments of a function call',
				'function-paren-newline': 'enforce consistent line breaks inside function parentheses',

				'generator-star-spacing':
					'enforce consistent spacing around `*` operators in generator functions',
				'implicit-arrow-linebreak': 'enforce the location of arrow function bodies',
				'indent': 'enforce consistent indentation',

				'jsx-quotes':
					'enforce the consistent use of either double or single quotes in JSX attributes',

				'key-spacing':
					'enforce consistent spacing between keys and values in object literal properties',
				'keyword-spacing': 'enforce consistent spacing before and after keywords',
				'line-comment-position': 'enforce position of line comments',
				'linebreak-style': 'enforce consistent linebreak style',
				'lines-around-comment': 'require empty lines around comments',
				'lines-between-class-members': 'require or disallow an empty line between class members',
				'max-len': 'enforce a maximum line length',
				'max-statements-per-line': 'enforce a maximum number of statements allowed per line',
				'multiline-ternary': 'enforce newlines between operands of ternary expressions',
				'new-parens': 'enforce or disallow parentheses when invoking a constructor with no arguments',
				'newline-per-chained-call': 'require a newline after each call in a method chain',
				'no-extra-parens': 'disallow unnecessary parentheses',
				'no-mixed-spaces-and-tabs': 'disallow mixed spaces and tabs for indentation',
				'no-multi-spaces': 'disallow multiple spaces',
				'no-multiple-empty-lines': 'disallow multiple empty lines',
				'no-tabs': 'disallow all tabs',
				'no-trailing-spaces': 'disallow trailing whitespace at the end of lines',
				'no-whitespace-before-property': 'disallow whitespace before properties',
				'nonblock-statement-body-position': 'enforce the location of single-line statements',

				'object-curly-newline':
					'enforce consistent line breaks after opening and before closing braces',
				'object-curly-spacing': 'enforce consistent spacing inside braces',
				'object-property-newline': 'enforce placing object properties on separate lines',
				'operator-linebreak': 'enforce consistent linebreak style for operators',
				'padded-blocks': 'require or disallow padding within blocks',
				'padding-line-between-statements': 'require or disallow padding lines between statements',
				'quotes': 'enforce the consistent use of either backticks, double, or single quotes',

				'rest-spread-spacing':
					'enforce spacing between rest and spread operators and their expressions',
				'semi': 'require or disallow semicolons instead of ASI',
				'semi-spacing': 'enforce consistent spacing before and after semicolons',
				'semi-style': 'enforce location of semicolons',
				'space-before-blocks': 'enforce consistent spacing before blocks',

				'space-before-function-paren':
					'enforce consistent spacing before `function` definition opening parenthesis',
				'space-in-parens': 'enforce consistent spacing inside parentheses',
				'space-infix-ops': 'require spacing around infix operators',
				'space-unary-ops': 'enforce consistent spacing before or after unary operators',
				'switch-colon-spacing': 'enforce spacing around colons of switch statements',

				'template-curly-spacing':
					'require or disallow spacing around embedded expressions of template strings',

				'template-tag-spacing':
					'require or disallow spacing between template tags and their literals',
				'unicode-bom': 'require or disallow Unicode byte order mark (BOM)',
				'wrap-iife': 'require parentheses around immediate `function` invocations',
				'wrap-regex': 'require parenthesis around regex literals',
				'yield-star-spacing': 'require or disallow spacing around the `*` in `yield*` expressions',
			},
		},
	},
	Stylelint: {
		logo: '../assets/images/eslintLogo.png',
		title: 'Stylelint',
		madeBy: 'Nicholas C. Zakas',
		description: ' Code linting is a type of static analysis that is frequently',
		type: 'type',
		category: 'category',
		rulesList: {
			yazif: {
				'color-no-invalid-hex': 'Disallow invalid hex colors.',
				'font-family-no-duplicate-names': 'Disallow duplicate font family names.',
				'font-family-no-missing-generic-family-keyword':
					'Disallow missing generic families in lists of font family names.',
				'named-grid-areas-no-invalid': 'Disallow invalid named grid areas.',
				'function-calc-no-unspaced-operator': 'Disallow an unspaced operator within calc functions.',
				'function-linear-gradient-no-nonstandard-direction':
					'Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.',
				'function-no-unknown': 'Disallow unknown functions.',
				'string-no-newline': 'Disallow (unescaped) newlines in strings.',
				'unit-no-unknown': 'Disallow unknown units.',
				'custom-property-no-missing-var-function':
					'Disallow missing var function for custom properties.',
				'property-no-unknown': 'Disallow unknown properties.',
				'keyframe-declaration-no-important': 'Disallow !important within keyframe declarations.',
				'keyframe-block-no-duplicate-selectors':
					'Disallow duplicate selectors within keyframe blocks.',
				'declaration-block-no-duplicate-custom-properties':
					'Disallow duplicate custom properties within declaration blocks.',
				'declaration-block-no-duplicate-properties':
					'Disallow duplicate properties within declaration blocks.',
				'declaration-block-no-shorthand-property-overrides':
					'Disallow shorthand properties that override related longhand properties.',
				'block-no-empty': 'Disallow empty blocks.',
				'selector-pseudo-class-no-unknown': 'Disallow unknown pseudo-class selectors.',
				'selector-pseudo-element-no-unknown': 'Disallow unknown pseudo-element selectors.',
				'selector-type-no-unknown': 'Disallow unknown type selectors.',
				'media-feature-name-no-unknown': 'Disallow unknown media feature names.',
				'at-rule-no-unknown': 'Disallow unknown at-rules.',
				'comment-no-empty': 'Disallow empty comments.',
				'no-descending-specificity':
					'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.',
				'no-duplicate-at-import-rules': 'Disallow duplicate @import rules within a stylesheet.',
				'no-duplicate-selectors': 'Disallow duplicate selectors within a stylesheet.',
				'no-empty-source': 'Disallow empty sources.',
				'no-invalid-double-slash-comments':
					'Disallow double-slash comments (//...) which are not supported by CSS.',
				'no-invalid-position-at-import-rule':
					'Disallow invalid position @import rules within a stylesheet.',
				'alpha-value-notation':
					'Specify percentage or number notation for alpha-values (Autofixable).',
				'hue-degree-notation': 'Specify number or angle notation for degree hues (Autofixable).',
				'color-function-notation':
					'Specify modern or legacy notation for applicable color-functions (Autofixable).',
				'color-hex-alpha': 'Require or disallow alpha channel for hex colors.',
				'color-hex-length': 'Specify short or long notation for hex colors (Autofixable).',
				'color-named': 'Require (where possible) or disallow named colors.',
				'color-no-hex': 'Disallow hex colors.',
				'length-zero-no-unit': 'Disallow units for zero lengths (Autofixable).',
				'font-family-name-quotes':
					'Specify whether or not quotation marks should be used around font family names (Autofixable).',
				'font-weight-notation':
					'Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.',
				'function-allowed-list': 'Specify a list of allowed functions.',
			},
			cheddar: {
				'function-disallowed-list': 'Specify a list of disallowed functions.',
				'function-url-no-scheme-relative': 'Disallow scheme-relative urls.',
				'function-url-quotes': 'Require or disallow quotes for urls.',
				'function-url-scheme-allowed-list': 'Specify a list of allowed URL schemes.',
				'function-url-scheme-disallowed-list': 'Specify a list of disallowed URL schemes.',
				'keyframes-name-pattern': 'Specify a pattern for keyframe names.',
				'number-max-precision': 'Limit the number of decimal places allowed in numbers.',
				'time-min-milliseconds': 'Specify the minimum number of milliseconds for time values.',
				'unit-allowed-list': 'Specify a list of allowed units.',
				'unit-disallowed-list': 'Specify a list of disallowed units.',
				'shorthand-property-no-redundant-values':
					'Disallow redundant values in shorthand properties (Autofixable).',
				'value-no-vendor-prefix': 'Disallow vendor prefixes for values (Autofixable).',
				'custom-property-pattern': 'Specify a pattern for custom properties.',
				'property-allowed-list': 'Specify a list of allowed properties.',
				'property-disallowed-list': 'Specify a list of disallowed properties.',
				'property-no-vendor-prefix': 'Disallow vendor prefixes for properties (Autofixable).',
				'declaration-no-important': 'Disallow !important within declarations.',
				'declaration-property-max-values':
					'Limit the number of values for a list of properties within declarations.',
				'declaration-property-unit-allowed-list':
					'Specify a list of allowed property and unit pairs within declarations.',
				'declaration-property-unit-disallowed-list':
					'Specify a list of disallowed property and unit pairs within declarations.',
				'declaration-property-value-allowed-list':
					'Specify a list of allowed property and value pairs within declarations.',
				'declaration-property-value-disallowed-list':
					'Specify a list of disallowed property and value pairs within declarations.',
				'declaration-block-no-redundant-longhand-properties':
					'Disallow longhand properties that can be combined into one shorthand property.',
				'declaration-block-single-line-max-declarations':
					'Limit the number of declarations within a single-line declaration block.',
				'selector-attribute-name-disallowed-list': 'Specify a list of disallowed attribute names.',
				'selector-attribute-operator-allowed-list': 'Specify a list of allowed attribute operators.',
				'selector-attribute-operator-disallowed-list':
					'Specify a list of disallowed attribute operators.',
				'selector-attribute-quotes': 'Require or disallow quotes for attribute values.',
				'selector-class-pattern': 'Specify a pattern for class selectors.',
				'selector-combinator-allowed-list': 'Specify a list of allowed combinators.',
				'selector-combinator-disallowed-list': 'Specify a list of disallowed combinators.',
				'selector-disallowed-list': 'Specify a list of disallowed selectors.',
				'selector-id-pattern': 'Specify a pattern for ID selectors.',
				'selector-max-attribute': 'Limit the number of attribute selectors in a selector.',
				'selector-max-class': 'Limit the number of classes in a selector.',
				'selector-max-combinators': 'Limit the number of combinators in a selector.',
				'selector-max-compound-selectors': 'Limit the number of compound selectors in a selector.',
				'selector-max-id': 'Limit the number of ID selectors in a selector.',
				'selector-max-pseudo-class': 'Limit the number of pseudo-classes in a selector.',
				'selector-max-specificity': 'Limit the specificity of selectors.',
				'selector-max-type': 'Limit the number of type in a selector.',
				'selector-max-universal': 'Limit the number of universal selectors in a selector.',
				'selector-nested-pattern':
					'Specify a pattern for the selectors of rules nested within rules.',
				'selector-no-qualifying-type': 'Disallow qualifying a selector by type.',
				'selector-no-vendor-prefix': 'Disallow vendor prefixes for selectors (Autofixable).',
				'selector-not-notation':
					'Specify simple or complex notation for :not() pseudo-classes (Autofixable).',
				'selector-pseudo-class-allowed-list': 'Specify a list of allowed pseudo-class selectors.',
				'selector-pseudo-class-disallowed-list':
					'Specify a list of disallowed pseudo-class selectors.',
				'selector-pseudo-element-allowed-list': 'Specify a list of allowed pseudo-element selectors.',
				'selector-pseudo-element-colon-notation':
					'Specify single or double colon notation for applicable pseudo-elements (Autofixable).',
				'selector-pseudo-element-disallowed-list':
					'Specify a list of disallowed pseudo-element selectors.',
				'rule-selector-property-disallowed-list':
					'Specify a list of disallowed properties for selectors within rules.',
				'media-feature-name-allowed-list': 'Specify a list of allowed media feature names.',
				'media-feature-name-disallowed-list': 'Specify a list of disallowed media feature names.',
				'media-feature-name-no-vendor-prefix':
					'Disallow vendor prefixes for media feature names (Autofixable).',
				'media-feature-name-value-allowed-list':
					'Specify a list of allowed media feature name and value pairs.',
				'custom-media-pattern': 'Specify a pattern for custom media query names.',
				'at-rule-allowed-list': 'Specify a list of allowed at-rules.',
				'at-rule-disallowed-list': 'Specify a list of disallowed at-rules.',
				'at-rule-no-vendor-prefix': 'Disallow vendor prefixes for at-rules (Autofixable).',
				'at-rule-property-required-list': 'Specify a list of required properties for an at-rule.',
				'comment-pattern': 'Specify a pattern for comments.',
				'comment-word-disallowed-list': 'Specify a list of disallowed words within comments.',
				'max-nesting-depth': 'Limit the depth of nesting.',
				'no-irregular-whitespace': 'Disallow irregular whitespace.',
				'no-unknown-animations': 'Disallow unknown animations.',
				'unicode-bom': 'Require or disallow Unicode BOM.',
				'value-keyword-case': 'Specify lowercase or uppercase for keywords values (Autofixable).',
				'function-name-case': 'Specify lowercase or uppercase for function names (Autofixable).',
				'custom-property-empty-line-before':
					'Require or disallow an empty line before custom properties (Autofixable).',
				'selector-type-case': 'Specify lowercase or uppercase for type selectors (Autofixable).',
				'rule-empty-line-before': 'Require or disallow an empty line before rules (Autofixable).',
				'at-rule-empty-line-before':
					'Require or disallow an empty line before at-rules (Autofixable).',
				'comment-empty-line-before':
					'Require or disallow an empty line before comments (Autofixable).',
				'comment-whitespace-inside':
					'Require or disallow whitespace on the inside of comment markers (Autofixable).',
				'color-hex-case': 'Specify lowercase or uppercase for hex colors (Autofixable).',
				'function-comma-newline-after':
					'Require a newline or disallow whitespace after the commas of functions (Autofixable).',
				'function-comma-newline-before':
					'Require a newline or disallow whitespace before the commas of functions (Autofixable).',
				'function-comma-space-after':
					'Require a single space or disallow whitespace after the commas of functions (Autofixable).',
				'function-comma-space-before':
					'Require a single space or disallow whitespace before the commas of functions (Autofixable).',
				'function-max-empty-lines':
					'Limit the number of adjacent empty lines within functions (Autofixable).',
				'function-parentheses-newline-inside':
					'Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
				'function-parentheses-space-inside':
					'Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
				'function-whitespace-after': 'Require or disallow whitespace after functions (Autofixable).',
				'number-leading-zero':
					'Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).',
				'number-no-trailing-zeros': 'Disallow trailing zeros in numbers (Autofixable).',
				'string-quotes': 'Specify single or double quotes around strings (Autofixable).',
				'unit-case': 'Specify lowercase or uppercase for units (Autofixable).',
				'value-list-comma-newline-after':
					'Require a newline or disallow whitespace after the commas of value lists (Autofixable).',
				'value-list-comma-newline-before':
					'Require a newline or disallow whitespace before the commas of value lists.',
				'value-list-comma-space-after':
					'Require a single space or disallow whitespace after the commas of value lists (Autofixable).',
				'value-list-comma-space-before':
					'Require a single space or disallow whitespace before the commas of value lists (Autofixable).',
				'value-list-max-empty-lines':
					'Limit the number of adjacent empty lines within value lists (Autofixable).',
				'property-case': 'Specify lowercase or uppercase for properties (Autofixable).',
				'declaration-bang-space-after':
					'Require a single space or disallow whitespace after the bang of declarations (Autofixable).',
				'declaration-bang-space-before':
					'Require a single space or disallow whitespace before the bang of declarations (Autofixable).',
				'declaration-colon-newline-after':
					'Require a newline or disallow whitespace after the colon of declarations (Autofixable).',
				'declaration-colon-space-after':
					'Require a single space or disallow whitespace after the colon of declarations (Autofixable).',
				'declaration-colon-space-before':
					'Require a single space or disallow whitespace before the colon of declarations (Autofixable).',
				'declaration-empty-line-before':
					'Require or disallow an empty line before declarations (Autofixable).',
				'declaration-block-semicolon-newline-after':
					'Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
				'declaration-block-semicolon-newline-before':
					'Require a newline or disallow whitespace before the semicolons of declaration blocks.',
				'declaration-block-semicolon-space-after':
					'Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
				'declaration-block-semicolon-space-before':
					'Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).',
				'declaration-block-trailing-semicolon':
					'Require or disallow a trailing semicolon within declaration blocks (Autofixable).',
				'block-closing-brace-empty-line-before':
					'Require or disallow an empty line before the closing brace of blocks (Autofixable).',
				'block-closing-brace-newline-after':
					'Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).',
				'block-closing-brace-newline-before':
					'Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).',
				'block-closing-brace-space-after':
					'Require a single space or disallow whitespace after the closing brace of blocks.',
				'block-closing-brace-space-before':
					'Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).',
				'block-opening-brace-newline-after':
					'Require a newline after the opening brace of blocks (Autofixable).',
				'block-opening-brace-newline-before':
					'Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).',
				'block-opening-brace-space-after':
					'Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).',
				'block-opening-brace-space-before':
					'Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).',
				'selector-attribute-brackets-space-inside':
					'Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).',
				'selector-attribute-operator-space-after':
					'Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).',
				'selector-attribute-operator-space-before':
					'Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).',
				'selector-combinator-space-after':
					'Require a single space or disallow whitespace after the combinators of selectors (Autofixable).',
				'selector-combinator-space-before':
					'Require a single space or disallow whitespace before the combinators of selectors (Autofixable).',
				'selector-descendant-combinator-no-non-space':
					'Disallow non-space characters for descendant combinators of selectors (Autofixable).',
				'selector-max-empty-lines':
					'Limit the number of adjacent empty lines within selectors (Autofixable).',
				'selector-pseudo-class-case':
					'Specify lowercase or uppercase for pseudo-class selectors (Autofixable).',
				'selector-pseudo-class-parentheses-space-inside':
					'Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).',
				'selector-pseudo-element-case':
					'Specify lowercase or uppercase for pseudo-element selectors (Autofixable).',
				'selector-list-comma-newline-after':
					'Require a newline or disallow whitespace after the commas of selector lists (Autofixable).',
				'selector-list-comma-newline-before':
					'Require a newline or disallow whitespace before the commas of selector lists (Autofixable).',
				'selector-list-comma-space-after':
					'Require a single space or disallow whitespace after the commas of selector lists (Autofixable).',
				'selector-list-comma-space-before':
					'Require a single space or disallow whitespace before the commas of selector lists (Autofixable).',
				'media-feature-colon-space-after':
					'Require a single space or disallow whitespace after the colon in media features (Autofixable).',
				'media-feature-colon-space-before':
					'Require a single space or disallow whitespace before the colon in media features (Autofixable).',
				'media-feature-name-case':
					'Specify lowercase or uppercase for media feature names (Autofixable).',
				'media-feature-parentheses-space-inside':
					'Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).',
				'media-feature-range-operator-space-after':
					'Require a single space or disallow whitespace after the range operator in media features (Autofixable).',
				'media-feature-range-operator-space-before':
					'Require a single space or disallow whitespace before the range operator in media features (Autofixable).',
				'media-query-list-comma-newline-after':
					'Require a newline or disallow whitespace after the commas of media query lists (Autofixable).',
				'media-query-list-comma-newline-before':
					'Require a newline or disallow whitespace before the commas of media query lists.',
				'media-query-list-comma-space-after':
					'Require a single space or disallow whitespace after the commas of media query lists (Autofixable).',
				'media-query-list-comma-space-before':
					'Require a single space or disallow whitespace before the commas of media query lists (Autofixable).',
				'at-rule-name-case': 'Specify lowercase or uppercase for at-rules names (Autofixable).',
				'at-rule-name-newline-after': 'Require a newline after at-rule names.',
				'at-rule-name-space-after': 'Require a single space after at-rule names (Autofixable).',
				'at-rule-semicolon-newline-after':
					'Require a newline after the semicolon of at-rules (Autofixable).',
				'at-rule-semicolon-space-before':
					'Require a single space or disallow whitespace before the semicolons of at-rules.',
				'indentation': 'Specify indentation (Autofixable).',
				'linebreaks': 'Specify unix or windows linebreaks (Autofixable).',
				'max-empty-lines': 'Limit the number of adjacent empty lines (Autofixable).',
				'max-line-length': 'Limit the length of a line.',
				'no-eol-whitespace': 'Disallow end-of-line whitespace (Autofixable).',
				'no-missing-end-of-source-newline': 'Disallow missing end-of-source newlines (Autofixable).',
				'no-empty-first-line': 'Disallow empty first lines (Autofixable).',
				'no-extra-semicolons': 'Disallow extra semicolons (Autofixable).',
			},
		},
	},
	Yazif: {
		logo: '../assets/images/eslintLogo.png',
		title: 'ESLint',
		madeBy: 'Nicholas C. Zakas',
		description: ' Code linting is a type of static analysis that is frequently',
		type: 'type',
		category: 'category',
		rulesList: {
			//from index 0 to index 83 catagory- Possible Problems
			//from index 84 to index 150 catagory- suggestions
			//from index 150 to index 211 caragory - Layout & Formatting
			'array-callback-return': 'enforce `return` statements in callbacks of array methods',
			'constructor-super': 'require `super()` calls in constructors',

			'for-direction': 'enforce "for" loop update clause moving the counter in the right direction.',
			'getter-return': 'enforce `return` statements in getters',
			'no-async-promise-executor': 'disallow using an async function as a Promise executor',
			'no-await-in-loop': 'disallow `await` inside of loops',
			'no-class-assign': 'disallow reassigning class members',
			'no-compare-neg-zero': 'disallow comparing against -0',
			'no-cond-assign': 'disallow assignment operators in conditional expressions',
			'no-const-assign': 'disallow reassigning `const` variables',

			'no-constant-binary-expression':
				"disallow expressions where the operation doesn't affect the value",
			'no-constant-condition': 'disallow constant expressions in conditions',
			'no-constructor-return': 'disallow returning value from constructor',
			'no-control-regex': 'disallow control characters in regular expressions',
			'no-debugger': 'disallow the use of `debugger`',
			'no-dupe-args': 'disallow duplicate arguments in `function` definitions',
			'no-dupe-class-members': 'disallow duplicate class members',
			'no-dupe-else-if': 'disallow duplicate conditions in if-else-if chains',
			'no-dupe-keys': 'disallow duplicate keys in object literals',
			'no-duplicate-case': 'disallow duplicate case labels',
			'no-duplicate-imports': 'disallow duplicate module imports',
			'no-empty-character-class': 'disallow empty character classes in regular expressions',
			'no-empty-pattern': 'disallow empty destructuring patterns',
			'no-ex-assign': 'disallow reassigning exceptions in `catch` clauses',
			'no-fallthrough': 'disallow fallthrough of `case` statements',
			'no-func-assign': 'disallow reassigning `function` declarations',
			'no-import-assign': 'disallow assigning to imported bindings',
			'no-inner-declarations': 'disallow variable or `function` declarations in nested blocks',
			'no-invalid-regexp': 'disallow invalid regular expression strings in `RegExp` constructors',
			'no-irregular-whitespace': 'disallow irregular whitespace',
			'no-loss-of-precision': 'disallow literal numbers that lose precision',

			'no-misleading-character-class':
				'disallow characters which are made with multiple code points in character class syntax',
			'no-new-symbol': 'disallow `new` operators with the `Symbol` object',
			'no-obj-calls': 'disallow calling global object properties as functions',
			'no-promise-executor-return': 'disallow returning values from Promise executor functions',

			'no-prototype-builtins': 'disallow calling some `Object.prototype` methods directly on objects',
			'no-self-assign': 'disallow assignments where both sides are exactly the same',
			'no-self-compare': 'disallow comparisons where both sides are exactly the same',
			'no-setter-return': 'disallow returning values from setters',
			'no-sparse-arrays': 'disallow sparse arrays',

			'no-template-curly-in-string': 'disallow template literal placeholder syntax in regular strings',
			'no-this-before-super': 'disallow `this`/`super` before calling `super()` in constructors',

			'no-undef': 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
			'no-unexpected-multiline': 'disallow confusing multiline expressions',
			'no-unmodified-loop-condition': 'disallow unmodified loop conditions',

			'no-unreachable':
				'disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
			'no-unreachable-loop': 'disallow loops with a body that allows only one iteration',
			'no-unsafe-finally': 'disallow control flow statements in `finally` blocks',
			'no-unsafe-negation': 'disallow negating the left operand of relational operators',

			'no-unsafe-optional-chaining':
				'disallow use of optional chaining in contexts where the `undefined` value is not allowed',
			'no-unused-private-class-members': 'disallow unused private class members',
			'no-unused-vars': 'disallow unused variables',
			'no-use-before-define': 'disallow the use of variables before they are defined',
			'no-useless-backreference': 'disallow useless backreferences in regular expressions',

			'require-atomic-updates':
				'disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
			'use-isnan': 'require calls to `isNaN()` when checking for `NaN`',
			'valid-typeof': 'enforce comparing `typeof` expressions against valid strings',
			//-----
			'accessor-pairs': 'enforce getter and setter pairs in objects and classes',
			'arrow-body-style': 'require braces around arrow function bodies',
			'block-scoped-var': 'enforce the use of variables within the scope they are defined',
			'camelcase': 'enforce camelcase naming convention',
			'capitalized-comments': 'enforce or disallow capitalization of the first letter of a comment',
			'class-methods-use-this': 'enforce that class methods utilize `this`',
			'complexity': 'enforce a maximum cyclomatic complexity allowed in a program',
			'consistent-return': 'require `return` statements to either always or never specify values',
			'consistent-this': 'enforce consistent naming when capturing the current execution context',
			'curly': 'enforce consistent brace style for all control statements',
			'default-case': 'require `default` cases in `switch` statements',
			'default-case-last': 'enforce default clauses in switch statements to be last',
			'default-param-last': 'enforce default parameters to be last',
			'dot-notation': 'enforce dot notation whenever possible',
			'eqeqeq': 'require the use of `===` and `!==`',

			'func-name-matching':
				'require function names to match the name of the variable or property to which they are assigned',
			'func-names': 'require or disallow named `function` expressions',
			'func-style': 'enforce the consistent use of either `function` declarations or expressions',
			'grouped-accessor-pairs': 'require grouped accessor pairs in object literals and classes',
			'guard-for-in': 'require `for-in` loops to include an `if` statement',
			'id-denylist': 'disallow specified identifiers',
			'id-length': 'enforce minimum and maximum identifier lengths',
			'id-match': 'require identifiers to match a specified regular expression',
			'init-declarations': 'require or disallow initialization in variable declarations',
			'max-classes-per-file': 'enforce a maximum number of classes per file',
			'max-depth': 'enforce a maximum depth that blocks can be nested',
			'max-lines': 'enforce a maximum number of lines per file',
			'max-lines-per-function': 'enforce a maximum number of lines of code in a function',
			'max-nested-callbacks': 'enforce a maximum depth that callbacks can be nested',
			'max-params': 'enforce a maximum number of parameters in function definitions',
			'max-statements': 'enforce a maximum number of statements allowed in function blocks',
			'multiline-comment-style': 'enforce a particular style for multiline comments',
			'new-cap': 'require constructor names to begin with a capital letter',
			'no-alert': 'disallow the use of `alert`, `confirm`, and `prompt`',
			'no-array-constructor': 'disallow `Array` constructors',
			'no-bitwise': 'disallow bitwise operators',
			'no-caller': 'disallow the use of `arguments.caller` or `arguments.callee`',
			'no-case-declarations': 'disallow lexical declarations in case clauses',

			'no-confusing-arrow': 'disallow arrow functions where they could be confused with comparisons',
			'no-console': 'disallow the use of `console`',
			'no-continue': 'disallow `continue` statements',
			'no-delete-var': 'disallow deleting variables',

			'no-div-regex': 'disallow division operators explicitly at the beginning of regular expressions',
			'no-else-return': 'disallow `else` blocks after `return` statements in `if` statements',
			'no-empty': 'disallow empty block statements',
			'no-empty-function': 'disallow empty functions',
			'no-eq-null': 'disallow `null` comparisons without type-checking operators',
			'no-eval': 'disallow the use of `eval()`',
			'no-extend-native': 'disallow extending native types',
			'no-extra-bind': 'disallow unnecessary calls to `.bind()`',
			'no-extra-boolean-cast': 'disallow unnecessary boolean casts',
			'no-extra-label': 'disallow unnecessary labels',
			'no-extra-semi': 'disallow unnecessary semicolons',
			'no-floating-decimal': 'disallow leading or trailing decimal points in numeric literals',
			'no-global-assign': 'disallow assignments to native objects or read-only global variables',
			'no-implicit-coercion': 'disallow shorthand type conversions',
			'no-implicit-globals': 'disallow declarations in the global scope',
			'no-implied-eval': 'disallow the use of `eval()`-like methods',
			'no-inline-comments': 'disallow inline comments after code',

			'no-invalid-this': 'disallow use of `this` in contexts where the value of `this` is `undefined`',
			'no-iterator': 'disallow the use of the `__iterator__` property',
			'no-label-var': 'disallow labels that share a name with a variable',
			'no-labels': 'disallow labeled statements',
			'no-lone-blocks': 'disallow unnecessary nested blocks',
			'no-lonely-if': 'disallow `if` statements as the only statement in `else` blocks',

			'no-loop-func':
				'disallow function declarations that contain unsafe references inside loop statements',
			'no-magic-numbers': 'disallow magic numbers',
			'no-mixed-operators': 'disallow mixed binary operators',
			'no-multi-assign': 'disallow use of chained assignment expressions',
			'no-multi-str': 'disallow multiline strings',
			'no-negated-condition': 'disallow negated conditions',
			'no-nested-ternary': 'disallow nested ternary expressions',
			'no-new': 'disallow `new` operators outside of assignments or comparisons',
			'no-new-func': 'disallow `new` operators with the `Function` object',
			'no-new-object': 'disallow `Object` constructors',

			'no-new-wrappers': 'disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
			'no-nonoctal-decimal-escape': 'disallow `\\8` and `\\9` escape sequences in string literals',
			'no-octal': 'disallow octal literals',
			'no-octal-escape': 'disallow octal escape sequences in string literals',
			'no-param-reassign': 'disallow reassigning `function` parameters',
			'no-plusplus': 'disallow the unary operators `++` and `--`',
			'no-proto': 'disallow the use of the `__proto__` property',
			'no-redeclare': 'disallow variable redeclaration',
			'no-regex-spaces': 'disallow multiple spaces in regular expressions',
			'no-restricted-exports': 'disallow specified names in exports',
			'no-restricted-globals': 'disallow specified global variables',
			'no-restricted-imports': 'disallow specified modules when loaded by `import`',
			'no-restricted-properties': 'disallow certain properties on certain objects',
			'no-restricted-syntax': 'disallow specified syntax',
			'no-return-assign': 'disallow assignment operators in `return` statements',
			'no-return-await': 'disallow unnecessary `return await`',
			'no-script-url': 'disallow `javascript:` urls',
			'no-sequences': 'disallow comma operators',

			'no-shadow':
				'disallow variable declarations from shadowing variables declared in the outer scope',
			'no-shadow-restricted-names': 'disallow identifiers from shadowing restricted names',
			'no-ternary': 'disallow ternary operators',
			'no-throw-literal': 'disallow throwing literals as exceptions',
			'no-undef-init': 'disallow initializing variables to `undefined`',
			'no-undefined': 'disallow the use of `undefined` as an identifier',
			'no-underscore-dangle': 'disallow dangling underscores in identifiers',
			'no-unneeded-ternary': 'disallow ternary operators when simpler alternatives exist',
			'no-unused-expressions': 'disallow unused expressions',
			'no-unused-labels': 'disallow unused labels',
			'no-useless-call': 'disallow unnecessary calls to `.call()` and `.apply()`',
			'no-useless-catch': 'disallow unnecessary `catch` clauses',

			'no-useless-computed-key': 'disallow unnecessary computed property keys in objects and classes',
			'no-useless-concat': 'disallow unnecessary concatenation of literals or template literals',
			'no-useless-constructor': 'disallow unnecessary constructors',
			'no-useless-escape': 'disallow unnecessary escape characters',

			'no-useless-rename':
				'disallow renaming import, export, and destructured assignments to the same name',
			'no-useless-return': 'disallow redundant return statements',
			'no-var': 'require `let` or `const` instead of `var`',
			'no-void': 'disallow `void` operators',
			'no-warning-comments': 'disallow specified warning terms in comments',
			'no-with': 'disallow `with` statements',

			'object-shorthand':
				'require or disallow method and property shorthand syntax for object literals',
			'one-var': 'enforce variables to be declared either together or separately in functions',
			'one-var-declaration-per-line': 'require or disallow newlines around variable declarations',
			'operator-assignment': 'require or disallow assignment operator shorthand where possible',
			'prefer-arrow-callback': 'require using arrow functions for callbacks',

			'prefer-const':
				'require `const` declarations for variables that are never reassigned after declared',
			'prefer-destructuring': 'require destructuring from arrays and/or objects',

			'prefer-exponentiation-operator': 'disallow the use of `Math.pow` in favor of the `**` operator',
			'prefer-named-capture-group': 'enforce using named capture group in regular expression',

			'prefer-numeric-literals':
				'disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',

			'prefer-object-has-own':
				'disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`',

			'prefer-object-spread':
				'disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
			'prefer-promise-reject-errors': 'require using Error objects as Promise rejection reasons',

			'prefer-regex-literals':
				'disallow use of the `RegExp` constructor in favor of regular expression literals',
			'prefer-rest-params': 'require rest parameters instead of `arguments`',
			'prefer-spread': 'require spread operators instead of `.apply()`',
			'prefer-template': 'require template literals instead of string concatenation',
			'quote-props': 'require quotes around object literal property names',
			'radix': 'enforce the consistent use of the radix argument when using `parseInt()`',
			'require-await': 'disallow async functions which have no `await` expression',
			'require-unicode-regexp': 'enforce the use of `u` flag on RegExp',
			'require-yield': 'require generator functions to contain `yield`',
			'sort-imports': 'enforce sorted import declarations within modules',
			'sort-keys': 'require object keys to be sorted',
			'sort-vars': 'require variables within the same declaration block to be sorted',
			'spaced-comment': 'enforce consistent spacing after the `//` or `/*` in a comment',
			'strict': 'require or disallow strict mode directives',
			'symbol-description': 'require symbol descriptions',
			'vars-on-top': 'require `var` declarations be placed at the top of their containing scope',
			'yoda': 'require or disallow "Yoda" conditions',
			//---------------------------------------------------------------------------------------------
			'array-bracket-newline': 'enforce linebreaks after opening and before closing array brackets',
			'array-bracket-spacing': 'enforce consistent spacing inside array brackets',
			'array-element-newline': 'enforce line breaks after each array element',
			'arrow-parens': 'require parentheses around arrow function arguments',
			'arrow-spacing': 'enforce consistent spacing before and after the arrow in arrow functions',

			'block-spacing':
				'disallow or enforce spaces inside of blocks after opening block and before closing block',
			'brace-style': 'enforce consistent brace style for blocks',
			'comma-dangle': 'require or disallow trailing commas',
			'comma-spacing': 'enforce consistent spacing before and after commas',
			'comma-style': 'enforce consistent comma style',
			'computed-property-spacing': 'enforce consistent spacing inside computed property brackets',
			'dot-location': 'enforce consistent newlines before and after dots',
			'eol-last': 'require or disallow newline at the end of files',

			'func-call-spacing':
				'require or disallow spacing between function identifiers and their invocations',
			'function-call-argument-newline': 'enforce line breaks between arguments of a function call',
			'function-paren-newline': 'enforce consistent line breaks inside function parentheses',

			'generator-star-spacing':
				'enforce consistent spacing around `*` operators in generator functions',
			'implicit-arrow-linebreak': 'enforce the location of arrow function bodies',
			'indent': 'enforce consistent indentation',

			'jsx-quotes': 'enforce the consistent use of either double or single quotes in JSX attributes',

			'key-spacing': 'enforce consistent spacing between keys and values in object literal properties',
			'keyword-spacing': 'enforce consistent spacing before and after keywords',
			'line-comment-position': 'enforce position of line comments',
			'linebreak-style': 'enforce consistent linebreak style',
			'lines-around-comment': 'require empty lines around comments',
			'lines-between-class-members': 'require or disallow an empty line between class members',
			'max-len': 'enforce a maximum line length',
			'max-statements-per-line': 'enforce a maximum number of statements allowed per line',
			'multiline-ternary': 'enforce newlines between operands of ternary expressions',
			'new-parens': 'enforce or disallow parentheses when invoking a constructor with no arguments',
			'newline-per-chained-call': 'require a newline after each call in a method chain',
			'no-extra-parens': 'disallow unnecessary parentheses',
			'no-mixed-spaces-and-tabs': 'disallow mixed spaces and tabs for indentation',
			'no-multi-spaces': 'disallow multiple spaces',
			'no-multiple-empty-lines': 'disallow multiple empty lines',
			'no-tabs': 'disallow all tabs',
			'no-trailing-spaces': 'disallow trailing whitespace at the end of lines',
			'no-whitespace-before-property': 'disallow whitespace before properties',
			'nonblock-statement-body-position': 'enforce the location of single-line statements',

			'object-curly-newline': 'enforce consistent line breaks after opening and before closing braces',
			'object-curly-spacing': 'enforce consistent spacing inside braces',
			'object-property-newline': 'enforce placing object properties on separate lines',
			'operator-linebreak': 'enforce consistent linebreak style for operators',
			'padded-blocks': 'require or disallow padding within blocks',
			'padding-line-between-statements': 'require or disallow padding lines between statements',
			'quotes': 'enforce the consistent use of either backticks, double, or single quotes',

			'rest-spread-spacing': 'enforce spacing between rest and spread operators and their expressions',
			'semi': 'require or disallow semicolons instead of ASI',
			'semi-spacing': 'enforce consistent spacing before and after semicolons',
			'semi-style': 'enforce location of semicolons',
			'space-before-blocks': 'enforce consistent spacing before blocks',

			'space-before-function-paren':
				'enforce consistent spacing before `function` definition opening parenthesis',
			'space-in-parens': 'enforce consistent spacing inside parentheses',
			'space-infix-ops': 'require spacing around infix operators',
			'space-unary-ops': 'enforce consistent spacing before or after unary operators',
			'switch-colon-spacing': 'enforce spacing around colons of switch statements',

			'template-curly-spacing':
				'require or disallow spacing around embedded expressions of template strings',

			'template-tag-spacing': 'require or disallow spacing between template tags and their literals',
			'unicode-bom': 'require or disallow Unicode byte order mark (BOM)',
			'wrap-iife': 'require parentheses around immediate `function` invocations',
			'wrap-regex': 'require parenthesis around regex literals',
			'yield-star-spacing': 'require or disallow spacing around the `*` in `yield*` expressions',
		},
	},
};
