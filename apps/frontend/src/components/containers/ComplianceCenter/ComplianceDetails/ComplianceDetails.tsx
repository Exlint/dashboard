import React from 'react';

import ComplianceDetailsView from './ComplianceDetails.view';

interface IProps {}

const ComplianceDetails: React.FC<IProps> = () => {
	return <ComplianceDetailsView />;
};

ComplianceDetails.displayName = 'ComplianceDetails';
ComplianceDetails.defaultProps = {};

export default React.memo(ComplianceDetails);
