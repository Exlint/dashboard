import React from 'react';
import mixpanel from 'mixpanel-browser';

import OpenSourceView from './OpenSource.view';

interface IProps {}

const OpenSource: React.FC<IProps> = () => {
	const onGetStartedNavigate = () => {
		mixpanel.track('Navigate to docs button CLICKED / OpenSource');
		window.open('https://docs.exlint.io', '_blank');
	};

	return <OpenSourceView onGetStartedNavigate={onGetStartedNavigate} />;
};

OpenSource.displayName = 'OpenSource';
OpenSource.defaultProps = {};

export default React.memo(OpenSource);
