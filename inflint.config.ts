import { Config } from 'inflint';

const inflintConfig: Config = {
	rules: {
		'{scripts,assets}/**/*': [2, 'kebab-case'],
		'**/*.yml': 2,
		'apps/frontend/**/*.css': 2,
		'apps/backend/src/**/*': [2, 'kebab-case.point'],
	},
};

export default inflintConfig;
