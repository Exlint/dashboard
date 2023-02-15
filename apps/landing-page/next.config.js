const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const configuration = (phase) => {
	const shouldAdjustToProduction = phase !== PHASE_DEVELOPMENT_SERVER && process.env.AUTOMATION !== 'true';

	return {
		reactStrictMode: true,
		eslint: {
			dirs: ['./src'],
			ignoreDuringBuilds: true,
		},
		images: {
			unoptimized: true,
		},
		compiler: {
			removeConsole: shouldAdjustToProduction,
			reactRemoveProperties: shouldAdjustToProduction,
		},
	};
};

module.exports = configuration;
