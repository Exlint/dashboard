import React from 'react';

import type { ISideBarCompliance } from '@/store/interfaces/compliances';

import CompliancesListView from './CompliancesList.view';

interface IProps {
	readonly compliances: ISideBarCompliance[];
}

const CompliancesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <CompliancesListView compliances={props.compliances} />;
};

CompliancesList.displayName = 'CompliancesList';
CompliancesList.defaultProps = {};

export default React.memo(CompliancesList);
