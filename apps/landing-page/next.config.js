/** @type {import('next').NextConfig} */
const configuration = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src'],
		ignoreDuringBuilds: true,
	},
};

module.exports = configuration;
