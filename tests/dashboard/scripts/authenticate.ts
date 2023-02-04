import { chromium } from '@playwright/test';
import totp from 'totp-generator';

const PreTestsAuthentication = async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage({ baseURL: 'http://localhost:8080' });

	await page.goto('/');
	await page.getByTestId('auth-github-auth-button').click();

	await page.getByLabel('Username or email address').fill('automations@exlint.io');
	await page.getByLabel('Password').fill('H2!2j!p8pu8K6TA8KmmgBAJ@vun^qsNV9ugMCRz9');
	await page.getByRole('button', { name: 'Sign in' }).click();

	const totpToken = totp('V3OQBXCDHSXTD3IC');

	await page.getByPlaceholder('XXXXXX').fill(totpToken);

	/**
	 * * GitHub may automatically "click" on verify, in that case, the page navigates,
	 * * and an error occured if testing non-existent element anymore
	 */
	const verifyElement = page.getByRole('button', { name: 'Verify' });
	const shuoldVerify = await verifyElement.isVisible().catch(() => false);

	if (shuoldVerify) {
		await verifyElement.click();
	}

	/**
	 * * GitHub may automatically "click" on verify, in that case, the page navigates,
	 * * and an error occured if testing non-existent element anymore
	 */
	const errorElement = page.getByRole('alert', { name: 'Two-factor authentication failed' });
	const shuoldVerifyAgain = await errorElement.isVisible().catch(() => false);

	if (shuoldVerifyAgain) {
		const totpToken = totp('V3OQBXCDHSXTD3IC');

		await page.getByPlaceholder('XXXXXX').fill(totpToken);

		/**
		 * * GitHub may automatically "click" on verify, in that case, the page navigates,
		 * * and an error occured if testing non-existent element anymore
		 */
		const verifyElement = page.getByRole('button', { name: 'Verify' });
		const shuoldVerify = await verifyElement.isVisible().catch(() => false);

		if (shuoldVerify) {
			await verifyElement.click();
		}
	}

	/**
	 * * GitHub may automatically "click" on verify, in that case, the page navigates,
	 * * and an error occured if testing non-existent element anymore
	 */
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
