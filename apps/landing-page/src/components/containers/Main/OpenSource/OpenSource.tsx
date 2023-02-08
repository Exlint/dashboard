import React from 'react';
import mixpanel from 'mixpanel-browser';

import OpenSourceView from './OpenSource.view';

interface IProps {}

const OpenSource: React.FC<IProps> = () => {
	const onGetStartedClick = () => {
		mixpanel.track('Navigate to docs button CLICKED / OpenSource');
	};

	return <OpenSourceView onGetStartedClick={onGetStartedClick} />;
};

OpenSource.displayName = 'OpenSource';
OpenSource.defaultProps = {};

export default React.memo(OpenSource);
