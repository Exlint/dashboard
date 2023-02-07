import path from 'node:path';

import chalk from 'chalk';
import dCompose from 'docker-compose';
import waitOn from 'wait-on';

import PreTestsAuthentication from './authenticate';

const ROOT_DIRECTORY_PATH = path.dirname(path.dirname(path.dirname(__dirname)));

const SECOND = 1 * 1000;
const MINUTE = 60 * SECOND;

const waitOnOptions = {
	resources: [
		'http-get://localhost:8080',
		'http-get://localhost:3000/health/version',
		'http-get://localhost:4000/health/version',
	],
	timeout: 30 * MINUTE,
	validateStatus: (status: unknown) => status === 200,
	headers: {
		accept: 'text/html',
	},
};

const globalSetup = async () => {
	try {
		await dCompose.upAll({
			cwd: ROOT_DIRECTORY_PATH,
			config: './docker-compose.test.yaml',
			log: true,
		});

		console.log(chalk.magenta.bold('Please wait dashboard to be ready..'));

		await waitOn(waitOnOptions);

		console.log(chalk.magenta('Ready to go! Let me authenticate for you..'));
		console.log(
			chalk.grey.bold('(Note: authentication will be revoked upon "authentication flows" tests)'),
		);

		await PreTestsAuthentication();

		console.log(chalk.magenta('Authenticated successfully!'));
	} catch (e) {
		console.log(
			chalk.red.bold(`\n\nFailed to start test cluster with an error:\n${JSON.stringify(e, null, 2)}`),
		);

		await dCompose.down({
			cwd: ROOT_DIRECTORY_PATH,
			config: './docker-compose.test.yaml',
			log: true,
		});

		process.exit(1);
	}
};

export default globalSetup;
