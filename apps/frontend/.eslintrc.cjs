module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['../../.eslintrc.cjs'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['jsx-a11y', 'react', 'react-hooks', 'i18next'],
	rules: {
		'jsx-quotes': ['error', 'prefer-double'],
		'curly': ['error', 'all'],

		'jsx-a11y/alt-text': 'error',
		'jsx-a11y/html-has-lang': 'error',
		'jsx-a11y/img-redundant-alt': [
			'error',
			{
				components: ['Image'],
			},
		],
		'jsx-a11y/lang': 'error',
		'jsx-a11y/no-redundant-roles': 'error',

		'react/jsx-indent': 'off',
		'react/jsx-fragments': 'error',
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			},
		],
		'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
		'react/jsx-sort-props': ['error', { callbacksLast: true, noSortAlphabetically: true }],
		'react/jsx-props-no-spreading': ['error', { exceptions: ['Component'] }],
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-pascal-case': 'error',
		'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-no-script-url': 'error',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'never' } }],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-boolean-value': ['error', 'never'],
		'react/self-closing-comp': 'error',
		'react/void-dom-elements-no-children': 'error',
		'react/style-prop-object': 'error',
		'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
		'react/button-has-type': 'error',
		'react/destructuring-assignment': ['error', 'never'],
		'react/display-name': ['error', { ignoreTranspilerName: true }],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/no-children-prop': ['error'],
		'react/no-deprecated': ['error'],
		'react/no-danger-with-children': ['error'],
		'react/no-multi-comp': ['error'],
		'react/no-unescaped-entities': ['error'],
		'react/no-unknown-property': ['error'],
		'react/prefer-read-only-props': ['error'],
		'react/react-in-jsx-scope': ['error'],
		'react/jsx-handler-names': ['error', { eventHandlerPrefix: false }],
		'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true }],
		'react/jsx-max-depth': ['error', { max: 10 }],
		'react/jsx-no-duplicate-props': ['error'],

		'react-hooks/rules-of-hooks': ['error'],

		'i18next/no-literal-string': 2,
	},
	overrides: [
		{
			files: ['./src/assets/icons.ts', './src/data/**/*.ts', './src/i18n/en.ts'],
			rules: {
				'max-lines': 'off',
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
