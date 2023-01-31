import { test, expect } from '@playwright/test';

test.describe('Application @app', () => {
	test('application has title', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		await expect(page).toHaveTitle(/Exlint/);
	});
});
