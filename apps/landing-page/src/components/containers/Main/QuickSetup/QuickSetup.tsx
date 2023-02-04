import React from 'react';

import QuickSetupView from './QuickSetup.view';

interface IProps {}

const QuickSetup: React.FC<IProps> = () => {
	return <QuickSetupView />;
};

QuickSetup.displayName = 'QuickSetup';
QuickSetup.defaultProps = {};

export default React.memo(QuickSetup);
