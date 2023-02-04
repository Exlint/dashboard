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

	const verifyElement = page.getByRole('button', { name: 'Verify' });
	const shuoldVerify = await verifyElement.isVisible();

	if (shuoldVerify) {
		await verifyElement.click();
	}

	const errorElement = page.getByText('Two-factor authentication failed.');
	const shuoldVerifyAgain = await errorElement.isVisible();

	if (shuoldVerifyAgain) {
		const totpToken = totp('V3OQBXCDHSXTD3IC');

		await page.getByPlaceholder('XXXXXX').fill(totpToken);

		const verifyElement = page.getByRole('button', { name: 'Verify' });
		const shuoldVerify = await verifyElement.isVisible();

		if (shuoldVerify) {
			await verifyElement.click();
		}
	}

	const authorizeElement = page.getByRole('button', { name: 'Authorize exlint-dev-helper' });
	const shouldAuthorize = await authorizeElement.isVisible();

	if (shouldAuthorize) {
		await authorizeElement.click();
	}

	await page.waitForURL('/');

	await page.context().storageState({ path: 'tests/dashboard/storage/auth-state.json' });

	await browser.close();
};

export default PreTestsAuthentication;
