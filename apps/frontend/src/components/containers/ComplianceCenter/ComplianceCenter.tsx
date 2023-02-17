import React from 'react';

import ComplianceCenterView from './ComplianceCenter.view';

interface IProps {}

const ComplianceCenter: React.FC<IProps> = () => {
	return <ComplianceCenterView />;
};

ComplianceCenter.displayName = 'ComplianceCenter';
ComplianceCenter.defaultProps = {};

export default React.memo(ComplianceCenter);
