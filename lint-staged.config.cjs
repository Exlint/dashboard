module.exports = {
	'apps/backend/**/*.{ts,js,cjs}': [
		'cd ./apps/backend && eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/cli-backend/**/*.{ts,js,cjs}': [
		'cd ./apps/cli-backend && eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/frontend/**/*.{ts,js,cjs}': [
		'cd ./apps/frontend && eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'!(apps)**/*.{ts,js,cjs}': ['eslint -c ./.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'apps/frontend/src/**/*.scss': 'stylelint --config ./apps/frontend/stylelint.config.cjs --fix',
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c ./inflint.config.ts',
};
