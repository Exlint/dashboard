import { defineConfig } from '@playwright/test';

const configuration = defineConfig({
	testDir: './tests',
	testIgnore: 'scripts',
	globalSetup: './tests/scripts/global-setup.ts',
	globalTeardown: './tests/scripts/global-teardown.ts',
	reporter: 'html',
});

export default configuration;
