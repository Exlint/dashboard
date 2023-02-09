const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const configuration = (phase) => {
	const shouldRemoveTestIdsProperties =
		phase !== PHASE_DEVELOPMENT_SERVER && process.env.AUTOMATION !== 'true';

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
			reactRemoveProperties: shouldRemoveTestIdsProperties,
		},
	};
};

module.exports = configuration;
