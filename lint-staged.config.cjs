module.exports = {
	'apps/backend/**/*.{ts,js,cjs}': [
		'./apps/backend/node_modules/.bin/eslint -c ./apps/backend/.eslintrc.cjs --ignore-path ./apps/backend/.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/cli-backend/**/*.{ts,js,cjs}': [
		'./apps/cli-backend/node_modules/.bin/eslint -c ./apps/cli-backend/.eslintrc.cjs --ignore-path ./apps/cli-backend/.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/frontend/**/*.{ts,js,cjs}': [
		'./apps/frontend/node_modules/.bin/eslint -c ./apps/frontend/.eslintrc.cjs --ignore-path ./apps/frontend/.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'!(apps)**/*.{ts,js,cjs}': ['eslint -c ./.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'apps/frontend/src/**/*.scss': 'stylelint --config ./apps/frontend/stylelint.config.cjs --fix',
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c ./inflint.config.ts',
};
