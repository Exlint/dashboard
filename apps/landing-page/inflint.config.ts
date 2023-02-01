import type { Config } from '@exlint.io/inflint';

const inflintConfig: Config = {
	rules: {
		'src/**/*': [2, 'kebab-case'],
		'**/*.yml': 2,
		'static/**/*': [2, 'kebab-case'],
		'docs/**/*': [2, 'kebab-case', { onlyDirectories: true }],
	},
};

export default inflintConfig;
