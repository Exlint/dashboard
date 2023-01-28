import path from 'node:path';
import fs from 'node:fs/promises';
import os from 'node:os';

import chalk from 'chalk';
import dCompose from 'docker-compose';
import waitOn from 'wait-on';

const ROOT_DIRECTORY_PATH = path.dirname(path.dirname(__dirname));
const ETC_HOSTS_FILE_PATH = path.join(path.sep, 'etc', 'hosts');

const MONGO_REPLICA_1_STRING = '127.0.0.1 mongo_replica_1';
const MONGO_REPLICA_2_STRING = '127.0.0.1 mongo_replica_2';
const MONGO_REPLICA_3_STRING = '127.0.0.1 mongo_replica_3';

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
		const etcHostsFileData = await fs.readFile(ETC_HOSTS_FILE_PATH, { encoding: 'utf-8' });

		const mongoReplicaStringsToAppend: string[] = [];

		if (!etcHostsFileData.includes(MONGO_REPLICA_1_STRING)) {
			mongoReplicaStringsToAppend.push(MONGO_REPLICA_1_STRING);
		}

		if (!etcHostsFileData.includes(MONGO_REPLICA_2_STRING)) {
			mongoReplicaStringsToAppend.push(MONGO_REPLICA_2_STRING);
		}

		if (!etcHostsFileData.includes(MONGO_REPLICA_3_STRING)) {
			mongoReplicaStringsToAppend.push(MONGO_REPLICA_3_STRING);
		}

		if (mongoReplicaStringsToAppend.length > 0) {
			const stringToAppend = os.EOL + mongoReplicaStringsToAppend.join(os.EOL);

			await fs.appendFile(ETC_HOSTS_FILE_PATH, stringToAppend, { encoding: 'utf-8' });
		}

		await dCompose.upAll({
			cwd: ROOT_DIRECTORY_PATH,
			config: './docker-compose.test.yaml',
			log: true,
		});

		console.log(chalk.magenta.bold('Please wait dashboard to be ready..'));

		await waitOn(waitOnOptions);

		console.log(chalk.magenta('Ready to go!'));
	} catch (e) {
		console.log(chalk.red.bold(`\n\nFailed to start test cluster with an error:\n${e}`));

		process.exit(1);
	}
};

export default globalSetup;