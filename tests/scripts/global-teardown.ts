import path from 'node:path';

import chalk from 'chalk';
import dCompose from 'docker-compose';

const rootDirectoryPath = path.dirname(path.dirname(path.dirname(__dirname)));

const globalTeardown = async () => {
	try {
		console.log(chalk.magenta.bold('Please wait dashboard cluster to be destroyed..'));

		await dCompose.down({
			cwd: rootDirectoryPath,
			config: './docker-compose.test.yaml',
			log: true,
		});

		console.log(chalk.magenta('Successfully destroyed test cluster!'));
	} catch (e) {
		console.log(chalk.red.bold(`\n\nFailed to destroy test cluster with an error:\n${e}`));

		process.exit(1);
	}
};

export default globalTeardown;
