/* eslint-disable max-lines */
export const librariesList = {
	ESLint: {
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
	},
	Stylelint: {
		logo: '../assets/images/eslintLogo.png',
		title: 'Stylelint',
		madeBy: 'Nicholas C. Zakas',
		description: 'Code linting is a type of static analysis that is frequently',
		type: 'type',
		category: 'category',
		rulesList: {
			avoidErrors: {
				'color-no-invalid-hex': {
					rule: ' Disallow invalid hex colors.',
					fix: false,
				},
				'font-family-no-duplicate-names': {
					rule: ' Disallow duplicate font family names.',
					fix: false,
				},
				'font-family-no-missing-generic-family-keyword': {
					rule: ' Disallow missing generic families in lists of font family names.',
					fix: false,
				},
				'named-grid-areas-no-invalid': {
					rule: ' Disallow invalid named grid areas.',
					fix: false,
				},
				'function-calc-no-unspaced-operator': {
					rule: ' Disallow an unspaced operator within calc functions.',
					fix: false,
				},
				'function-linear-gradient-no-nonstandard-direction': {
					rule: ' Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.',
					fix: false,
				},
				'function-no-unknown': {
					rule: ' Disallow unknown functions.',
					fix: false,
				},
				'string-no-newline': {
					rule: ' Disallow (unescaped) newlines in strings.',
					fix: false,
				},
				'unit-no-unknown': {
					rule: ' Disallow unknown units.',
					fix: false,
				},
				'custom-property-no-missing-var-function': {
					rule: ' Disallow missing var function for custom properties.',
					fix: false,
				},
				'property-no-unknown': {
					rule: ' Disallow unknown properties.',
					fix: false,
				},
				'keyframe-declaration-no-important': {
					rule: ' Disallow !important within keyframe declarations.',
					fix: false,
				},
				'keyframe-block-no-duplicate-selectors': {
					rule: ' Disallow duplicate selectors within keyframe blocks.',
					fix: false,
				},
				'declaration-block-no-duplicate-custom-properties': {
					rule: ' Disallow duplicate custom properties within declaration blocks.',
					fix: false,
				},
				'declaration-block-no-duplicate-properties': {
					rule: ' Disallow duplicate properties within declaration blocks.',
					fix: false,
				},
				'declaration-block-no-shorthand-property-overrides': {
					rule: ' Disallow shorthand properties that override related longhand properties.',
					fix: false,
				},
				'block-no-empty': {
					rule: ' Disallow empty blocks.',
					fix: false,
				},
				'selector-pseudo-class-no-unknown': {
					rule: ' Disallow unknown pseudo-class selectors.',
					fix: false,
				},
				'selector-pseudo-element-no-unknown': {
					rule: ' Disallow unknown pseudo-element selectors.',
					fix: false,
				},
				'selector-type-no-unknown': {
					rule: ' Disallow unknown type selectors.',
					fix: false,
				},
				'media-feature-name-no-unknown': {
					rule: ' Disallow unknown media feature names.',
					fix: false,
				},
				'at-rule-no-unknown': {
					rule: ' Disallow unknown at-rules.',
					fix: false,
				},
				'comment-no-empty': {
					rule: ' Disallow empty comments.',
					fix: false,
				},
				'no-descending-specificity': {
					rule: ' Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.',
					fix: false,
				},
				'no-duplicate-at-import-rules': {
					rule: ' Disallow duplicate @import rules within a stylesheet.',
					fix: false,
				},
				'no-duplicate-selectors': {
					rule: ' Disallow duplicate selectors within a stylesheet.',
					fix: false,
				},
				'no-empty-source': {
					rule: ' Disallow empty sources.',
					fix: false,
				},
				'no-invalid-double-slash-comments': {
					rule: ' Disallow double-slash comments (//...) which are not supported by CSS.',
					fix: false,
				},
				'no-invalid-position-at-import-rule': {
					rule: ' Disallow invalid position @import rules within a stylesheet.',
					fix: false,
				},
			},
			enforceConventions: {
				'alpha-value-notation': {
					rule: ' Specify percentage or number notation for alpha-values (Autofixable).',
					fix: true,
				},
				'hue-degree-notation': {
					rule: ' Specify number or angle notation for degree hues (Autofixable).',
					fix: true,
				},
				'color-function-notation': {
					rule: ' Specify modern or legacy notation for applicable color-functions (Autofixable).',
					fix: true,
				},
				'color-hex-alpha': {
					rule: ' Require or disallow alpha channel for hex colors.',
					fix: false,
				},
				'color-hex-length': {
					rule: ' Specify short or long notation for hex colors (Autofixable).',
					fix: true,
				},
				'color-named': {
					rule: ' Require (where possible) or disallow named colors.',
					fix: false,
				},
				'color-no-hex': {
					rule: ' Disallow hex colors.',
					fix: false,
				},
				'length-zero-no-unit': {
					rule: ' Disallow units for zero lengths (Autofixable).',
					fix: true,
				},
				'font-family-name-quotes': {
					rule: ' Specify whether or not quotation marks should be used around font family names (Autofixable).',
					fix: true,
				},
				'font-weight-notation': {
					rule: ' Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.',
					fix: false,
				},
				'function-allowed-list': {
					rule: ' Specify a list of allowed functions.',
					fix: false,
				},
				'function-disallowed-list': {
					rule: ' Specify a list of disallowed functions.',
					fix: false,
				},
				'function-url-no-scheme-relative': {
					rule: ' Disallow scheme-relative urls.',
					fix: false,
				},
				'function-url-quotes': {
					rule: ' Require or disallow quotes for urls.',
					fix: false,
				},
				'function-url-scheme-allowed-list': {
					rule: ' Specify a list of allowed URL schemes.',
					fix: false,
				},
				'function-url-scheme-disallowed-list': {
					rule: ' Specify a list of disallowed URL schemes.',
					fix: false,
				},
				'import-notation': {
					rule: ' Specify string or URL notation for @import rules (Autofixable).',
					fix: true,
				},
				'keyframes-name-pattern': {
					rule: ' Specify a pattern for keyframe names.',
					fix: false,
				},
				'number-max-precision': {
					rule: ' Limit the number of decimal places allowed in numbers.',
					fix: false,
				},
				'time-min-milliseconds': {
					rule: ' Specify the minimum number of milliseconds for time values.',
					fix: false,
				},
				'unit-allowed-list': {
					rule: ' Specify a list of allowed units.',
					fix: false,
				},
				'unit-disallowed-list': {
					rule: ' Specify a list of disallowed units.',
					fix: false,
				},
				'shorthand-property-no-redundant-values': {
					rule: ' Disallow redundant values in shorthand properties (Autofixable).',
					fix: true,
				},
				'value-no-vendor-prefix': {
					rule: ' Disallow vendor prefixes for values (Autofixable).',
					fix: true,
				},
				'custom-property-pattern': {
					rule: ' Specify a pattern for custom properties.',
					fix: false,
				},
				'property-allowed-list': {
					rule: ' Specify a list of allowed properties.',
					fix: false,
				},
				'property-disallowed-list': {
					rule: ' Specify a list of disallowed properties.',
					fix: false,
				},
				'property-no-vendor-prefix': {
					rule: ' Disallow vendor prefixes for properties (Autofixable).',
					fix: true,
				},
				'declaration-no-important': {
					rule: ' Disallow !important within declarations.',
					fix: false,
				},
				'declaration-property-max-values': {
					rule: ' Limit the number of values for a list of properties within declarations.',
					fix: false,
				},
				'declaration-property-unit-allowed-list': {
					rule: ' Specify a list of allowed property and unit pairs within declarations.',
					fix: false,
				},
				'declaration-property-unit-disallowed-list': {
					rule: ' Specify a list of disallowed property and unit pairs within declarations.',
					fix: false,
				},
				'declaration-property-value-allowed-list': {
					rule: ' Specify a list of allowed property and value pairs within declarations.',
					fix: false,
				},
				'declaration-property-value-disallowed-list': {
					rule: ' Specify a list of disallowed property and value pairs within declarations.',
					fix: false,
				},
				'declaration-block-no-redundant-longhand-properties': {
					rule: ' Disallow longhand properties that can be combined into one shorthand property.',
					fix: false,
				},
				'declaration-block-single-line-max-declarations': {
					rule: ' Limit the number of declarations within a single-line declaration block.',
					fix: false,
				},
				'selector-attribute-name-disallowed-list': {
					rule: ' Specify a list of disallowed attribute names.',
					fix: false,
				},
				'selector-attribute-operator-allowed-list': {
					rule: ' Specify a list of allowed attribute operators.',
					fix: false,
				},
				'selector-attribute-operator-disallowed-list': {
					rule: ' Specify a list of disallowed attribute operators.',
					fix: false,
				},
				'selector-attribute-quotes': {
					rule: ' Require or disallow quotes for attribute values.',
					fix: false,
				},
				'selector-class-pattern': {
					rule: ' Specify a pattern for class selectors.',
					fix: false,
				},
				'selector-combinator-allowed-list': {
					rule: ' Specify a list of allowed combinators.',
					fix: false,
				},
				'selector-combinator-disallowed-list': {
					rule: ' Specify a list of disallowed combinators.',
					fix: false,
				},
				'selector-disallowed-list': {
					rule: ' Specify a list of disallowed selectors.',
					fix: false,
				},
				'selector-id-pattern': {
					rule: ' Specify a pattern for ID selectors.',
					fix: false,
				},
				'selector-max-attribute': {
					rule: ' Limit the number of attribute selectors in a selector.',
					fix: false,
				},
				'selector-max-class': {
					rule: ' Limit the number of classes in a selector.',
					fix: false,
				},
				'selector-max-combinators': {
					rule: ' Limit the number of combinators in a selector.',
					fix: false,
				},
				'selector-max-compound-selectors': {
					rule: ' Limit the number of compound selectors in a selector.',
					fix: false,
				},
				'selector-max-id': {
					rule: ' Limit the number of ID selectors in a selector.',
					fix: false,
				},
				'selector-max-pseudo-class': {
					rule: ' Limit the number of pseudo-classes in a selector.',
					fix: false,
				},
				'selector-max-specificity': {
					rule: ' Limit the specificity of selectors.',
					fix: false,
				},
				'selector-max-type': {
					rule: ' Limit the number of type in a selector.',
					fix: false,
				},
				'selector-max-universal': {
					rule: ' Limit the number of universal selectors in a selector.',
					fix: false,
				},
				'selector-nested-pattern': {
					rule: ' Specify a pattern for the selectors of rules nested within rules.',
					fix: false,
				},
				'selector-no-qualifying-type': {
					rule: ' Disallow qualifying a selector by type.',
					fix: false,
				},
				'selector-no-vendor-prefix': {
					rule: ' Disallow vendor prefixes for selectors (Autofixable).',
					fix: true,
				},
				'selector-not-notation': {
					rule: ' Specify simple or complex notation for ',
					fix: false,
				},
				'selector-pseudo-class-allowed-list': {
					rule: ' Specify a list of allowed pseudo-class selectors.',
					fix: false,
				},
				'selector-pseudo-class-disallowed-list': {
					rule: ' Specify a list of disallowed pseudo-class selectors.',
					fix: false,
				},
				'selector-pseudo-element-allowed-list': {
					rule: ' Specify a list of allowed pseudo-element selectors.',
					fix: false,
				},
				'selector-pseudo-element-colon-notation': {
					rule: ' Specify single or double colon notation for applicable pseudo-elements (Autofixable).',
					fix: true,
				},
				'selector-pseudo-element-disallowed-list': {
					rule: ' Specify a list of disallowed pseudo-element selectors.',
					fix: false,
				},
				'rule-selector-property-disallowed-list': {
					rule: ' Specify a list of disallowed properties for selectors within rules.',
					fix: false,
				},
				'media-feature-name-allowed-list': {
					rule: ' Specify a list of allowed media feature names.',
					fix: false,
				},
				'media-feature-name-disallowed-list': {
					rule: ' Specify a list of disallowed media feature names.',
					fix: false,
				},
				'media-feature-name-no-vendor-prefix': {
					rule: ' Disallow vendor prefixes for media feature names (Autofixable).',
					fix: true,
				},
				'media-feature-name-value-allowed-list': {
					rule: ' Specify a list of allowed media feature name and value pairs.',
					fix: false,
				},
				'custom-media-pattern': {
					rule: ' Specify a pattern for custom media query names.',
					fix: false,
				},
				'at-rule-allowed-list': {
					rule: ' Specify a list of allowed at-rules.',
					fix: false,
				},
				'at-rule-disallowed-list': {
					rule: ' Specify a list of disallowed at-rules.',
					fix: false,
				},
				'at-rule-no-vendor-prefix': {
					rule: ' Disallow vendor prefixes for at-rules (Autofixable).',
					fix: true,
				},
				'at-rule-property-required-list': {
					rule: ' Specify a list of required properties for an at-rule.',
					fix: false,
				},
				'comment-pattern': {
					rule: ' Specify a pattern for comments.',
					fix: false,
				},
				'comment-word-disallowed-list': {
					rule: ' Specify a list of disallowed words within comments.',
					fix: false,
				},
				'max-nesting-depth': {
					rule: ' Limit the depth of nesting.',
					fix: false,
				},
				'no-irregular-whitespace': {
					rule: ' Disallow irregular whitespace.',
					fix: false,
				},
				'no-unknown-animations': {
					rule: ' Disallow unknown animations.',
					fix: false,
				},
				'unicode-bom': {
					rule: ' Require or disallow Unicode BOM.',
					fix: false,
				},
			},
			stylisticIssues: {
				'value-keyword-case': {
					rule: ' Specify lowercase or uppercase for keywords values (Autofixable).',
					fix: true,
				},
				'function-name-case': {
					rule: ' Specify lowercase or uppercase for function names (Autofixable).',
					fix: true,
				},
				'custom-property-empty-line-before': {
					rule: ' Require or disallow an empty line before custom properties (Autofixable).',
					fix: true,
				},
				'selector-type-case': {
					rule: ' Specify lowercase or uppercase for type selectors (Autofixable).',
					fix: true,
				},
				'rule-empty-line-before': {
					rule: ' Require or disallow an empty line before rules (Autofixable).',
					fix: true,
				},
				'at-rule-empty-line-before': {
					rule: ' Require or disallow an empty line before at-rules (Autofixable).',
					fix: true,
				},
				'comment-empty-line-before': {
					rule: ' Require or disallow an empty line before comments (Autofixable).',
					fix: true,
				},
				'comment-whitespace-inside': {
					rule: ' Require or disallow whitespace on the inside of comment markers (Autofixable).',
					fix: true,
				},
				'color-hex-case': {
					rule: ' Specify lowercase or uppercase for hex colors (Autofixable).',
					fix: true,
				},
				'function-comma-newline-after': {
					rule: ' Require a newline or disallow whitespace after the commas of functions (Autofixable).',
					fix: true,
				},
				'function-comma-newline-before': {
					rule: ' Require a newline or disallow whitespace before the commas of functions (Autofixable).',
					fix: true,
				},
				'function-comma-space-after': {
					rule: ' Require a single space or disallow whitespace after the commas of functions (Autofixable).',
					fix: true,
				},
				'function-comma-space-before': {
					rule: ' Require a single space or disallow whitespace before the commas of functions (Autofixable).',
					fix: true,
				},
				'function-max-empty-lines': {
					rule: ' Limit the number of adjacent empty lines within functions (Autofixable).',
					fix: true,
				},
				'function-parentheses-newline-inside': {
					rule: ' Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
					fix: true,
				},
				'function-parentheses-space-inside': {
					rule: ' Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
					fix: true,
				},
				'function-whitespace-after': {
					rule: ' Require or disallow whitespace after functions (Autofixable).',
					fix: true,
				},
				'number-leading-zero': {
					rule: ' Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).',
					fix: true,
				},
				'number-no-trailing-zeros': {
					rule: ' Disallow trailing zeros in numbers (Autofixable).',
					fix: true,
				},
				'string-quotes': {
					rule: ' Specify single or double quotes around strings (Autofixable).',
					fix: true,
				},
				'unit-case': {
					rule: ' Specify lowercase or uppercase for units (Autofixable).',
					fix: true,
				},
				'value-list-comma-newline-after': {
					rule: ' Require a newline or disallow whitespace after the commas of value lists (Autofixable).',
					fix: true,
				},
				'value-list-comma-newline-before': {
					rule: ' Require a newline or disallow whitespace before the commas of value lists.',
					fix: false,
				},
				'value-list-comma-space-after': {
					rule: ' Require a single space or disallow whitespace after the commas of value lists (Autofixable).',
					fix: true,
				},
				'value-list-comma-space-before': {
					rule: ' Require a single space or disallow whitespace before the commas of value lists (Autofixable).',
					fix: true,
				},
				'value-list-max-empty-lines': {
					rule: ' Limit the number of adjacent empty lines within value lists (Autofixable).',
					fix: true,
				},
				'property-case': {
					rule: ' Specify lowercase or uppercase for properties (Autofixable).',
					fix: true,
				},
				'declaration-bang-space-after': {
					rule: ' Require a single space or disallow whitespace after the bang of declarations (Autofixable).',
					fix: true,
				},
				'declaration-bang-space-before': {
					rule: ' Require a single space or disallow whitespace before the bang of declarations (Autofixable).',
					fix: true,
				},
				'declaration-colon-newline-after': {
					rule: ' Require a newline or disallow whitespace after the colon of declarations (Autofixable).',
					fix: true,
				},
				'declaration-colon-space-after': {
					rule: ' Require a single space or disallow whitespace after the colon of declarations (Autofixable).',
					fix: true,
				},
				'declaration-colon-space-before': {
					rule: ' Require a single space or disallow whitespace before the colon of declarations (Autofixable).',
					fix: true,
				},
				'declaration-empty-line-before': {
					rule: ' Require or disallow an empty line before declarations (Autofixable).',
					fix: true,
				},
				'declaration-block-semicolon-newline-after': {
					rule: ' Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
					fix: true,
				},
				'declaration-block-semicolon-newline-before': {
					rule: ' Require a newline or disallow whitespace before the semicolons of declaration blocks.',
					fix: false,
				},
				'declaration-block-semicolon-space-after': {
					rule: ' Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
					fix: true,
				},
				'declaration-block-semicolon-space-before': {
					rule: ' Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).',
					fix: true,
				},
				'declaration-block-trailing-semicolon': {
					rule: ' Require or disallow a trailing semicolon within declaration blocks (Autofixable).',
					fix: true,
				},
				'block-closing-brace-empty-line-before': {
					rule: ' Require or disallow an empty line before the closing brace of blocks (Autofixable).',
					fix: true,
				},
				'block-closing-brace-newline-after': {
					rule: ' Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).',
					fix: true,
				},
				'block-closing-brace-newline-before': {
					rule: ' Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).',
					fix: true,
				},
				'block-closing-brace-space-after': {
					rule: ' Require a single space or disallow whitespace after the closing brace of blocks.',
					fix: false,
				},
				'block-closing-brace-space-before': {
					rule: ' Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).',
					fix: true,
				},
				'block-opening-brace-newline-after': {
					rule: ' Require a newline after the opening brace of blocks (Autofixable).',
					fix: true,
				},
				'block-opening-brace-newline-before': {
					rule: ' Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).',
					fix: true,
				},
				'block-opening-brace-space-after': {
					rule: ' Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).',
					fix: true,
				},
				'block-opening-brace-space-before': {
					rule: ' Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).',
					fix: true,
				},
				'selector-attribute-brackets-space-inside': {
					rule: ' Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).',
					fix: true,
				},
				'selector-attribute-operator-space-after': {
					rule: ' Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).',
					fix: true,
				},
				'selector-attribute-operator-space-before': {
					rule: ' Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).',
					fix: true,
				},
				'selector-combinator-space-after': {
					rule: ' Require a single space or disallow whitespace after the combinators of selectors (Autofixable).',
					fix: true,
				},
				'selector-combinator-space-before': {
					rule: ' Require a single space or disallow whitespace before the combinators of selectors (Autofixable).',
					fix: true,
				},
				'selector-descendant-combinator-no-non-space': {
					rule: ' Disallow non-space characters for descendant combinators of selectors (Autofixable).',
					fix: true,
				},
				'selector-max-empty-lines': {
					rule: ' Limit the number of adjacent empty lines within selectors (Autofixable).',
					fix: true,
				},
				'selector-pseudo-class-case': {
					rule: ' Specify lowercase or uppercase for pseudo-class selectors (Autofixable).',
					fix: true,
				},
				'selector-pseudo-class-parentheses-space-inside': {
					rule: ' Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).',
					fix: true,
				},
				'selector-pseudo-element-case': {
					rule: ' Specify lowercase or uppercase for pseudo-element selectors (Autofixable).',
					fix: true,
				},
				'selector-list-comma-newline-after': {
					rule: ' Require a newline or disallow whitespace after the commas of selector lists (Autofixable).',
					fix: true,
				},
				'selector-list-comma-newline-before': {
					rule: ' Require a newline or disallow whitespace before the commas of selector lists (Autofixable).',
					fix: true,
				},
				'selector-list-comma-space-after': {
					rule: ' Require a single space or disallow whitespace after the commas of selector lists (Autofixable).',
					fix: true,
				},
				'selector-list-comma-space-before': {
					rule: ' Require a single space or disallow whitespace before the commas of selector lists (Autofixable).',
					fix: true,
				},
				'media-feature-colon-space-after': {
					rule: ' Require a single space or disallow whitespace after the colon in media features (Autofixable).',
					fix: true,
				},
				'media-feature-colon-space-before': {
					rule: ' Require a single space or disallow whitespace before the colon in media features (Autofixable).',
					fix: true,
				},
				'media-feature-name-case': {
					rule: ' Specify lowercase or uppercase for media feature names (Autofixable).',
					fix: true,
				},
				'media-feature-parentheses-space-inside': {
					rule: ' Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).',
					fix: true,
				},
				'media-feature-range-operator-space-after': {
					rule: ' Require a single space or disallow whitespace after the range operator in media features (Autofixable).',
					fix: true,
				},
				'media-feature-range-operator-space-before': {
					rule: ' Require a single space or disallow whitespace before the range operator in media features (Autofixable).',
					fix: true,
				},
				'media-query-list-comma-newline-after': {
					rule: ' Require a newline or disallow whitespace after the commas of media query lists (Autofixable).',
					fix: true,
				},
				'media-query-list-comma-newline-before': {
					rule: ' Require a newline or disallow whitespace before the commas of media query lists.',
					fix: false,
				},
				'media-query-list-comma-space-after': {
					rule: ' Require a single space or disallow whitespace after the commas of media query lists (Autofixable).',
					fix: true,
				},
				'media-query-list-comma-space-before': {
					rule: ' Require a single space or disallow whitespace before the commas of media query lists (Autofixable).',
					fix: true,
				},
				'at-rule-name-case': {
					rule: ' Specify lowercase or uppercase for at-rules names (Autofixable).',
					fix: true,
				},
				'at-rule-name-newline-after': {
					rule: ' Require a newline after at-rule names.',
					fix: false,
				},
				'at-rule-name-space-after': {
					rule: ' Require a single space after at-rule names (Autofixable).',
					fix: true,
				},
				'at-rule-semicolon-newline-after': {
					rule: ' Require a newline after the semicolon of at-rules (Autofixable).',
					fix: true,
				},
				'at-rule-semicolon-space-before': {
					rule: ' Require a single space or disallow whitespace before the semicolons of at-rules.',
					fix: false,
				},
				'indentation': {
					rule: ' Specify indentation (Autofixable).',
					fix: true,
				},
				'linebreaks': {
					rule: ' Specify unix or windows linebreaks (Autofixable).',
					fix: true,
				},
				'max-empty-lines': {
					rule: ' Limit the number of adjacent empty lines (Autofixable).',
					fix: true,
				},
				'max-line-length': {
					rule: ' Limit the length of a line.',
					fix: false,
				},
				'no-eol-whitespace': {
					rule: ' Disallow end-of-line whitespace (Autofixable).',
					fix: true,
				},
				'no-missing-end-of-source-newline': {
					rule: ' Disallow missing end-of-source newlines (Autofixable).',
					fix: true,
				},
				'no-empty-first-line': {
					rule: ' Disallow empty first lines (Autofixable).',
					fix: true,
				},
				'no-extra-semicolons': {
					rule: ' Disallow extra semicolons (Autofixable).',
					fix: true,
				},
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
			//From index 0 to index 83 catagory- Possible Problems
			//From index 84 to index 150 catagory- suggestions
			//From index 150 to index 211 caragory - Layout & Formatting
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
