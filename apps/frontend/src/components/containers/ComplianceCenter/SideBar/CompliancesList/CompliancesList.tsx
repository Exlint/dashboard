import React from 'react';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import CompliancesListView from './CompliancesList.view';

interface IProps {
	readonly compliances: IGetAllCompliancesResponseData['compliances'];
}

const CompliancesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <CompliancesListView compliances={props.compliances} />;
};

CompliancesList.displayName = 'CompliancesList';
CompliancesList.defaultProps = {};

export default React.memo(CompliancesList);
