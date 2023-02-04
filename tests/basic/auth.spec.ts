import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Auth page @auth-page-basic', () => {
	test('auth page should have brand logo', async ({ page }) => {
		await page.goto('/');

		const brandLogoElement = page.getByTestId('auth-brand-logo');

		await expect(brandLogoElement).toBeVisible();
	});

	test('auth page should have main header', async ({ page }) => {
		await page.goto('/');

		const mainHeaderElement = page.getByTestId('auth-main-header');

		await expect(mainHeaderElement).toBeVisible();
	});

	test('auth page should have sub header', async ({ page }) => {
		await page.goto('/');

		const subHeaderElement = page.getByTestId('auth-sub-header');

		await expect(subHeaderElement).toBeVisible();
	});

	test('auth page should GitHub authentication button', async ({ page }) => {
		await page.goto('/');

		const gitHubAuthenticationButtonElement = page.getByTestId('auth-github-auth-button');

		await expect(gitHubAuthenticationButtonElement).toBeVisible();
	});

	test('auth page should have terms of service link', async ({ page }) => {
		await page.goto('/');

		const authTermsOfServiceLinkElement = page.getByTestId('auth-terms-of-service-link');

		await expect(authTermsOfServiceLinkElement).toBeVisible();
	});

	test('auth page should have privacy policy link', async ({ page }) => {
		await page.goto('/');

		const authPrivacyPolicyLinkElement = page.getByTestId('auth-privacy-policy-link');

		await expect(authPrivacyPolicyLinkElement).toBeVisible();
	});
});
