module.exports = {
	'apps/backend/**/*.{ts,js,cjs}': [
		'./apps/backend/node_modules/.bin/eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/cli-backend/**/*.{ts,js,cjs}': [
		'./apps/cli-backend/node_modules/.bin/eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/frontend/**/*.{ts,js,cjs}': [
		'./apps/frontend/node_modules/.bin/eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'!(apps)**/*.{ts,js,cjs}': ['eslint -c ./.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'apps/frontend/src/**/*.scss': 'stylelint --config ./apps/frontend/stylelint.config.cjs --fix',
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c ./inflint.config.ts',
};
