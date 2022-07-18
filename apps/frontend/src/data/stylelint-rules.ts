/* eslint-disable max-lines */

export const Stylelint = {
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
};
