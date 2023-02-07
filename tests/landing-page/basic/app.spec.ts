import { test, expect } from '@playwright/test';

test.describe('Application @app-basic', () => {
	test('application has title', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle(/Exlint/);
	});

	test('header first documentation link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const headerDocumentationsLinkElement = page.getByTestId('header-first-documentations-link');

		await expect(headerDocumentationsLinkElement).toBeVisible();

		await headerDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('header second documentation link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const headerDocumentationsLinkElement = page.getByTestId('header-second-documentations-link');

		await expect(headerDocumentationsLinkElement).toBeVisible();

		await headerDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('header github link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const headerGithubLinkElement = page.getByTestId('header-github-link');

		await expect(headerGithubLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await headerGithubLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://github.com/Exlint/cli');
	});

	test('header login link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const headerLoginLinkElement = page.getByTestId('header-login-link');

		await expect(headerLoginLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await headerLoginLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://app.exlint.io');
	});

	test('intro quick start link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const introQuickStartLinkElement = page.getByTestId('intro-quick-start-link');

		await expect(introQuickStartLinkElement).toBeVisible();

		await introQuickStartLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('empower efficient github link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const empowerEfficientGithubLinkElement = page.getByTestId('empower-efficient-github-link');

		await expect(empowerEfficientGithubLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await empowerEfficientGithubLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://github.com/Exlint/cli');
	});

	test('empower efficient top documentations link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const empowerEfficientDocumentationsLinkElement = page.getByTestId(
			'empower-efficient-top-documentations-link',
		);

		await expect(empowerEfficientDocumentationsLinkElement).toBeVisible();

		await empowerEfficientDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('empower efficient bottom documentations link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const empowerEfficientDocumentationsLinkElement = page.getByTestId(
			'empower-efficient-bottom-documentations-link',
		);

		await expect(empowerEfficientDocumentationsLinkElement).toBeVisible();

		await empowerEfficientDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('open source documentations link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const openSourceDocumentationsLinkElement = page.getByTestId('open-source-documentations-link');

		await expect(openSourceDocumentationsLinkElement).toBeVisible();

		await openSourceDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('footer github link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const footerGithubLinkElement = page.getByTestId('footer-github-link');

		await expect(footerGithubLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await footerGithubLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://github.com/Exlint/cli');
	});

	test('footer get started link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const footerGetStartedLinkElement = page.getByTestId('footer-get-started-link');

		await expect(footerGetStartedLinkElement).toBeVisible();

		await footerGetStartedLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('footer documentations link should navigate to documentations page upon click event', async ({
		page,
	}) => {
		await page.goto('/');

		const footerDocumentationsLinkElement = page.getByTestId('footer-documentations-link');

		await expect(footerDocumentationsLinkElement).toBeVisible();

		await footerDocumentationsLinkElement.click();

		await expect(page).toHaveURL('https://docs.exlint.io');
	});

	test('footer login link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const footerLoginLinkElement = page.getByTestId('footer-login-link');

		await expect(footerLoginLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await footerLoginLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL('https://app.exlint.io');
	});

	test('footer terms of use link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const footerTermsOfUseLinkElement = page.getByTestId('footer-terms-of-use-link');

		await expect(footerTermsOfUseLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await footerTermsOfUseLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();
		await expect(newTab).toHaveURL(
			'https://github.com/Exlint/usage-policies/blob/main/terms-of-service.mdx',
		);
	});

	test('footer privacy link should open new tab upon click event', async ({ page, context }) => {
		await page.goto('/');

		const footerPrivacyLinkElement = page.getByTestId('footer-privacy-link');

		await expect(footerPrivacyLinkElement).toBeVisible();

		const tabPromise = context.waitForEvent('page');

		await footerPrivacyLinkElement.click();

		const newTab = await tabPromise;

		await newTab.waitForLoadState();

		await expect(newTab).toHaveURL(
			'https://github.com/Exlint/usage-policies/blob/main/privacy-policy.mdx',
		);
	});
});
