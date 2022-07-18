/* eslint-disable max-lines */

export const ESLint = {
	logo: '../assets/images/eslintLogo.png',
	title: 'ESLint',
	madeBy: 'Nicholas C. Zakas',
	description: 'Code linting is a type of static analysis that is frequently',
	type: 'type',
	category: 'category',
	rulesList: {
		possibleProblems: {
			'array-callback-return': {
				rule: 'Enforce `return` statements in callbacks of array methods',
				fix: false,
			},
			'constructor-super': {
				rule: 'Require `super()` calls in constructors',
				fix: false,
			},
			'for-direction': {
				rule: 'Enforce "for" loop update clause moving the counter in the right direction',
				fix: false,
			},
			'getter-return': {
				rule: 'Enforce `return` statements in getters',
				fix: false,
			},
			'no-async-promise-executor': {
				rule: 'Disallow using an async function as a Promise executor',
				fix: false,
			},
			'no-await-in-loop': {
				rule: 'Disallow `await` inside of loops',
				fix: false,
			},
			'no-class-assign': {
				rule: 'Disallow reassigning class members',
				fix: false,
			},
			'no-compare-neg-zero': {
				rule: 'Disallow comparing against -0',
				fix: false,
			},
			'no-cond-assign': {
				rule: 'Disallow assignment operators in conditional expressions',
				fix: false,
			},
			'no-const-assign': {
				rule: 'Disallow reassigning `const` variables',
				fix: false,
			},
			'no-constant-binary-expression': {
				rule: "Disallow expressions where the operation doesn't affect the value",
				fix: false,
			},
			'no-constant-condition': {
				rule: 'Disallow constant expressions in conditions',
				fix: false,
			},
			'no-constructor-return': {
				rule: 'Disallow returning value from constructor',
				fix: false,
			},
			'no-control-regex': {
				rule: 'Disallow control characters in regular expressions',
				fix: false,
			},
			'no-debugger': {
				rule: 'Disallow the use of `debugger`',
				fix: false,
			},
			'no-dupe-args': {
				rule: 'Disallow duplicate arguments in `function` definitions',
				fix: false,
			},
			'no-dupe-class-members': {
				rule: 'Disallow duplicate class members',
				fix: false,
			},
			'no-dupe-else-if': {
				rule: 'Disallow duplicate conditions in if-else-if chains',
				fix: false,
			},
			'no-dupe-keys': {
				rule: 'Disallow duplicate keys in object literals',
				fix: false,
			},
			'no-duplicate-case': {
				rule: 'Disallow duplicate case labels',
				fix: false,
			},
			'no-duplicate-imports': {
				rule: 'Disallow duplicate module imports',
				fix: false,
			},
			'no-empty-character-class': {
				rule: 'Disallow empty character classes in regular expressions',
				fix: false,
			},
			'no-empty-pattern': {
				rule: 'Disallow empty destructuring patterns',
				fix: false,
			},
			'no-ex-assign': {
				rule: 'Disallow reassigning exceptions in `catch` clauses',
				fix: false,
			},
			'no-fallthrough': {
				rule: 'Disallow fallthrough of `case` statements',
				fix: false,
			},
			'no-func-assign': {
				rule: 'Disallow reassigning `function` declarations',
				fix: false,
			},
			'no-import-assign': {
				rule: 'Disallow assigning to imported bindings',
				fix: false,
			},
			'no-inner-declarations': {
				rule: 'Disallow variable or `function` declarations in nested blocks',
				fix: false,
			},
			'no-invalid-regexp': {
				rule: 'Disallow invalid regular expression strings in `RegExp` constructors',
				fix: false,
			},
			'no-irregular-whitespace': {
				rule: 'Disallow irregular whitespace',
				fix: false,
			},
			'no-loss-of-precision': {
				rule: 'Disallow literal numbers that lose precision',
				fix: false,
			},
			'no-misleading-character-class': {
				rule: 'Disallow characters which are made with multiple code points in character class syntax',
				fix: false,
			},
			'no-new-symbol': {
				rule: 'Disallow `new` operators with the `Symbol` object',
				fix: false,
			},
			'no-obj-calls': {
				rule: 'Disallow calling global object properties as functions',
				fix: false,
			},
			'no-promise-executor-return': {
				rule: 'Disallow returning values from Promise executor functions',
				fix: false,
			},
			'no-prototype-builtins': {
				rule: 'Disallow calling some `Object.prototype` methods directly on objects',
				fix: false,
			},
			'no-self-assign': {
				rule: 'Disallow assignments where both sides are exactly the same',
				fix: false,
			},
			'no-self-compare': {
				rule: 'Disallow comparisons where both sides are exactly the same',
				fix: false,
			},
			'no-setter-return': {
				rule: 'Disallow returning values from setters',
				fix: false,
			},
			'no-sparse-arrays': {
				rule: 'Disallow sparse arrays',
				fix: false,
			},
			'no-template-curly-in-string': {
				rule: 'Disallow template literal placeholder syntax in regular strings',
				fix: false,
			},
			'no-this-before-super': {
				rule: 'Disallow `this`/`super` before calling `super()` in constructors',
				fix: false,
			},
			'no-undef': {
				rule: 'Disallow the use of undeclared variables unless mentioned in `/*global */` comments',
				fix: false,
			},
			'no-unexpected-multiline': {
				rule: 'Disallow confusing multiline expressions',
				fix: false,
			},
			'no-unmodified-loop-condition': {
				rule: 'Disallow unmodified loop conditions',
				fix: false,
			},
			'no-unreachable': {
				rule: 'Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
				fix: false,
			},
			'no-unreachable-loop': {
				rule: 'Disallow loops with a body that allows only one iteration',
				fix: false,
			},
			'no-unsafe-finally': {
				rule: 'Disallow control flow statements in `finally` blocks',
				fix: false,
			},
			'no-unsafe-negation': {
				rule: 'Disallow negating the left operand of relational operators',
				fix: false,
			},
			'no-unsafe-optional-chaining': {
				rule: 'Disallow use of optional chaining in contexts where the `undefined` value is not allowed',
				fix: false,
			},
			'no-unused-private-class-members': {
				rule: 'Disallow unused private class members',
				fix: false,
			},
			'no-unused-vars': {
				rule: 'Disallow unused variables',
				fix: false,
			},
			'no-use-before-define': {
				rule: 'Disallow the use of variables before they are defined',
				fix: false,
			},
			'no-useless-backreference': {
				rule: 'Disallow useless backreferences in regular expressions',
				fix: false,
			},
			'require-atomic-updates': {
				rule: 'Disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
				fix: false,
			},
			'use-isnan': {
				rule: 'Require calls to `isNaN()` when checking for `NaN`',
				fix: false,
			},
			'valid-typeof': {
				rule: 'Enforce comparing `typeof` expressions against valid strings',
				fix: false,
			},
		},
		suggestions: {
			'accessor-pairs': {
				rule: 'Enforce getter and setter pairs in objects and classes',
				fix: false,
			},
			'arrow-body-style': {
				rule: 'Require braces around arrow function bodies',
				fix: true,
			},
			'block-scoped-var': {
				rule: 'Enforce the use of variables within the scope they are defined',
				fix: false,
			},
			'camelcase': {
				rule: 'Enforce camelcase naming convention',
				fix: false,
			},
			'capitalized-comments': {
				rule: 'Enforce or disallow capitalization of the first letter of a comment',
				fix: true,
			},
			'class-methods-use-this': {
				rule: 'Enforce that class methods utilize `this`',
				fix: false,
			},
			'complexity': {
				rule: 'Enforce a maximum cyclomatic complexity allowed in a program',
				fix: false,
			},
			'consistent-return': {
				rule: 'Require `return` statements to either always or never specify values',
				fix: false,
			},
			'consistent-this': {
				rule: 'Enforce consistent naming when capturing the current execution context',
				fix: false,
			},
			'curly': {
				rule: 'Enforce consistent brace style for all control statements',
				fix: true,
			},
			'default-case': {
				rule: 'Require `default` cases in `switch` statements',
				fix: false,
			},
			'default-case-last': {
				rule: 'Enforce default clauses in switch statements to be last',
				fix: false,
			},
			'default-param-last': {
				rule: 'Enforce default parameters to be last',
				fix: false,
			},
			'dot-notation': {
				rule: 'Enforce dot notation whenever possible',
				fix: true,
			},
			'eqeqeq': {
				rule: 'Require the use of `===` and `!==`',
				fix: true,
			},
			'func-name-matching': {
				rule: 'Require function names to match the name of the variable or property to which they are assigned',
				fix: false,
			},
			'func-names': {
				rule: 'Require or disallow named `function` expressions',
				fix: false,
			},
			'func-style': {
				rule: 'Enforce the consistent use of either `function` declarations or expressions',
				fix: false,
			},
			'grouped-accessor-pairs': {
				rule: 'Require grouped accessor pairs in object literals and classes',
				fix: false,
			},
			'guard-for-in': {
				rule: 'Require `for-in` loops to include an `if` statement',
				fix: false,
			},
			'id-denylist': {
				rule: 'Disallow specified identifiers',
				fix: false,
			},
			'id-length': {
				rule: 'Enforce minimum and maximum identifier lengths',
				fix: false,
			},
			'id-match': {
				rule: 'Require identifiers to match a specified regular expression',
				fix: false,
			},
			'init-declarations': {
				rule: 'Require or disallow initialization in variable declarations',
				fix: false,
			},
			'max-classes-per-file': {
				rule: 'Enforce a maximum number of classes per file',
				fix: false,
			},
			'max-depth': {
				rule: 'Enforce a maximum depth that blocks can be nested',
				fix: false,
			},
			'max-lines': {
				rule: 'Enforce a maximum number of lines per file',
				fix: false,
			},
			'max-lines-per-function': {
				rule: 'Enforce a maximum number of lines of code in a function',
				fix: false,
			},
			'max-nested-callbacks': {
				rule: 'Enforce a maximum depth that callbacks can be nested',
				fix: false,
			},
			'max-params': {
				rule: 'Enforce a maximum number of parameters in function definitions',
				fix: false,
			},
			'max-statements': {
				rule: 'Enforce a maximum number of statements allowed in function blocks',
				fix: false,
			},
			'multiline-comment-style': {
				rule: 'Enforce a particular style for multiline comments',
				fix: true,
			},
			'new-cap': {
				rule: 'Require constructor names to begin with a capital letter',
				fix: false,
			},
			'no-alert': {
				rule: 'Disallow the use of `alert`, `confirm`, and `prompt`',
				fix: false,
			},
			'no-array-constructor': {
				rule: 'Disallow `Array` constructors',
				fix: false,
			},
			'no-bitwise': {
				rule: 'Disallow bitwise operators',
				fix: false,
			},
			'no-caller': {
				rule: 'Disallow the use of `arguments.caller` or `arguments.callee`',
				fix: false,
			},
			'no-case-declarations': {
				rule: 'Disallow lexical declarations in case clauses',
				fix: false,
			},
			'no-confusing-arrow': {
				rule: 'Disallow arrow functions where they could be confused with comparisons',
				fix: true,
			},
			'no-console': {
				rule: 'Disallow the use of `console`',
				fix: false,
			},
			'no-continue': {
				rule: 'Disallow `continue` statements',
				fix: false,
			},
			'no-delete-var': {
				rule: 'Disallow deleting variables',
				fix: false,
			},
			'no-div-regex': {
				rule: 'Disallow division operators explicitly at the beginning of regular expressions',
				fix: true,
			},
			'no-else-return': {
				rule: 'Disallow `else` blocks after `return` statements in `if` statements',
				fix: true,
			},
			'no-empty': {
				rule: 'Disallow empty block statements',
				fix: false,
			},
			'no-empty-function': {
				rule: 'Disallow empty functions',
				fix: false,
			},
			'no-eq-null': {
				rule: 'Disallow `null` comparisons without type-checking operators',
				fix: false,
			},
			'no-eval': {
				rule: 'Disallow the use of `eval()`',
				fix: false,
			},
			'no-extend-native': {
				rule: 'Disallow extending native types',
				fix: false,
			},
			'no-extra-bind': {
				rule: 'Disallow unnecessary calls to `.bind()`',
				fix: true,
			},
			'no-extra-boolean-cast': {
				rule: 'Disallow unnecessary boolean casts',
				fix: true,
			},
			'no-extra-label': {
				rule: 'Disallow unnecessary labels',
				fix: true,
			},
			'no-extra-semi': {
				rule: 'Disallow unnecessary semicolons',
				fix: true,
			},
			'no-floating-decimal': {
				rule: 'Disallow leading or trailing decimal points in numeric literals',
				fix: true,
			},
			'no-global-assign': {
				rule: 'Disallow assignments to native objects or read-only global variables',
				fix: false,
			},
			'no-implicit-coercion': {
				rule: 'Disallow shorthand type conversions',
				fix: true,
			},
			'no-implicit-globals': {
				rule: 'Disallow declarations in the global scope',
				fix: false,
			},
			'no-implied-eval': {
				rule: 'Disallow the use of `eval()`-like methods',
				fix: false,
			},
			'no-inline-comments': {
				rule: 'Disallow inline comments after code',
				fix: false,
			},
			'no-invalid-this': {
				rule: 'Disallow use of `this` in contexts where the value of `this` is `undefined`',
				fix: false,
			},
			'no-iterator': {
				rule: 'Disallow the use of the `__iterator__` property',
				fix: false,
			},
			'no-label-var': {
				rule: 'Disallow labels that share a name with a variable',
				fix: false,
			},
			'no-labels': {
				rule: 'Disallow labeled statements',
				fix: false,
			},
			'no-lone-blocks': {
				rule: 'Disallow unnecessary nested blocks',
				fix: false,
			},
			'no-lonely-if': {
				rule: 'Disallow `if` statements as the only statement in `else` blocks',
				fix: true,
			},
			'no-loop-func': {
				rule: 'Disallow function declarations that contain unsafe references inside loop statements',
				fix: false,
			},
			'no-magic-numbers': {
				rule: 'Disallow magic numbers',
				fix: false,
			},
			'no-mixed-operators': {
				rule: 'Disallow mixed binary operators',
				fix: false,
			},
			'no-multi-assign': {
				rule: 'Disallow use of chained assignment expressions',
				fix: false,
			},
			'no-multi-str': {
				rule: 'Disallow multiline strings',
				fix: false,
			},
			'no-negated-condition': {
				rule: 'Disallow negated conditions',
				fix: false,
			},
			'no-nested-ternary': {
				rule: 'Disallow nested ternary expressions',
				fix: false,
			},
			'no-new': {
				rule: 'Disallow `new` operators outside of assignments or comparisons',
				fix: false,
			},
			'no-new-func': {
				rule: 'Disallow `new` operators with the `Function` object',
				fix: false,
			},
			'no-new-object': {
				rule: 'Disallow `Object` constructors',
				fix: false,
			},
			'no-new-wrappers': {
				rule: 'Disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
				fix: false,
			},
			'no-nonoctal-decimal-escape': {
				rule: 'Disallow `\\8` and `\\9` escape sequences in string literals',
				fix: false,
			},
			'no-octal': {
				rule: 'Disallow octal literals',
				fix: false,
			},
			'no-octal-escape': {
				rule: 'Disallow octal escape sequences in string literals',
				fix: false,
			},
			'no-param-reassign': {
				rule: 'Disallow reassigning `function` parameters',
				fix: false,
			},
			'no-plusplus': {
				rule: 'Disallow the unary operators `++` and `--`',
				fix: false,
			},
			'no-proto': {
				rule: 'Disallow the use of the `__proto__` property',
				fix: false,
			},
			'no-redeclare': {
				rule: 'Disallow variable redeclaration',
				fix: false,
			},
			'no-regex-spaces': {
				rule: 'Disallow multiple spaces in regular expressions',
				fix: true,
			},
			'no-restricted-exports': {
				rule: 'Disallow specified names in exports',
				fix: false,
			},
			'no-restricted-globals': {
				rule: 'Disallow specified global variables',
				fix: false,
			},
			'no-restricted-imports': {
				rule: 'Disallow specified modules when loaded by `import`',
				fix: false,
			},
			'no-restricted-properties': {
				rule: 'Disallow certain properties on certain objects',
				fix: false,
			},
			'no-restricted-syntax': {
				rule: 'Disallow specified syntax',
				fix: false,
			},
			'no-return-assign': {
				rule: 'Disallow assignment operators in `return` statements',
				fix: false,
			},
			'no-return-await': {
				rule: 'Disallow unnecessary `return await`',
				fix: false,
			},
			'no-script-url': {
				rule: 'Disallow `javascript:` urls',
				fix: false,
			},
			'no-sequences': {
				rule: 'Disallow comma operators',
				fix: false,
			},
			'no-shadow': {
				rule: 'Disallow variable declarations from shadowing variables declared in the outer scope',
				fix: false,
			},
			'no-shadow-restricted-names': {
				rule: 'Disallow identifiers from shadowing restricted names',
				fix: false,
			},
			'no-ternary': {
				rule: 'Disallow ternary operators',
				fix: false,
			},
			'no-throw-literal': {
				rule: 'Disallow throwing literals as exceptions',
				fix: false,
			},
			'no-undef-init': {
				rule: 'Disallow initializing variables to `undefined`',
				fix: true,
			},
			'no-undefined': {
				rule: 'Disallow the use of `undefined` as an identifier',
				fix: false,
			},
			'no-underscore-dangle': {
				rule: 'Disallow dangling underscores in identifiers',
				fix: false,
			},
			'no-unneeded-ternary': {
				rule: 'Disallow ternary operators when simpler alternatives exist',
				fix: true,
			},
			'no-unused-expressions': {
				rule: 'Disallow unused expressions',
				fix: false,
			},
			'no-unused-labels': {
				rule: 'Disallow unused labels',
				fix: true,
			},
			'no-useless-call': {
				rule: 'Disallow unnecessary calls to `.call()` and `.apply()`',
				fix: false,
			},
			'no-useless-catch': {
				rule: 'Disallow unnecessary `catch` clauses',
				fix: false,
			},
			'no-useless-computed-key': {
				rule: 'Disallow unnecessary computed property keys in objects and classes',
				fix: true,
			},
			'no-useless-concat': {
				rule: 'Disallow unnecessary concatenation of literals or template literals',
				fix: false,
			},
			'no-useless-constructor': {
				rule: 'Disallow unnecessary constructors',
				fix: false,
			},
			'no-useless-escape': {
				rule: 'Disallow unnecessary escape characters',
				fix: false,
			},
			'no-useless-rename': {
				rule: 'Disallow renaming import, export, and destructured assignments to the same name',
				fix: true,
			},
			'no-useless-return': {
				rule: 'Disallow redundant return statements',
				fix: true,
			},
			'no-var': {
				rule: 'Require `let` or `const` instead of `var`',
				fix: true,
			},
			'no-void': {
				rule: 'Disallow `void` operators',
				fix: false,
			},
			'no-warning-comments': {
				rule: 'Disallow specified warning terms in comments',
				fix: false,
			},
			'no-with': {
				rule: 'Disallow `with` statements',
				fix: false,
			},
			'object-shorthand': {
				rule: 'Require or disallow method and property shorthand syntax for object literals',
				fix: true,
			},
			'one-var': {
				rule: 'Enforce variables to be declared either together or separately in functions',
				fix: true,
			},
			'one-var-declaration-per-line': {
				rule: 'Require or disallow newlines around variable declarations',
				fix: true,
			},
			'operator-assignment': {
				rule: 'Require or disallow assignment operator shorthand where possible',
				fix: true,
			},
			'prefer-arrow-callback': {
				rule: 'Require using arrow functions for callbacks',
				fix: true,
			},
			'prefer-const': {
				rule: 'Require `const` declarations for variables that are never reassigned after declared',
				fix: true,
			},
			'prefer-destructuring': {
				rule: 'Require destructuring from arrays and/or objects',
				fix: true,
			},
			'prefer-exponentiation-operator': {
				rule: 'Disallow the use of `Math.pow` in favor of the `**` operator',
				fix: true,
			},
			'prefer-named-capture-group': {
				rule: 'Enforce using named capture group in regular expression',
				fix: false,
			},
			'prefer-numeric-literals': {
				rule: 'Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',
				fix: true,
			},
			'prefer-object-has-own': {
				rule: 'Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`',
				fix: true,
			},
			'prefer-object-spread': {
				rule: 'Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
				fix: true,
			},
			'prefer-promise-reject-errors': {
				rule: 'Require using Error objects as Promise rejection reasons',
				fix: false,
			},
			'prefer-regex-literals': {
				rule: 'Disallow use of the `RegExp` constructor in favor of regular expression literals',
				fix: false,
			},
			'prefer-rest-params': {
				rule: 'Require rest parameters instead of `arguments`',
				fix: false,
			},
			'prefer-spread': {
				rule: 'Require spread operators instead of `.apply()`',
				fix: false,
			},
			'prefer-template': {
				rule: 'Require template literals instead of string concatenation',
				fix: true,
			},
			'quote-props': {
				rule: 'Require quotes around object literal property names',
				fix: true,
			},
			'radix': {
				rule: 'Enforce the consistent use of the radix argument when using `parseInt()`',
				fix: false,
			},
			'require-await': {
				rule: 'Disallow async functions which have no `await` expression',
				fix: false,
			},
			'require-unicode-regexp': {
				rule: 'Enforce the use of `u` flag on RegExp',
				fix: false,
			},
			'require-yield': {
				rule: 'Require generator functions to contain `yield`',
				fix: false,
			},
			'sort-imports': {
				rule: 'Enforce sorted import declarations within modules',
				fix: true,
			},
			'sort-keys': {
				rule: 'Require object keys to be sorted',
				fix: false,
			},
			'sort-vars': {
				rule: 'Require variables within the same declaration block to be sorted',
				fix: true,
			},
			'spaced-comment': {
				rule: 'Enforce consistent spacing after the `//` or `/*` in a comment',
				fix: true,
			},
			'strict': {
				rule: 'Require or disallow strict mode directives',
				fix: true,
			},
			'symbol-description': {
				rule: 'Require symbol descriptions',
				fix: false,
			},
			'vars-on-top': {
				rule: 'Require `var` declarations be placed at the top of their containing scope',
				fix: false,
			},
			'yoda': {
				rule: 'Require or disallow "Yoda" conditions',
				fix: true,
			},
		},
		layoutAndFormatting: {
			'array-bracket-newline': {
				rule: 'Enforce linebreaks after opening and before closing array brackets',
				fix: true,
			},
			'array-bracket-spacing': {
				rule: 'Enforce consistent spacing inside array brackets',
				fix: true,
			},
			'array-element-newline': {
				rule: 'Enforce line breaks after each array element',
				fix: true,
			},
			'arrow-parens': {
				rule: 'Require parentheses around arrow function arguments',
				fix: true,
			},
			'arrow-spacing': {
				rule: 'Enforce consistent spacing before and after the arrow in arrow functions',
				fix: true,
			},
			'block-spacing': {
				rule: 'Disallow or enforce spaces inside of blocks after opening block and before closing block',
				fix: true,
			},
			'brace-style': {
				rule: 'Enforce consistent brace style for blocks',
				fix: true,
			},
			'comma-dangle': {
				rule: 'Require or disallow trailing commas',
				fix: true,
			},
			'comma-spacing': {
				rule: 'Enforce consistent spacing before and after commas',
				fix: true,
			},
			'comma-style': {
				rule: 'Enforce consistent comma style',
				fix: true,
			},
			'computed-property-spacing': {
				rule: 'Enforce consistent spacing inside computed property brackets',
				fix: true,
			},
			'dot-location': {
				rule: 'Enforce consistent newlines before and after dots',
				fix: true,
			},
			'eol-last': {
				rule: 'Require or disallow newline at the end of files',
				fix: true,
			},
			'func-call-spacing': {
				rule: 'Require or disallow spacing between function identifiers and their invocations',
				fix: true,
			},
			'function-call-argument-newline': {
				rule: 'Enforce line breaks between arguments of a function call',
				fix: true,
			},
			'function-paren-newline': {
				rule: 'Enforce consistent line breaks inside function parentheses',
				fix: true,
			},
			'generator-star-spacing': {
				rule: 'Enforce consistent spacing around `*` operators in generator functions',
				fix: true,
			},
			'implicit-arrow-linebreak': {
				rule: 'Enforce the location of arrow function bodies',
				fix: true,
			},
			'indent': {
				rule: 'Enforce consistent indentation',
				fix: true,
			},
			'jsx-quotes': {
				rule: 'Enforce the consistent use of either double or single quotes in JSX attributes',
				fix: true,
			},
			'key-spacing': {
				rule: 'Enforce consistent spacing between keys and values in object literal properties',
				fix: true,
			},
			'keyword-spacing': {
				rule: 'Enforce consistent spacing before and after keywords',
				fix: true,
			},
			'line-comment-position': {
				rule: 'Enforce position of line comments',
				fix: false,
			},
			'linebreak-style': {
				rule: 'Enforce consistent linebreak style',
				fix: true,
			},
			'lines-around-comment': {
				rule: 'Require empty lines around comments',
				fix: true,
			},
			'lines-between-class-members': {
				rule: 'Require or disallow an empty line between class members',
				fix: true,
			},
			'max-len': {
				rule: 'Enforce a maximum line length',
				fix: false,
			},
			'max-statements-per-line': {
				rule: 'Enforce a maximum number of statements allowed per line',
				fix: false,
			},
			'multiline-ternary': {
				rule: 'Enforce newlines between operands of ternary expressions',
				fix: true,
			},
			'new-parens': {
				rule: 'Enforce or disallow parentheses when invoking a constructor with no arguments',
				fix: true,
			},
			'newline-per-chained-call': {
				rule: 'Require a newline after each call in a method chain',
				fix: true,
			},
			'no-extra-parens': {
				rule: 'Disallow unnecessary parentheses',
				fix: true,
			},
			'no-mixed-spaces-and-tabs': {
				rule: 'Disallow mixed spaces and tabs for indentation',
				fix: false,
			},
			'no-multi-spaces': {
				rule: 'Disallow multiple spaces',
				fix: true,
			},
			'no-multiple-empty-lines': {
				rule: 'Disallow multiple empty lines',
				fix: true,
			},
			'no-tabs': {
				rule: 'Disallow all tabs',
				fix: false,
			},
			'no-trailing-spaces': {
				rule: 'Disallow trailing whitespace at the end of lines',
				fix: true,
			},
			'no-whitespace-before-property': {
				rule: 'Disallow whitespace before properties',
				fix: true,
			},
			'nonblock-statement-body-position': {
				rule: 'Enforce the location of single-line statements',
				fix: true,
			},
			'object-curly-newline': {
				rule: 'Enforce consistent line breaks after opening and before closing braces',
				fix: true,
			},
			'object-curly-spacing': {
				rule: 'Enforce consistent spacing inside braces',
				fix: true,
			},
			'object-property-newline': {
				rule: 'Enforce placing object properties on separate lines',
				fix: true,
			},
			'operator-linebreak': {
				rule: 'Enforce consistent linebreak style for operators',
				fix: true,
			},
			'padded-blocks': {
				rule: 'Require or disallow padding within blocks',
				fix: true,
			},
			'padding-line-between-statements': {
				rule: 'Require or disallow padding lines between statements',
				fix: true,
			},
			'quotes': {
				rule: 'Enforce the consistent use of either backticks, double, or single quotes',
				fix: true,
			},
			'rest-spread-spacing': {
				rule: 'Enforce spacing between rest and spread operators and their expressions',
				fix: true,
			},
			'semi': {
				rule: 'Require or disallow semicolons instead of ASI',
				fix: true,
			},
			'semi-spacing': {
				rule: 'Enforce consistent spacing before and after semicolons',
				fix: true,
			},
			'semi-style': {
				rule: 'Enforce location of semicolons',
				fix: true,
			},
			'space-before-blocks': {
				rule: 'Enforce consistent spacing before blocks',
				fix: true,
			},
			'space-before-function-paren': {
				rule: 'Enforce consistent spacing before `function` definition opening parenthesis',
				fix: true,
			},
			'space-in-parens': {
				rule: 'Enforce consistent spacing inside parentheses',
				fix: true,
			},
			'space-infix-ops': {
				rule: 'Require spacing around infix operators',
				fix: true,
			},
			'space-unary-ops': {
				rule: 'Enforce consistent spacing before or after unary operators',
				fix: true,
			},
			'switch-colon-spacing': {
				rule: 'Enforce spacing around colons of switch statements',
				fix: true,
			},
			'template-curly-spacing': {
				rule: 'Require or disallow spacing around embedded expressions of template strings',
				fix: true,
			},
			'template-tag-spacing': {
				rule: 'Require or disallow spacing between template tags and their literals',
				fix: true,
			},
			'unicode-bom': {
				rule: 'Require or disallow Unicode byte order mark (BOM)',
				fix: true,
			},
			'wrap-iife': {
				rule: 'Require parentheses around immediate `function` invocations',
				fix: true,
			},
			'wrap-regex': {
				rule: 'Require parenthesis around regex literals',
				fix: true,
			},
			'yield-star-spacing': {
				rule: 'Require or disallow spacing around the `*` in `yield*` expressions',
				fix: true,
			},
		},
	},
};
