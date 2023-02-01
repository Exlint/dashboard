module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recess-order',
		'stylelint-config-prettier-scss',
	],
	plugins: ['stylelint-declaration-strict-value'],
	rules: {
		'selector-class-pattern': [
			'^[a-z][A-Za-z0-9]*((--([a-z][A-Za-z0-9]*)(__([a-z][A-Za-z0-9]*))?)|(__([a-z][A-Za-z0-9]*)(--([a-z][A-Za-z0-9]*))?))?$',
			{ resolveNestedSelectors: true, message: 'Expected class selector to be camel case' },
		],
		'value-no-vendor-prefix': null,
		'selector-id-pattern': null,
		'color-named': ['never'],
		'declaration-block-no-duplicate-properties': [true],
		'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hwb'],
		'property-disallowed-list': ['/.*(right|left).*/'],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'export'],
			},
		],

		'scss/at-import-partial-extension': null,
		'scss/percent-placeholder-pattern':
			/^_[a-z][a-z0-9]*(([A-Z][a-z0-9]+)*[A-Z]?|([a-z0-9]+[A-Z])*|[A-Z])$/,
		'scale-unlimited/declaration-strict-value': [
			['/color/', '/padding/', 'top', 'bottom', '/margin/', 'font-size', 'fill', '/gap/'],
			{ ignoreVariables: false, ignoreValues: ['transparent', '/rem/', '0', 'auto'] },
		],
	},
};
