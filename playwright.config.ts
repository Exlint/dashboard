import { defineConfig } from '@playwright/test';

const configuration = defineConfig({
	globalSetup: './tests/scripts/global-setup.ts',
	globalTeardown: './tests/scripts/global-teardown.ts',
	reporter: [['html', { open: 'never' }]],
	projects: [
		{
			name: 'Dashboard',
			use: {
				testIdAttribute: 'data-testid',
				baseURL: 'http://localhost:8080',
				storageState: './tests/dashboard/storage/auth-state.json',
			},
			testDir: './tests/dashboard',
			testIgnore: 'scripts',
		},
		{
			name: 'Landing Page',
			use: {
				testIdAttribute: 'data-testid',
				baseURL: 'http://localhost:8000',
			},
			testDir: './tests/landing-page',
		},
	],
});

export default configuration;
