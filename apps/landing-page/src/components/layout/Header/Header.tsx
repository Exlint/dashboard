import React, { useState } from 'react';
import mixpanel from 'mixpanel-browser';

import HeaderView from './Header.view';

interface IProps {}

const Header: React.FC<IProps> = () => {
	const [isLogoOnHoverState, setIsLogoOnHoverState] = useState<boolean>(false);

	const onHoverLogo = (isHover: boolean) => {
		setIsLogoOnHoverState(() => isHover);
	};

	const onDocsNavigate = () => {
		mixpanel.track('Navigate to docs button CLICKED / Header');
		window.open('https://docs.exlint.io', '_blank');
	};

	const onGithubNavigate = () => {
		mixpanel.track('Github button CLICKED / Header');
		window.open('https://github.com/Exlint/cli', '_blank');
	};

	const onDiscordNavigate = () => {
		mixpanel.track('Discord button CLICKED / Header');
		window.open('https://discord.com', '_blank');
	};

	const onGetStartedNavigate = () => {
		mixpanel.track('Get Statred button CLICKED / Header');
		window.open('https://discord.com', '_blank');
	};

	const onLogInNavigate = () => {
		mixpanel.track('Log in button CLICKED / Header');
		window.open('https://app.exlint.io', '_blank');
	};

	return (
		<HeaderView
			isLogoOnHover={isLogoOnHoverState}
			onHoverLogo={onHoverLogo}
			onDocsNavigate={onDocsNavigate}
			onGithubNavigate={onGithubNavigate}
			onDiscordNavigate={onDiscordNavigate}
			onGetStartedNavigate={onGetStartedNavigate}
			onLogInNavigate={onLogInNavigate}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
