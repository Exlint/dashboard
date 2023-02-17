import React from 'react';

import ComplianceCenter from '@/containers/ComplianceCenter';

interface IProps {}

const ComplianceCenterPage: React.FC<IProps> = () => {
	return <ComplianceCenter />;
};

ComplianceCenterPage.displayName = 'ComplianceCenterPage';
ComplianceCenterPage.defaultProps = {};

export default ComplianceCenterPage;
