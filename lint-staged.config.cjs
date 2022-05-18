module.exports = {
	'apps/backend/**/*.{ts,js,cjs}': ['eslint -c ./apps/backend/.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'apps/frontend/**/*.{ts,js,cjs}': ['eslint -c ./apps/frontend/.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'**/!(apps)/*.{ts,js,cjs}': ['eslint -c ./.eslintrc.cjs --fix', () => 'tsc --noEmit'],
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c ./inflint.config.ts',
};
