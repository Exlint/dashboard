import { LibraryCategory } from '../models/library-category';
import { LibraryType } from '../models/library-type';

export const stylelintData = {
	name: 'Stylelint',
	author: 'stylelint.io',
	description:
		'A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.',
	type: [LibraryType.Linters],
	category: [LibraryCategory.Code, LibraryCategory.Styles],
	rules: {
		'Color No Invalid Hex': {
			description: 'Disallow invalid hex colors.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'color-no-invalid-hex',
		},
		'Font Family No Duplicate Names': {
			description: 'Disallow duplicate font family names.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'font-family-no-duplicate-names',
		},
		'Font Family No Missing Generic Family Keyword': {
			description: 'Disallow missing generic families in lists of font family names.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'font-family-no-missing-generic-family-keyword',
		},
		'Named Grid Areas No Invalid': {
			description: 'Disallow invalid named grid areas.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'named-grid-areas-no-invalid',
		},
		'Function Calc No Unspaced Operator': {
			description: 'Disallow an unspaced operator within calc functions.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'function-calc-no-unspaced-operator',
		},
		'Function Linear Gradient No Nonstandard Direction': {
			description:
				'Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'function-linear-gradient-no-nonstandard-direction',
		},
		'Function No Unknown': {
			description: 'Disallow unknown functions.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'function-no-unknown',
		},
		'String No Newline': {
			description: 'Disallow (unescaped) newlines in strings.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'string-no-newline',
		},
		'Unit No Unknown': {
			description: 'Disallow unknown units.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'unit-no-unknown',
		},
		'Custom Property No Missing Var Function': {
			description: 'Disallow missing var function for custom properties.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'custom-property-no-missing-var-function',
		},
		'Property No Unknown': {
			description: 'Disallow unknown properties.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'property-no-unknown',
		},
		'Keyframe Declaration No Important': {
			description: 'Disallow !important within keyframe declarations.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'keyframe-declaration-no-important',
		},
		'Keyframe Block No Duplicate Selectors': {
			description: 'Disallow duplicate selectors within keyframe blocks.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'keyframe-block-no-duplicate-selectors',
		},
		'Declaration Block No Duplicate Custom Properties': {
			description: 'Disallow duplicate custom properties within declaration blocks.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'declaration-block-no-duplicate-custom-properties',
		},
		'Declaration Block No Duplicate Properties': {
			description: 'Disallow duplicate properties within declaration blocks.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'declaration-block-no-duplicate-properties',
		},
		'Declaration Block No Shorthand Property Overrides': {
			description: 'Disallow shorthand properties that override related longhand properties.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'declaration-block-no-shorthand-property-overrides',
		},
		'Block No Empty': {
			description: 'Disallow empty blocks.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'block-no-empty',
		},
		'Selector Pseudo Class No Unknown': {
			description: 'Disallow unknown pseudo-class selectors.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'selector-pseudo-class-no-unknown',
		},
		'Selector Pseudo Element No Unknown': {
			description: 'Disallow unknown pseudo-element selectors.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'selector-pseudo-element-no-unknown',
		},
		'Selector Type No Unknown': {
			description: 'Disallow unknown type selectors.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'selector-type-no-unknown',
		},
		'Media Feature Name No Unknown': {
			description: 'Disallow unknown media feature names.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'media-feature-name-no-unknown',
		},
		'At Rule No Unknown': {
			description: 'Disallow unknown at-rules.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'at-rule-no-unknown',
		},
		'Comment No Empty': {
			description: 'Disallow empty comments.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'comment-no-empty',
		},
		'No Descending Specificity': {
			description:
				'Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'no-descending-specificity',
		},
		'No Duplicate At Import Rules': {
			description: 'Disallow duplicate @import rules within a stylesheet.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'no-duplicate-at-import-rules',
		},
		'No Duplicate Selectors': {
			description: 'Disallow duplicate selectors within a stylesheet.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'no-duplicate-selectors',
		},
		'No Empty Source': {
			description: 'Disallow empty sources.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'no-empty-source',
		},
		'No Invalid Double Slash Comments': {
			description: 'Disallow double-slash comments (//...) which are not supported by CSS.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'no-invalid-double-slash-comments',
		},
		'No Invalid Position At Import Rule': {
			description: 'Disallow invalid position @import rules within a stylesheet.',
			hasAutoFix: false,
			category: 'Avoid Errors',
			configApi: 'no-invalid-position-at-import-rule',
		},
		'Alpha Value Notation': {
			description: 'Specify percentage or number notation for alpha-values (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'alpha-value-notation',
		},
		'Hue Degree Notation': {
			description: 'Specify number or angle notation for degree hues (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'hue-degree-notation',
		},
		'Color Function Notation': {
			description: 'Specify modern or legacy notation for applicable color-functions (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'color-function-notation',
		},
		'Color Hex Alpha': {
			description: 'Require or disallow alpha channel for hex colors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'color-hex-alpha',
		},
		'Color Hex Length': {
			description: 'Specify short or long notation for hex colors (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'color-hex-length',
		},
		'Color Named': {
			description: 'Require (where possible) or disallow named colors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'color-named',
		},
		'Color No Hex': {
			description: 'Disallow hex colors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'color-no-hex',
		},
		'Length Zero No Unit': {
			description: 'Disallow units for zero lengths (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'length-zero-no-unit',
		},
		'Font Family Name Quotes': {
			description:
				'Specify whether or not quotation marks should be used around font family names (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'font-family-name-quotes',
		},
		'Font Weight Notation': {
			description:
				'Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'font-weight-notation',
		},
		'Function Allowed List': {
			description: 'Specify a list of allowed functions.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'function-allowed-list',
		},
		'Function Disallowed List': {
			description: 'Specify a list of disallowed functions.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'function-disallowed-list',
		},
		'Function Url No Scheme Relative': {
			description: 'Disallow scheme-relative urls.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'function-url-no-scheme-relative',
		},
		'Function Url Quotes': {
			description: 'Require or disallow quotes for urls.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'function-url-quotes',
		},
		'Function Url Scheme Allowed List': {
			description: 'Specify a list of allowed URL schemes.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'function-url-scheme-allowed-list',
		},
		'Function Url Scheme Disallowed List': {
			description: 'Specify a list of disallowed URL schemes.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'function-url-scheme-disallowed-list',
		},
		'Import Notation': {
			description: 'Specify string or URL notation for @import rules (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'import-notation',
		},
		'Keyframes Name Pattern': {
			description: 'Specify a pattern for keyframe names.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'keyframes-name-pattern',
		},
		'Number Max Precision': {
			description: 'Limit the number of decimal places allowed in numbers.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'number-max-precision',
		},
		'Time Min Milliseconds': {
			description: 'Specify the minimum number of milliseconds for time values.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'time-min-milliseconds',
		},
		'Unit Allowed List': {
			description: 'Specify a list of allowed units.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'unit-allowed-list',
		},
		'Unit Disallowed List': {
			description: 'Specify a list of disallowed units.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'unit-disallowed-list',
		},
		'Shorthand Property No Redundant Values': {
			description: 'Disallow redundant values in shorthand properties (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'shorthand-property-no-redundant-values',
		},
		'Value No Vendor Prefix': {
			description: 'Disallow vendor prefixes for values (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'value-no-vendor-prefix',
		},
		'Custom Property Pattern': {
			description: 'Specify a pattern for custom properties.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'custom-property-pattern',
		},
		'Property Allowed List': {
			description: 'Specify a list of allowed properties.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'property-allowed-list',
		},
		'Property Disallowed List': {
			description: 'Specify a list of disallowed properties.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'property-disallowed-list',
		},
		'Property No Vendor Prefix': {
			description: 'Disallow vendor prefixes for properties (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'property-no-vendor-prefix',
		},
		'Declaration No Important': {
			description: 'Disallow !important within declarations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-no-important',
		},
		'Declaration Property Max Values': {
			description: 'Limit the number of values for a list of properties within declarations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-property-max-values',
		},
		'Declaration Property Unit Allowed List': {
			description: 'Specify a list of allowed property and unit pairs within declarations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-property-unit-allowed-list',
		},
		'Declaration Property Unit Disallowed List': {
			description: 'Specify a list of disallowed property and unit pairs within declarations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-property-unit-disallowed-list',
		},
		'Declaration Property Value Allowed List': {
			description: 'Specify a list of allowed property and value pairs within declarations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-property-value-allowed-list',
		},
		'Declaration Property Value Disallowed List': {
			description: 'Specify a list of disallowed property and value pairs within declarations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-property-value-disallowed-list',
		},
		'Declaration Block No Redundant Longhand Properties': {
			description: 'Disallow longhand properties that can be combined into one shorthand property.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-block-no-redundant-longhand-properties',
		},
		'Declaration Block Single Line Max Declarations': {
			description: 'Limit the number of declarations within a single-line declaration block.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'declaration-block-single-line-max-declarations',
		},
		'Selector Attribute Name Disallowed List': {
			description: 'Specify a list of disallowed attribute names.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-attribute-name-disallowed-list',
		},
		'Selector Attribute Operator Allowed List': {
			description: 'Specify a list of allowed attribute operators.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-attribute-operator-allowed-list',
		},
		'Selector Attribute Operator Disallowed List': {
			description: 'Specify a list of disallowed attribute operators.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-attribute-operator-disallowed-list',
		},
		'Selector Attribute Quotes': {
			description: 'Require or disallow quotes for attribute values.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-attribute-quotes',
		},
		'Selector Class Pattern': {
			description: 'Specify a pattern for class selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-class-pattern',
		},
		'Selector Combinator Allowed List': {
			description: 'Specify a list of allowed combinators.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-combinator-allowed-list',
		},
		'Selector Combinator Disallowed List': {
			description: 'Specify a list of disallowed combinators.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-combinator-disallowed-list',
		},
		'Selector Disallowed List': {
			description: 'Specify a list of disallowed selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-disallowed-list',
		},
		'Selector Id Pattern': {
			description: 'Specify a pattern for ID selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-id-pattern',
		},
		'Selector Max Attribute': {
			description: 'Limit the number of attribute selectors in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-attribute',
		},
		'Selector Max Class': {
			description: 'Limit the number of classes in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-class',
		},
		'Selector Max Combinators': {
			description: 'Limit the number of combinators in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-combinators',
		},
		'Selector Max Compound Selectors': {
			description: 'Limit the number of compound selectors in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-compound-selectors',
		},
		'Selector Max Id': {
			description: 'Limit the number of ID selectors in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-id',
		},
		'Selector Max Pseudo Class': {
			description: 'Limit the number of pseudo-classes in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-pseudo-class',
		},
		'Selector Max Specificity': {
			description: 'Limit the specificity of selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-specificity',
		},
		'Selector Max Type': {
			description: 'Limit the number of type in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-type',
		},
		'Selector Max Universal': {
			description: 'Limit the number of universal selectors in a selector.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-max-universal',
		},
		'Selector Nested Pattern': {
			description: 'Specify a pattern for the selectors of rules nested within rules.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-nested-pattern',
		},
		'Selector No Qualifying Type': {
			description: 'Disallow qualifying a selector by type.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-no-qualifying-type',
		},
		'Selector No Vendor Prefix': {
			description: 'Disallow vendor prefixes for selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'selector-no-vendor-prefix',
		},
		'Selector Not Notation': {
			description: 'Specify simple or complex notation for',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-not-notation',
		},
		'Selector Pseudo Class Allowed List': {
			description: 'Specify a list of allowed pseudo-class selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-pseudo-class-allowed-list',
		},
		'Selector Pseudo Class Disallowed List': {
			description: 'Specify a list of disallowed pseudo-class selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-pseudo-class-disallowed-list',
		},
		'Selector Pseudo Element Allowed List': {
			description: 'Specify a list of allowed pseudo-element selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-pseudo-element-allowed-list',
		},
		'Selector Pseudo Element Colon Notation': {
			description:
				'Specify single or double colon notation for applicable pseudo-elements (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'selector-pseudo-element-colon-notation',
		},
		'Selector Pseudo Element Disallowed List': {
			description: 'Specify a list of disallowed pseudo-element selectors.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'selector-pseudo-element-disallowed-list',
		},
		'Rule Selector Property Disallowed List': {
			description: 'Specify a list of disallowed properties for selectors within rules.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'rule-selector-property-disallowed-list',
		},
		'Media Feature Name Allowed List': {
			description: 'Specify a list of allowed media feature names.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'media-feature-name-allowed-list',
		},
		'Media Feature Name Disallowed List': {
			description: 'Specify a list of disallowed media feature names.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'media-feature-name-disallowed-list',
		},
		'Media Feature Name No Vendor Prefix': {
			description: 'Disallow vendor prefixes for media feature names (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'media-feature-name-no-vendor-prefix',
		},
		'Media Feature Name Value Allowed List': {
			description: 'Specify a list of allowed media feature name and value pairs.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'media-feature-name-value-allowed-list',
		},
		'Custom Media Pattern': {
			description: 'Specify a pattern for custom media query names.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'custom-media-pattern',
		},
		'At Rule Allowed List': {
			description: 'Specify a list of allowed at-rules.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'at-rule-allowed-list',
		},
		'At Rule Disallowed List': {
			description: 'Specify a list of disallowed at-rules.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'at-rule-disallowed-list',
		},
		'At Rule No Vendor Prefix': {
			description: 'Disallow vendor prefixes for at-rules (Autofixable).',
			hasAutoFix: true,
			category: 'Enforce Conventions',
			configApi: 'at-rule-no-vendor-prefix',
		},
		'At Rule Property Required List': {
			description: 'Specify a list of required properties for an at-rule.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'at-rule-property-required-list',
		},
		'Comment Pattern': {
			description: 'Specify a pattern for comments.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'comment-pattern',
		},
		'Comment Word Disallowed List': {
			description: 'Specify a list of disallowed words within comments.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'comment-word-disallowed-list',
		},
		'Max Nesting Depth': {
			description: 'Limit the depth of nesting.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'max-nesting-depth',
		},
		'No Irregular Whitespace': {
			description: 'Disallow irregular whitespace.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'no-irregular-whitespace',
		},
		'No Unknown Animations': {
			description: 'Disallow unknown animations.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'no-unknown-animations',
		},
		'Unicode Bom': {
			description: 'Require or disallow Unicode BOM.',
			hasAutoFix: false,
			category: 'Enforce Conventions',
			configApi: 'unicode-bom',
		},
		'Value Keyword Case': {
			description: 'Specify lowercase or uppercase for keywords values (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'value-keyword-case',
		},
		'Function Name Case': {
			description: 'Specify lowercase or uppercase for function names (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-name-case',
		},
		'Custom Property Empty Line Before': {
			description: 'Require or disallow an empty line before custom properties (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'custom-property-empty-line-before',
		},
		'Selector Type Case': {
			description: 'Specify lowercase or uppercase for type selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-type-case',
		},
		'Rule Empty Line Before': {
			description: 'Require or disallow an empty line before rules (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'rule-empty-line-before',
		},
		'At Rule Empty Line Before': {
			description: 'Require or disallow an empty line before at-rules (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'at-rule-empty-line-before',
		},
		'Comment Empty Line Before': {
			description: 'Require or disallow an empty line before comments (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'comment-empty-line-before',
		},
		'Comment Whitespace Inside': {
			description: 'Require or disallow whitespace on the inside of comment markers (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'comment-whitespace-inside',
		},
		'Color Hex Case': {
			description: 'Specify lowercase or uppercase for hex colors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'color-hex-case',
		},
		'Function Comma Newline After': {
			description:
				'Require a newline or disallow whitespace after the commas of functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-comma-newline-after',
		},
		'Function Comma Newline Before': {
			description:
				'Require a newline or disallow whitespace before the commas of functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-comma-newline-before',
		},
		'Function Comma Space After': {
			description:
				'Require a single space or disallow whitespace after the commas of functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-comma-space-after',
		},
		'Function Comma Space Before': {
			description:
				'Require a single space or disallow whitespace before the commas of functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-comma-space-before',
		},
		'Function Max Empty Lines': {
			description: 'Limit the number of adjacent empty lines within functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-max-empty-lines',
		},
		'Function Parentheses Newline Inside': {
			description:
				'Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-parentheses-newline-inside',
		},
		'Function Parentheses Space Inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-parentheses-space-inside',
		},
		'Function Whitespace After': {
			description: 'Require or disallow whitespace after functions (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'function-whitespace-after',
		},
		'Number Leading Zero': {
			description:
				'Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'number-leading-zero',
		},
		'Number No Trailing Zeros': {
			description: 'Disallow trailing zeros in numbers (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'number-no-trailing-zeros',
		},
		'String Quotes': {
			description: 'Specify single or double quotes around strings (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'string-quotes',
		},
		'Unit Case': {
			description: 'Specify lowercase or uppercase for units (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'unit-case',
		},
		'Value List Comma Newline After': {
			description:
				'Require a newline or disallow whitespace after the commas of value lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'value-list-comma-newline-after',
		},
		'Value List Comma Newline Before': {
			description: 'Require a newline or disallow whitespace before the commas of value lists.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'value-list-comma-newline-before',
		},
		'Value List Comma Space After': {
			description:
				'Require a single space or disallow whitespace after the commas of value lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'value-list-comma-space-after',
		},
		'Value List Comma Space Before': {
			description:
				'Require a single space or disallow whitespace before the commas of value lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'value-list-comma-space-before',
		},
		'Value List Max Empty Lines': {
			description: 'Limit the number of adjacent empty lines within value lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'value-list-max-empty-lines',
		},
		'Property Case': {
			description: 'Specify lowercase or uppercase for properties (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'property-case',
		},
		'Declaration Bang Space After': {
			description:
				'Require a single space or disallow whitespace after the bang of declarations (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-bang-space-after',
		},
		'Declaration Bang Space Before': {
			description:
				'Require a single space or disallow whitespace before the bang of declarations (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-bang-space-before',
		},
		'Declaration Colon Newline After': {
			description:
				'Require a newline or disallow whitespace after the colon of declarations (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-colon-newline-after',
		},
		'Declaration Colon Space After': {
			description:
				'Require a single space or disallow whitespace after the colon of declarations (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-colon-space-after',
		},
		'Declaration Colon Space Before': {
			description:
				'Require a single space or disallow whitespace before the colon of declarations (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-colon-space-before',
		},
		'Declaration Empty Line Before': {
			description: 'Require or disallow an empty line before declarations (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-empty-line-before',
		},
		'Declaration Block Semicolon Newline After': {
			description:
				'Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-block-semicolon-newline-after',
		},
		'Declaration Block Semicolon Newline Before': {
			description:
				'Require a newline or disallow whitespace before the semicolons of declaration blocks.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'declaration-block-semicolon-newline-before',
		},
		'Declaration Block Semicolon Space After': {
			description:
				'Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-block-semicolon-space-after',
		},
		'Declaration Block Semicolon Space Before': {
			description:
				'Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-block-semicolon-space-before',
		},
		'Declaration Block Trailing Semicolon': {
			description: 'Require or disallow a trailing semicolon within declaration blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'declaration-block-trailing-semicolon',
		},
		'Block Closing Brace Empty Line Before': {
			description:
				'Require or disallow an empty line before the closing brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-closing-brace-empty-line-before',
		},
		'Block Closing Brace Newline After': {
			description:
				'Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-closing-brace-newline-after',
		},
		'Block Closing Brace Newline Before': {
			description:
				'Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-closing-brace-newline-before',
		},
		'Block Closing Brace Space After': {
			description: 'Require a single space or disallow whitespace after the closing brace of blocks.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'block-closing-brace-space-after',
		},
		'Block Closing Brace Space Before': {
			description:
				'Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-closing-brace-space-before',
		},
		'Block Opening Brace Newline After': {
			description: 'Require a newline after the opening brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-opening-brace-newline-after',
		},
		'Block Opening Brace Newline Before': {
			description:
				'Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-opening-brace-newline-before',
		},
		'Block Opening Brace Space After': {
			description:
				'Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-opening-brace-space-after',
		},
		'Block Opening Brace Space Before': {
			description:
				'Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'block-opening-brace-space-before',
		},
		'Selector Attribute Brackets Space Inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-attribute-brackets-space-inside',
		},
		'Selector Attribute Operator Space After': {
			description:
				'Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-attribute-operator-space-after',
		},
		'Selector Attribute Operator Space Before': {
			description:
				'Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-attribute-operator-space-before',
		},
		'Selector Combinator Space After': {
			description:
				'Require a single space or disallow whitespace after the combinators of selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-combinator-space-after',
		},
		'Selector Combinator Space Before': {
			description:
				'Require a single space or disallow whitespace before the combinators of selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-combinator-space-before',
		},
		'Selector Descendant Combinator No Non Space': {
			description:
				'Disallow non-space characters for descendant combinators of selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-descendant-combinator-no-non-space',
		},
		'Selector Max Empty Lines': {
			description: 'Limit the number of adjacent empty lines within selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-max-empty-lines',
		},
		'Selector Pseudo Class Case': {
			description: 'Specify lowercase or uppercase for pseudo-class selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-pseudo-class-case',
		},
		'Selector Pseudo Class Parentheses Space Inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-pseudo-class-parentheses-space-inside',
		},
		'Selector Pseudo Element Case': {
			description: 'Specify lowercase or uppercase for pseudo-element selectors (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-pseudo-element-case',
		},
		'Selector List Comma Newline After': {
			description:
				'Require a newline or disallow whitespace after the commas of selector lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-list-comma-newline-after',
		},
		'Selector List Comma Newline Before': {
			description:
				'Require a newline or disallow whitespace before the commas of selector lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-list-comma-newline-before',
		},
		'Selector List Comma Space After': {
			description:
				'Require a single space or disallow whitespace after the commas of selector lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-list-comma-space-after',
		},
		'Selector List Comma Space Before': {
			description:
				'Require a single space or disallow whitespace before the commas of selector lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'selector-list-comma-space-before',
		},
		'Media Feature Colon Space After': {
			description:
				'Require a single space or disallow whitespace after the colon in media features (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-feature-colon-space-after',
		},
		'Media Feature Colon Space Before': {
			description:
				'Require a single space or disallow whitespace before the colon in media features (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-feature-colon-space-before',
		},
		'Media Feature Name Case': {
			description: 'Specify lowercase or uppercase for media feature names (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-feature-name-case',
		},
		'Media Feature Parentheses Space Inside': {
			description:
				'Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-feature-parentheses-space-inside',
		},
		'Media Feature Range Operator Space After': {
			description:
				'Require a single space or disallow whitespace after the range operator in media features (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-feature-range-operator-space-after',
		},
		'Media Feature Range Operator Space Before': {
			description:
				'Require a single space or disallow whitespace before the range operator in media features (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-feature-range-operator-space-before',
		},
		'Media Query List Comma Newline After': {
			description:
				'Require a newline or disallow whitespace after the commas of media query lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-query-list-comma-newline-after',
		},
		'Media Query List Comma Newline Before': {
			description: 'Require a newline or disallow whitespace before the commas of media query lists.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'media-query-list-comma-newline-before',
		},
		'Media Query List Comma Space After': {
			description:
				'Require a single space or disallow whitespace after the commas of media query lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-query-list-comma-space-after',
		},
		'Media Query List Comma Space Before': {
			description:
				'Require a single space or disallow whitespace before the commas of media query lists (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'media-query-list-comma-space-before',
		},
		'At Rule Name Case': {
			description: 'Specify lowercase or uppercase for at-rules names (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'at-rule-name-case',
		},
		'At Rule Name Newline After': {
			description: 'Require a newline after at-rule names.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'at-rule-name-newline-after',
		},
		'At Rule Name Space After': {
			description: 'Require a single space after at-rule names (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'at-rule-name-space-after',
		},
		'At Rule Semicolon Newline After': {
			description: 'Require a newline after the semicolon of at-rules (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'at-rule-semicolon-newline-after',
		},
		'At Rule Semicolon Space Before': {
			description: 'Require a single space or disallow whitespace before the semicolons of at-rules.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'at-rule-semicolon-space-before',
		},
		'Indentation': {
			description: 'Specify indentation (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'indentation',
		},
		'Linebreaks': {
			description: 'Specify unix or windows linebreaks (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'linebreaks',
		},
		'Max Empty Lines': {
			description: 'Limit the number of adjacent empty lines (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'max-empty-lines',
		},
		'Max Line Length': {
			description: 'Limit the length of a line.',
			hasAutoFix: false,
			category: 'Stylistic Issues',
			configApi: 'max-line-length',
		},
		'No Eol Whitespace': {
			description: 'Disallow end-of-line whitespace (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'no-eol-whitespace',
		},
		'No Missing End Of Source Newline': {
			description: 'Disallow missing end-of-source newlines (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'no-missing-end-of-source-newline',
		},
		'No Empty First Line': {
			description: 'Disallow empty first lines (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'no-empty-first-line',
		},
		'No Extra Semicolons': {
			description: 'Disallow extra semicolons (Autofixable).',
			hasAutoFix: true,
			category: 'Stylistic Issues',
			configApi: 'no-extra-semicolons',
		},
	},
};
