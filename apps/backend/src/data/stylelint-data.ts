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
		extends: {
			title: 'Extends',
			description: 'You can extend an existing configuration.',
			type: 'multi',
			options: ['stylelint-config-recommended', 'stylelint-config-standard'],
		},
		defaultSeverity: {
			title: 'Default Severity',
			description:
				'You can set the default severity level for all rules that do not have a severity specified in their secondary options.',
			type: 'select',
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
			description: 'Ignore stylelint-disable (e.g. /* stylelint-disable block-no-empty */) comments.',
			type: 'boolean',
		},
		ignoreFiles: {
			title: 'Ignore Files',
			description: 'You can provide a glob or array of globs to ignore specific files.',
			type: 'multi',
			options: [],
		},
	},
	rules: {
		'color-no-invalid-hex': {
			description: 'Disallow invalid hex colors.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'font-family-no-duplicate-names': {
			description: 'Disallow duplicate font family names.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'font-family-no-missing-generic-family-keyword': {
			description: 'Disallow missing generic families in lists of font family names.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'named-grid-areas-no-invalid': {
			description: 'Disallow invalid named grid areas.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'function-calc-no-unspaced-operator': {
			description: 'Disallow an unspaced operator within calc functions.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'function-linear-gradient-no-nonstandard-direction': {
			description:
				'Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'function-no-unknown': {
			description: 'Disallow unknown functions.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'string-no-newline': {
			description: 'Disallow (unescaped) newlines in strings.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'unit-no-unknown': {
			description: 'Disallow unknown units.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'custom-property-no-missing-var-function': {
			description: 'Disallow missing var function for custom properties.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'property-no-unknown': {
			description: 'Disallow unknown properties.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'keyframe-declaration-no-important': {
			description: 'Disallow !important within keyframe declarations.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'keyframe-block-no-duplicate-selectors': {
			description: 'Disallow duplicate selectors within keyframe blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'declaration-block-no-duplicate-custom-properties': {
			description: 'Disallow duplicate custom properties within declaration blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'declaration-block-no-duplicate-properties': {
			description: 'Disallow duplicate properties within declaration blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'declaration-block-no-shorthand-property-overrides': {
			description: 'Disallow shorthand properties that override related longhand properties.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'block-no-empty': {
			description: 'Disallow empty blocks.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'selector-pseudo-class-no-unknown': {
			description: 'Disallow unknown pseudo-class selectors.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'selector-pseudo-element-no-unknown': {
			description: 'Disallow unknown pseudo-element selectors.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'selector-type-no-unknown': {
			description: 'Disallow unknown type selectors.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'media-feature-name-no-unknown': {
			description: 'Disallow unknown media feature names.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'at-rule-no-unknown': {
			description: 'Disallow unknown at-rules.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'comment-no-empty': {
			description: 'Disallow empty comments.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'no-descending-specificity': {
			description:
				'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'no-duplicate-at-import-rules': {
			description: 'Disallow duplicate @use rules within a stylesheet.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'no-duplicate-selectors': {
			description: 'Disallow duplicate selectors within a stylesheet.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'no-empty-source': {
			description: 'Disallow empty sources.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'no-invalid-double-slash-comments': {
			description: 'Disallow double-slash comments (//...) which are not supported by CSS.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'no-invalid-position-at-import-rule': {
			description: 'Disallow invalid position @use rules within a stylesheet.',
			hasAutofix: false,
			category: 'Avoid Errors',
		},
		'alpha-value-notation': {
			description: 'Specify percentage or number notation for alpha-values (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'hue-degree-notation': {
			description: 'Specify number or angle notation for degree hues (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'color-function-notation': {
			description: 'Specify modern or legacy notation for applicable color-functions (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'color-hex-alpha': {
			description: 'Require or disallow alpha channel for hex colors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'color-hex-length': {
			description: 'Specify short or long notation for hex colors (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'color-named': {
			description: 'Require (where possible) or disallow named colors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'color-no-hex': {
			description: 'Disallow hex colors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'length-zero-no-unit': {
			description: 'Disallow units for zero lengths (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'font-family-name-quotes': {
			description:
				'Specify whether or not quotation marks should be used around font family names (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'font-weight-notation': {
			description:
				'Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'function-allowed-list': {
			description: 'Specify a list of allowed functions.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'function-disallowed-list': {
			description: 'Specify a list of disallowed functions.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'function-url-no-scheme-relative': {
			description: 'Disallow scheme-relative urls.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'function-url-quotes': {
			description: 'Require or disallow quotes for urls.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'function-url-scheme-allowed-list': {
			description: 'Specify a list of allowed URL schemes.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'function-url-scheme-disallowed-list': {
			description: 'Specify a list of disallowed URL schemes.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'import-notation': {
			description: 'Specify string or URL notation for @use rules (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'keyframes-name-pattern': {
			description: 'Specify a pattern for keyframe names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'number-max-precision': {
			description: 'Limit the number of decimal places allowed in numbers.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'time-min-milliseconds': {
			description: 'Specify the minimum number of milliseconds for time values.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'unit-allowed-list': {
			description: 'Specify a list of allowed units.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'unit-disallowed-list': {
			description: 'Specify a list of disallowed units.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'shorthand-property-no-redundant-values': {
			description: 'Disallow redundant values in shorthand properties (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'value-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for values (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'custom-property-pattern': {
			description: 'Specify a pattern for custom properties.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'property-allowed-list': {
			description: 'Specify a list of allowed properties.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'property-disallowed-list': {
			description: 'Specify a list of disallowed properties.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'property-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for properties (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'declaration-no-important': {
			description: 'Disallow !important within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-property-max-values': {
			description: 'Limit the number of values for a list of properties within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-property-unit-allowed-list': {
			description: 'Specify a list of allowed property and unit pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-property-unit-disallowed-list': {
			description: 'Specify a list of disallowed property and unit pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-property-value-allowed-list': {
			description: 'Specify a list of allowed property and value pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-property-value-disallowed-list': {
			description: 'Specify a list of disallowed property and value pairs within declarations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-block-no-redundant-longhand-properties': {
			description: 'Disallow longhand properties that can be combined into one shorthand property.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'declaration-block-single-line-max-declarations': {
			description: 'Limit the number of declarations within a single-line declaration block.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-attribute-name-disallowed-list': {
			description: 'Specify a list of disallowed attribute names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-attribute-operator-allowed-list': {
			description: 'Specify a list of allowed attribute operators.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-attribute-operator-disallowed-list': {
			description: 'Specify a list of disallowed attribute operators.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-attribute-quotes': {
			description: 'Require or disallow quotes for attribute values.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-class-pattern': {
			description: 'Specify a pattern for class selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-combinator-allowed-list': {
			description: 'Specify a list of allowed combinators.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-combinator-disallowed-list': {
			description: 'Specify a list of disallowed combinators.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-disallowed-list': {
			description: 'Specify a list of disallowed selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-id-pattern': {
			description: 'Specify a pattern for ID selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-attribute': {
			description: 'Limit the number of attribute selectors in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-class': {
			description: 'Limit the number of classes in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-combinators': {
			description: 'Limit the number of combinators in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-compound-selectors': {
			description: 'Limit the number of compound selectors in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-id': {
			description: 'Limit the number of ID selectors in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-pseudo-class': {
			description: 'Limit the number of pseudo-classes in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-specificity': {
			description: 'Limit the specificity of selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-type': {
			description: 'Limit the number of type in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-max-universal': {
			description: 'Limit the number of universal selectors in a selector.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-nested-pattern': {
			description: 'Specify a pattern for the selectors of rules nested within rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-no-qualifying-type': {
			description: 'Disallow qualifying a selector by type.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for selectors (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'selector-not-notation': {
			description: 'Specify simple or complex notation for',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-pseudo-class-allowed-list': {
			description: 'Specify a list of allowed pseudo-class selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-pseudo-class-disallowed-list': {
			description: 'Specify a list of disallowed pseudo-class selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-pseudo-element-allowed-list': {
			description: 'Specify a list of allowed pseudo-element selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'selector-pseudo-element-colon-notation': {
			description:
				'Specify single or double colon notation for applicable pseudo-elements (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'selector-pseudo-element-disallowed-list': {
			description: 'Specify a list of disallowed pseudo-element selectors.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'rule-selector-property-disallowed-list': {
			description: 'Specify a list of disallowed properties for selectors within rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'media-feature-name-allowed-list': {
			description: 'Specify a list of allowed media feature names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'media-feature-name-disallowed-list': {
			description: 'Specify a list of disallowed media feature names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'media-feature-name-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for media feature names (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'media-feature-name-value-allowed-list': {
			description: 'Specify a list of allowed media feature name and value pairs.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'custom-media-pattern': {
			description: 'Specify a pattern for custom media query names.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'at-rule-allowed-list': {
			description: 'Specify a list of allowed at-rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'at-rule-disallowed-list': {
			description: 'Specify a list of disallowed at-rules.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'at-rule-no-vendor-prefix': {
			description: 'Disallow vendor prefixes for at-rules (Autofixable).',
			hasAutofix: true,
			category: 'Enforce Conventions',
		},
		'at-rule-property-required-list': {
			description: 'Specify a list of required properties for an at-rule.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'comment-pattern': {
			description: 'Specify a pattern for comments.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'comment-word-disallowed-list': {
			description: 'Specify a list of disallowed words within comments.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'max-nesting-depth': {
			description: 'Limit the depth of nesting.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'no-irregular-whitespace': {
			description: 'Disallow irregular whitespace.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'no-unknown-animations': {
			description: 'Disallow unknown animations.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'unicode-bom': {
			description: 'Require or disallow Unicode BOM.',
			hasAutofix: false,
			category: 'Enforce Conventions',
		},
		'value-keyword-case': {
			description: 'Specify lowercase or uppercase for keywords values (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-name-case': {
			description: 'Specify lowercase or uppercase for function names (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'custom-property-empty-line-before': {
			description: 'Require or disallow an empty line before custom properties (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-type-case': {
			description: 'Specify lowercase or uppercase for type selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'rule-empty-line-before': {
			description: 'Require or disallow an empty line before rules (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'at-rule-empty-line-before': {
			description: 'Require or disallow an empty line before at-rules (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'comment-empty-line-before': {
			description: 'Require or disallow an empty line before comments (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'comment-whitespace-inside': {
			description: 'Require or disallow whitespace on the inside of comment markers (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'color-hex-case': {
			description: 'Specify lowercase or uppercase for hex colors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-comma-newline-after': {
			description:
				'Require a newline or disallow whitespace after the commas of functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-comma-newline-before': {
			description:
				'Require a newline or disallow whitespace before the commas of functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-comma-space-after': {
			description:
				'Require a single space or disallow whitespace after the commas of functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-comma-space-before': {
			description:
				'Require a single space or disallow whitespace before the commas of functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-max-empty-lines': {
			description: 'Limit the number of adjacent empty lines within functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-parentheses-newline-inside': {
			description:
				'Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-parentheses-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'function-whitespace-after': {
			description: 'Require or disallow whitespace after functions (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'number-leading-zero': {
			description:
				'Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'number-no-trailing-zeros': {
			description: 'Disallow trailing zeros in numbers (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'string-quotes': {
			description: 'Specify single or double quotes around strings (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'unit-case': {
			description: 'Specify lowercase or uppercase for units (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'value-list-comma-newline-after': {
			description:
				'Require a newline or disallow whitespace after the commas of value lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'value-list-comma-newline-before': {
			description: 'Require a newline or disallow whitespace before the commas of value lists.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'value-list-comma-space-after': {
			description:
				'Require a single space or disallow whitespace after the commas of value lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'value-list-comma-space-before': {
			description:
				'Require a single space or disallow whitespace before the commas of value lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'value-list-max-empty-lines': {
			description: 'Limit the number of adjacent empty lines within value lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'property-case': {
			description: 'Specify lowercase or uppercase for properties (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-bang-space-after': {
			description:
				'Require a single space or disallow whitespace after the bang of declarations (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-bang-space-before': {
			description:
				'Require a single space or disallow whitespace before the bang of declarations (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-colon-newline-after': {
			description:
				'Require a newline or disallow whitespace after the colon of declarations (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-colon-space-after': {
			description:
				'Require a single space or disallow whitespace after the colon of declarations (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-colon-space-before': {
			description:
				'Require a single space or disallow whitespace before the colon of declarations (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-empty-line-before': {
			description: 'Require or disallow an empty line before declarations (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-block-semicolon-newline-after': {
			description:
				'Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-block-semicolon-newline-before': {
			description:
				'Require a newline or disallow whitespace before the semicolons of declaration blocks.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'declaration-block-semicolon-space-after': {
			description:
				'Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-block-semicolon-space-before': {
			description:
				'Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'declaration-block-trailing-semicolon': {
			description: 'Require or disallow a trailing semicolon within declaration blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-closing-brace-empty-line-before': {
			description:
				'Require or disallow an empty line before the closing brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-closing-brace-newline-after': {
			description:
				'Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-closing-brace-newline-before': {
			description:
				'Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-closing-brace-space-after': {
			description: 'Require a single space or disallow whitespace after the closing brace of blocks.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'block-closing-brace-space-before': {
			description:
				'Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-opening-brace-newline-after': {
			description: 'Require a newline after the opening brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-opening-brace-newline-before': {
			description:
				'Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-opening-brace-space-after': {
			description:
				'Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'block-opening-brace-space-before': {
			description:
				'Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-attribute-brackets-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-attribute-operator-space-after': {
			description:
				'Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-attribute-operator-space-before': {
			description:
				'Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-combinator-space-after': {
			description:
				'Require a single space or disallow whitespace after the combinators of selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-combinator-space-before': {
			description:
				'Require a single space or disallow whitespace before the combinators of selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-descendant-combinator-no-non-space': {
			description:
				'Disallow non-space characters for descendant combinators of selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-max-empty-lines': {
			description: 'Limit the number of adjacent empty lines within selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-pseudo-class-case': {
			description: 'Specify lowercase or uppercase for pseudo-class selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-pseudo-class-parentheses-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-pseudo-element-case': {
			description: 'Specify lowercase or uppercase for pseudo-element selectors (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-list-comma-newline-after': {
			description:
				'Require a newline or disallow whitespace after the commas of selector lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-list-comma-newline-before': {
			description:
				'Require a newline or disallow whitespace before the commas of selector lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-list-comma-space-after': {
			description:
				'Require a single space or disallow whitespace after the commas of selector lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'selector-list-comma-space-before': {
			description:
				'Require a single space or disallow whitespace before the commas of selector lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-feature-colon-space-after': {
			description:
				'Require a single space or disallow whitespace after the colon in media features (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-feature-colon-space-before': {
			description:
				'Require a single space or disallow whitespace before the colon in media features (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-feature-name-case': {
			description: 'Specify lowercase or uppercase for media feature names (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-feature-parentheses-space-inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-feature-range-operator-space-after': {
			description:
				'Require a single space or disallow whitespace after the range operator in media features (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-feature-range-operator-space-before': {
			description:
				'Require a single space or disallow whitespace before the range operator in media features (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-query-list-comma-newline-after': {
			description:
				'Require a newline or disallow whitespace after the commas of media query lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-query-list-comma-newline-before': {
			description: 'Require a newline or disallow whitespace before the commas of media query lists.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'media-query-list-comma-space-after': {
			description:
				'Require a single space or disallow whitespace after the commas of media query lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'media-query-list-comma-space-before': {
			description:
				'Require a single space or disallow whitespace before the commas of media query lists (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'at-rule-name-case': {
			description: 'Specify lowercase or uppercase for at-rules names (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'at-rule-name-newline-after': {
			description: 'Require a newline after at-rule names.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'at-rule-name-space-after': {
			description: 'Require a single space after at-rule names (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'at-rule-semicolon-newline-after': {
			description: 'Require a newline after the semicolon of at-rules (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'at-rule-semicolon-space-before': {
			description: 'Require a single space or disallow whitespace before the semicolons of at-rules.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'indentation': {
			description: 'Specify indentation (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'linebreaks': {
			description: 'Specify unix or windows linebreaks (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'max-empty-lines': {
			description: 'Limit the number of adjacent empty lines (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'max-line-length': {
			description: 'Limit the length of a line.',
			hasAutofix: false,
			category: 'Stylistic Issues',
		},
		'no-eol-whitespace': {
			description: 'Disallow end-of-line whitespace (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'no-missing-end-of-source-newline': {
			description: 'Disallow missing end-of-source newlines (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'no-empty-first-line': {
			description: 'Disallow empty first lines (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
		'no-extra-semicolons': {
			description: 'Disallow extra semicolons (Autofixable).',
			hasAutofix: true,
			category: 'Stylistic Issues',
		},
	},
};
