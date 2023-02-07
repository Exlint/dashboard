import { test, expect } from '@playwright/test';

test.describe('Application @app-basic', () => {
	test('application has title', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle(/Exlint/);
	});
});
