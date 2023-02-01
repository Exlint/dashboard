/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'akamai',
		path: '',
	},
	eslint: {
		dirs: ['./'],
	},
	crossOrigin: false
};

module.exports = nextConfig;
