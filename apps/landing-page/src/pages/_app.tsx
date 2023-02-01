/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import mixpanel from 'mixpanel-browser';

import Footer from '@/layout/Footer';
import Main from '@/layout/Main';

import '../i18n/config';
import '../styles/custom.scss';

function MyApp({ Component, pageProps }: AppProps) {
	mixpanel.init('8f3cab1b2ee2f01a1eaaf4db5aac7008', { debug: true });
	mixpanel.track('Session Start', {
		'source': "Pat's affiliate site",
		'Opted out of email': true,
	});

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:title" content="Exlint" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/meta-image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="685" />
				<meta property="og:image:height" content="685" />
				<meta property="og:image:alt" content="Exlint" />
				<meta property="og:url" content="https://exlint.io/" />
				<meta name="description" content="Empower Best Practices Hassle Free, In No Time." />

				<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

				<title>Exlint</title>

				<link rel="canonical" href="https://www.exlint.io/" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>

			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
		</>
	);
}

export default MyApp;
