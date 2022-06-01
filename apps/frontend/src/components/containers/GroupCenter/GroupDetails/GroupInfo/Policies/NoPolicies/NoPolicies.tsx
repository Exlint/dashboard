import React from 'react';

import NoPoliciesView from './NoPolicies.view';

interface IProps {}

const NoPolicies: React.FC<IProps> = () => {
	return <NoPoliciesView />;
};

NoPolicies.displayName = 'NoPolicies';
NoPolicies.defaultProps = {};

export default React.memo(NoPolicies);
