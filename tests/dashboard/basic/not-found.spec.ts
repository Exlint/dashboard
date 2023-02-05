import { test, expect } from '@playwright/test';

test.describe('Not Found page @not-found-basic', () => {
	test('nav documentation link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/not-found');

		const notFoundNavDocumentationsLinkElement = page.getByTestId('not-found-nav-documentations-link');

		await expect(notFoundNavDocumentationsLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await notFoundNavDocumentationsLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://docs.exlint.io');
	});
});
