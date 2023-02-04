import { defineConfig } from '@playwright/test';

const configuration = defineConfig({
	testDir: './tests',
	testIgnore: 'scripts',
	globalSetup: './tests/scripts/global-setup.ts',
	globalTeardown: './tests/scripts/global-teardown.ts',
	reporter: [['html', { open: 'never' }]],
	use: {
		testIdAttribute: 'data-testid',
		baseURL: 'http://localhost:8080',
		storageState: './tests/storage/storage-state.json',
	},
});

export default configuration;
