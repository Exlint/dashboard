module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recess-order',
		'stylelint-config-prettier-scss',
	],
	rules: {
		'selector-class-pattern': [
			'^[a-z][A-Za-z0-9]*((--([a-z][A-Za-z0-9]*)(__([a-z][A-Za-z0-9]*))?)|(__([a-z][A-Za-z0-9]*)(--([a-z][A-Za-z0-9]*))?))?$',
			{ resolveNestedSelectors: true, message: 'Expected class selector to be camel case' },
		],
		'value-no-vendor-prefix': null,
		'selector-id-pattern': null,
		'color-named': ['never'],
		'declaration-block-no-duplicate-properties': [true],

		'scss/at-import-partial-extension': null,
	},
};
