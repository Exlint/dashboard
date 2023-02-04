import { test, expect } from '@playwright/test';

test.describe('Application @app-basic', () => {
	test('application has title', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle(/Exlint/);
	});

	test.only('group center page loads after successful authentication', async ({ page }) => {
		await page.goto('/');

		const navElement = page.getByTestId('nav');

		await expect(navElement).toBeVisible();
		await expect(page).toHaveURL('/');
	});
});
