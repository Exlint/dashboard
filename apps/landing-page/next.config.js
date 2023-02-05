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
};

module.exports = configuration;
