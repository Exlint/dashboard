const inflintConfig = {
	aliases: {
		'[UIComponent]': `ED([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?`,
	},
	rules: {
		'{scripts,assets,docker/scripts}/**/*': [2, 'kebab-case'],
		'**/*.yml': 2,
		'apps/frontend/**/*.css': 2,
		'apps/backend/src/**/*': [2, 'kebab-case.point'],
		'apps/frontend/src/{assets,data,hooks,i18n,interfaces,store,utils}/**/*': [2, 'kebab-case'],
		'apps/frontend/src/pages/**/*': [2, 'PascalCase.Point'],
		'apps/frontend/src/components/{containers,layout}/**/*.{tsx,scss}': [2, 'PascalCase.Point'],
		'apps/frontend/src/components/ui/*.{tsx,scss}': [2, '[UIComponent]'],
		'apps/frontend/src/components/ui/*': [2, '[UIComponent]', { onlyDirectories: true }],
		'packages/common/src/**/*': [2, 'kebab-case'],
	},
};

module.exports = inflintConfig;
