import { Config } from '@exlint.io/inflint';

const inflintConfig: Config = {
	rules: {
		'{scripts,assets,docker}/**/*': [2, 'kebab-case'],
		'**/*.yml': 2,
		'apps/frontend/**/*.css': 2,
		'apps/backend/src/**/*': [2, 'kebab-case.point'],
		'apps/frontend/src/{assets,data,hooks,i18n,interfaces,store,utils,styles}/**/*': [2, 'kebab-case'],
		'apps/frontend/src/{components,pages}/**/*': [2, 'PascalCase.Point'],
	},
};

export default inflintConfig;
