import React, { useState } from 'react';
import mixpanel from 'mixpanel-browser';

import HeaderView from './Header.view';

interface IProps {}

const Header: React.FC<IProps> = () => {
	const [isLogoOnHoverState, setIsLogoOnHoverState] = useState<boolean>(false);

	const onHoverLogo = (isHover: boolean) => {
		setIsLogoOnHoverState(() => isHover);
	};

	const onDocsClick = () => {
		mixpanel.track('Navigate to docs button CLICKED / Header');
	};

	const onGithubClick = () => {
		mixpanel.track('Github button CLICKED / Header');
	};

	const onLoginClick = () => {
		mixpanel.track('Log in button CLICKED / Header');
	};

	return (
		<HeaderView
			isLogoOnHover={isLogoOnHoverState}
			onHoverLogo={onHoverLogo}
			onDocsClick={onDocsClick}
			onGithubClick={onGithubClick}
			onLoginClick={onLoginClick}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
