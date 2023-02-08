/** @type {import('next').NextConfig} */
const configuration = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src'],
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true,
	},
	compiler: {
		reactRemoveProperties: true,
	},
};

module.exports = configuration;
