import React from 'react';

import ComplianceCenter from '@/containers/ComplianceCenter';
import Page from '@/helpers/Page';

interface IProps {}

const ComplianceCenterPage: React.FC<IProps> = () => {
	return (
		<Page>
			<ComplianceCenter />
		</Page>
	);
};

ComplianceCenterPage.displayName = 'ComplianceCenterPage';
ComplianceCenterPage.defaultProps = {};

export default ComplianceCenterPage;
