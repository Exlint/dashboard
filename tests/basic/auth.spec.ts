import { test, expect } from '@playwright/test';

test.describe('Auth page @auth-page', () => {
	test('auth page should have brand logo', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const brandLogoElement = page.locator("[data-test-id='auth-brand-logo']");

		await expect(brandLogoElement).toBeVisible();
	});

	test('auth page should have main header', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const mainHeaderElement = page.locator("[data-test-id='auth-main-header']");

		await expect(mainHeaderElement).toBeVisible();
	});

	test('auth page should have sub header', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const subHeaderElement = page.locator("[data-test-id='auth-sub-header']");

		await expect(subHeaderElement).toBeVisible();
	});

	test('auth page should GitHub authentication button', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const gitHubAuthenticationButtonElement = page.locator("[data-test-id='auth-github-auth-button']");

		await expect(gitHubAuthenticationButtonElement).toBeVisible();
	});

	test('auth page should have Google authentication button', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const googleAuthenticationButtonElement = page.locator("[data-test-id='auth-google-auth-button']");

		await expect(googleAuthenticationButtonElement).toBeVisible();
	});

	test('auth page should have terms of service link', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const googleAuthenticationButtonElement = page.locator("[data-test-id='auth-terms-of-service-link']");

		await expect(googleAuthenticationButtonElement).toBeVisible();
	});

	test('auth page should have privacy policy link', async ({ page }) => {
		await page.goto('http://localhost:8080/');

		const googleAuthenticationButtonElement = page.locator("[data-test-id='auth-privacy-policy-link']");

		await expect(googleAuthenticationButtonElement).toBeVisible();
	});
});
