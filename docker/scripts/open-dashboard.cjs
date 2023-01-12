const waitOn = require('wait-on');
const open = require('open');
const chalk = require('chalk');

const SECOND = 1 * 1000;
const MINUTE = 60 * SECOND;

const waitOnOptions = {
	resources: [
		'http-get://localhost:8080',
		'http-get://localhost:3000/health/version',
		'http-get://localhost:4000/health/version',
	],
	timeout: 30 * MINUTE,
	validateStatus: (status) => status === 200,
	headers: {
		accept: 'text/html',
	},
};

(async () => {
	try {
		console.log('\n\n🚀🚀🚀🚀🚀🚀🚀🚀🚀\n');
		console.log(chalk.magenta.bold('Please wait dashboard to open on browser..'));

		await waitOn(waitOnOptions);
		await open('http://localhost:8080');

		console.log(
			chalk.magenta(
				`\nReady to go! If you're done working, run ${chalk.italic.bgBlack.white(
					' pnpm cluster:stop ',
				)}`,
			),
		);
	} catch (e) {
		console.log(chalk.red.bold(`\n\nFailed to start cluster with an error:\n${e}`));

		process.exit(1);
	}
})();
