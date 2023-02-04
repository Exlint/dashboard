/** @type {import('next').NextConfig} */
const configuration = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src'],
		ignoreDuringBuilds: true,
	},
	images: {
		loader: 'akamai',
		path: '',
	},
};

module.exports = configuration;
