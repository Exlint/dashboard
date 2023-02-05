/** @type {import('next').NextConfig} */
const configuration = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	eslint: {
		dirs: ['./src'],
		ignoreDuringBuilds: true,
	},
};

module.exports = configuration;
