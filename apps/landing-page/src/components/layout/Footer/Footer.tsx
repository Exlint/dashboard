import React from 'react';
import mixpanel from 'mixpanel-browser';

import FooterView from './Footer.view';

interface IProps {}

const Footer: React.FC<IProps> = () => {
	const onViewPort = (isVisible: boolean) => {
		isVisible && mixpanel.track('Scroll 100%');
	};

	const onGithubNavigate = () => {
		mixpanel.track('Github button CLICKED / Footer');
		window.open('https://github.com/Exlint', '_blank');
	};

	const onLoginNavigate = () => {
		mixpanel.track('Login button CLICKED / Footer');
		window.open('https://app.exlint.io', '_blank');
	};

	const onDocsNavigate = () => {
		mixpanel.track('Docs button CLICKED / Footer');
		window.open('https://docs.exlint.io', '_blank');
	};

	const onGetStartedNavigate = () => {
		mixpanel.track('Get Statred button CLICKED / Footer');
		window.open('https://docs.exlint.io', '_blank');
	};

	const onTermsOfUseNavigate = () => {
		mixpanel.track('Terms of use button CLICKED / Footer');
		window.open('https://github.com/Exlint/usage-policies/blob/main/terms-of-service.mdx', '_blank');
	};

	const onPrivacyNavigate = () => {
		mixpanel.track('Privacy button CLICKED / Footer');
		window.open('https://github.com/Exlint/usage-policies/blob/main/privacy-policy.mdx', '_blank');
	};

	const onHomeClicked = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<FooterView
			onViewPort={onViewPort}
			onGithubNavigate={onGithubNavigate}
			onLoginNavigate={onLoginNavigate}
			onDocsNavigate={onDocsNavigate}
			onGetStartedNavigate={onGetStartedNavigate}
			onHomeClicked={onHomeClicked}
			onTermsOfUseNavigate={onTermsOfUseNavigate}
			onPrivacyNavigate={onPrivacyNavigate}
		/>
	);
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default React.memo(Footer);
