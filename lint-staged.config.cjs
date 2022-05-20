module.exports = {
	'apps/backend/**/*.{ts,js,cjs}': [
		'eslint -c ./apps/backend/.eslintrc.cjs --ignore-path ./apps/backend/.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/frontend/**/*.{ts,js,cjs}': [
		'eslint -c ./apps/frontend/.eslintrc.cjs --ignore-path ./apps/frontend/.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'!(apps)**/*.{ts,js,cjs}': ['eslint -c ./.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'apps/frontend/src/**/*.scss': 'stylelint --config ./apps/frontend/stylelint.config.cjs --fix',
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c ./inflint.config.ts',
};
