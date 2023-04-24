import React from 'react';
import mixpanel from 'mixpanel-browser';

import FooterView from './Footer.view';

interface IProps {}

const Footer: React.FC<IProps> = () => {
	const onViewPort = (isVisible: boolean) => {
		isVisible && mixpanel.track('Scroll 100%');
	};

	const onGithubClick = () => {
		mixpanel.track('Github button CLICKED / Footer');
	};

	const onLoginClick = () => {
		mixpanel.track('Login button CLICKED / Footer');
	};

	const onDocsClick = () => {
		mixpanel.track('Docs button CLICKED / Footer');
	};

	const onGetStartedClick = () => {
		mixpanel.track('Get started button CLICKED / Footer');
	};

	const onTermsOfUseClick = () => {
		mixpanel.track('Terms of use button CLICKED / Footer');
	};

	const onPrivacyClick = () => {
		mixpanel.track('Privacy button CLICKED / Footer');
	};

	return (
		<FooterView
			onViewPort={onViewPort}
			onGithubClick={onGithubClick}
			onLoginClick={onLoginClick}
			onDocsClick={onDocsClick}
			onGetStartedClick={onGetStartedClick}
			onTermsOfUseClick={onTermsOfUseClick}
			onPrivacyClick={onPrivacyClick}
		/>
	);
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default React.memo(Footer);
