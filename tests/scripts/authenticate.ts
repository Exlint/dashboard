import { chromium } from '@playwright/test';
import totp from 'totp-generator';

const PreTestsAuthentication = async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage({ baseURL: 'http://localhost:8080' });

	await page.goto('/');
	await page.getByTestId('auth-github-auth-button').click();

	await page.getByLabel('Username or email address').fill(process.env.AUTOMATION_GITHUB_EMAIL);
	await page.getByLabel('Password').fill(process.env.AUTOMATION_GITHUB_PASSWORD);
	await page.getByRole('button', { name: 'Sign in' }).click();

	const totpToken = totp(process.env.AUTOMATION_GITHUB_TOTP_KEY);

	await page.getByPlaceholder('XXXXXX').fill(totpToken);

	/**
	 * * GitHub may automatically "click" on verify, in that case, the page navigates,
	 * * and an error occurred if testing non-existent element anymore
	 */
	const verifyElement = page.getByRole('button', { name: /^Verify$/ });
	const shouldVerify = await verifyElement.isVisible().catch(() => false);

	if (shouldVerify) {
		await verifyElement.click();
	}

	/**
	 * * GitHub may automatically "click" on verify, in that case, the page navigates,
	 * * and an error occurred if testing non-existent element anymore
	 */
	const errorElement = page.getByRole('alert', { name: 'Two-factor authentication failed' });
	const shouldVerifyAgain = await errorElement.isVisible().catch(() => false);

	if (shouldVerifyAgain) {
		const totpToken = totp(process.env.AUTOMATION_GITHUB_TOTP_KEY);

		await page.getByPlaceholder('XXXXXX').fill(totpToken);

		/**
		 * * GitHub may automatically "click" on verify, in that case, the page navigates,
		 * * and an error occurred if testing non-existent element anymore
		 */
		const verifyElement = page.getByRole('button', { name: 'Verify' });
		const shouldVerify = await verifyElement.isVisible().catch(() => false);

		if (shouldVerify) {
			await verifyElement.click();
		}
	}

	const verify2FANowElement = page.getByRole('button', { name: 'Verify 2FA now' });
	const shouldVerify2FANow = await verify2FANowElement.isVisible().catch(() => false);

	if (shouldVerify2FANow) {
		await verify2FANowElement.click();

		const confirmElement = page.getByRole('button', { name: 'Confirm' });
		const shouldConfirm = await confirmElement.isVisible().catch(() => false);

		if (shouldConfirm) {
			await confirmElement.click();
		}

		const totpToken = totp(process.env.AUTOMATION_GITHUB_TOTP_KEY);

		await page.getByPlaceholder('XXXXXX').fill(totpToken);

		/**
		 * * GitHub may automatically "click" on verify, in that case, the page navigates,
		 * * and an error occurred if testing non-existent element anymore
		 */
		const verify2FAElement = page.getByRole('button', { name: /^Verify$/ });
		const shouldVerify2FA = await verify2FAElement.isVisible().catch(() => false);

		if (shouldVerify2FA) {
			await verifyElement.click();
		}

		/**
		 * * GitHub may automatically "click" on verify, in that case, the page navigates,
		 * * and an error occurred if testing non-existent element anymore
		 */
		const errorElement = page.getByRole('alert', { name: 'Two-factor authentication failed' });
		const shouldVerifyAgain = await errorElement.isVisible().catch(() => false);

		if (shouldVerifyAgain) {
			const totpToken = totp(process.env.AUTOMATION_GITHUB_TOTP_KEY);

			await page.getByPlaceholder('XXXXXX').fill(totpToken);

			/**
			 * * GitHub may automatically "click" on verify, in that case, the page navigates,
			 * * and an error occurred if testing non-existent element anymore
			 */
			const verifyElement = page.getByRole('button', { name: 'Verify' });
			const shouldVerify = await verifyElement.isVisible().catch(() => false);

			if (shouldVerify) {
				await verifyElement.click();
			}
		}

		await page.getByRole('button', { name: 'Done' }).click();
	}

	const authorizeElement = page.getByRole('button', { name: 'Authorize exlint-dev-helper' });
	const shouldAuthorize = await authorizeElement.isVisible().catch(() => false);

	if (shouldAuthorize) {
		await authorizeElement.click();
	}

	await page.waitForURL('/');

	await page.context().storageState({ path: 'tests/dashboard/storage/auth-state.json' });

	await browser.close();
};

export default PreTestsAuthentication;
