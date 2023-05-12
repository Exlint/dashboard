module.exports = {
	'apps/backend/**/*.ts': [
		'pnpm --filter backend exec eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/cli-backend/**/*.ts': [
		'pnpm --filter cli-backend exec eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'apps/frontend/**/*.ts': [
		'pnpm --filter frontend exec eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'packages/common/**/*.ts': [
		'pnpm --filter common exec eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix',
		() => 'tsc --noEmit',
	],
	'!({apps,packages})**/*.{ts,js,cjs}': ['eslint -c ./.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'apps/frontend/src/**/*.scss': 'stylelint --config ./apps/frontend/stylelint.config.cjs --fix',
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c ./inflint.config.cjs',
};
