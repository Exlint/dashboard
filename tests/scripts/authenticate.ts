import { chromium } from '@playwright/test';
import xoauth2 from 'xoauth2';
import { ImapFlow } from 'imapflow';

const xoauth2Gen = xoauth2.createXOAuth2Generator({
	user: 'exlintautomations@gmail.com',
	clientId: '579715162709-uor1nhhqm97n7qcmfvot49ufvuo7u4vl.apps.googleusercontent.com',
	clientSecret: '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',
	refreshToken:
		'1//035l5RqethF8ECgYIARAAGAMSNwF-L9Ir6BMqoY5vA-PTpJXxE82aM5jMEtbAhbIZbW2yW278l1c0rCRO_uesfYFWKGGAekxlrGQ',
});

const PreTestsAuthentication = async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage({ baseURL: 'http://localhost:8080' });

	await page.goto('/');
	await page.getByTestId('auth-github-auth-button').click();

	await page.getByLabel('Username or email address').fill('automations@exlint.io');
	await page.getByLabel('Password').fill('H2!2j!p8pu8K6TA8KmmgBAJ@vun^qsNV9ugMCRz9');
	await page.getByRole('button', { name: 'Sign in' }).click();

	const xoauth2Token = await new Promise<string>((resolve, reject) => {
		xoauth2Gen.getToken((error: unknown, token: string) => {
			if (error) {
				return reject(error);
			}

			return resolve(token);
		});
	});

	const client = new ImapFlow({
		host: 'imap.gmail.com',
		port: 993,
		secure: true,
		auth: {
			user: 'exlintautomations@gmail.com',
			pass: 'ETH^H$u&e9M4e7hkd%381sfdem%QYg!yU9S3GkVh',
			accessToken: xoauth2Token,
		},
	});

	await client.connect();

	await client.logout();

	const authorizeElement = page.getByRole('button', { name: 'Authorize exlint-dev-helper' });
	const shouldAuthorize = await authorizeElement.isVisible();

	if (shouldAuthorize) {
		await authorizeElement.click();
	}

	await page.context().storageState({ path: 'tests/storage/storage-state.json' });

	await browser.close();
};

export default PreTestsAuthentication;
