import React from 'react';
import mixpanel from 'mixpanel-browser';

import FooterView from './Footer.view';

interface IProps {}

const Footer: React.FC<IProps> = () => {
	const onViewPort = (isVisible: boolean) => {
		isVisible && mixpanel.track('Scroll 100%');
	};

	const onGithubClickTrack = () => {
		mixpanel.track('Github button CLICKED / Footer');
	};

	const onLoginClickTrack = () => {
		mixpanel.track('Login button CLICKED / Footer');
	};

	const onDocsClickTrack = () => {
		mixpanel.track('Docs button CLICKED / Footer');
	};

	const onGetStartedClickTrack = () => {
		mixpanel.track('Get Statred button CLICKED / Footer');
	};

	const onTermsOfUseClickTrack = () => {
		mixpanel.track('Terms of use button CLICKED / Footer');
	};

	const onPrivacyClickTrack = () => {
		mixpanel.track('Privacy button CLICKED / Footer');
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
			onGithubClickTrack={onGithubClickTrack}
			onLoginClickTrack={onLoginClickTrack}
			onDocsClickTrack={onDocsClickTrack}
			onGetStartedClickTrack={onGetStartedClickTrack}
			onHomeClicked={onHomeClicked}
			onTermsOfUseClickTrack={onTermsOfUseClickTrack}
			onPrivacyClickTrack={onPrivacyClickTrack}
		/>
	);
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default React.memo(Footer);
