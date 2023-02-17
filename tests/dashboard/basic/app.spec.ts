import { test, expect } from '@playwright/test';

test.describe('Application @app-basic', () => {
	test('application has title', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle(/Exlint/);
	});

	test('compliance center page loads after successful authentication', async ({ page }) => {
		await page.goto('/');

		const navComplianceCenterLinkElement = page.getByTestId('nav-compliance-center-link');

		await expect(navComplianceCenterLinkElement).toBeVisible();
		await expect(navComplianceCenterLinkElement).toHaveClass(/container--active/);
	});

	test('nav documentation link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const navDocumentationsLinkElement = page.getByTestId('nav-documentations-link');

		await expect(navDocumentationsLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await navDocumentationsLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://docs.exlint.io');
	});
});
