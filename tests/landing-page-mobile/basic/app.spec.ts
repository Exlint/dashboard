import { test, expect } from '@playwright/test';

test.describe('Application @app-basic', () => {
	test('open source documentations link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const openSourceDocumentationsLinkElement = page.getByTestId(
			'open-source-mobile-documentations-link',
		);

		await expect(openSourceDocumentationsLinkElement).toBeVisible();

		await openSourceDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});
});
