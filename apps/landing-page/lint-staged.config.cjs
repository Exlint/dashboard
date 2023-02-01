module.exports = {
	'**/*.{ts,js,json,mdx,css}': 'prettier --write',
	'**/*': 'inflint -c inflint.config.ts',
};
