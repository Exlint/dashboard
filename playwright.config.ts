import { defineConfig, devices } from '@playwright/test';

const configuration = defineConfig({
	globalSetup: './tests/scripts/global-setup.ts',
	globalTeardown: './tests/scripts/global-teardown.ts',
	reporter: [['html', { open: 'never' }]],
	use: { video: 'retain-on-failure' },
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
			name: 'Landing Page Web',
			use: {
				testIdAttribute: 'data-testid',
				baseURL: 'http://localhost:8000',
				...devices['Desktop Chrome'],
			},
			testDir: './tests/landing-page-desktop',
		},
		{
			name: 'Landing Page Mobile',
			use: {
				testIdAttribute: 'data-testid',
				baseURL: 'http://localhost:8000',
				...devices['iPhone 12'],
			},
			testDir: './tests/landing-page-mobile',
		},
	],
});

export default configuration;
