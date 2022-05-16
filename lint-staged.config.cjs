module.exports = {
	'**/*.{ts,js,cjs}': ['eslint --fix', () => 'tsc --noEmit'],
	'**/*.ts': () => 'tsc --noEmit',
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*': 'inflint -c inflint.config.ts',
};
