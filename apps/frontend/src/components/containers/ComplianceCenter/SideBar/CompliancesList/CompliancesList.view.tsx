import React from 'react';
import { Element } from 'react-scroll';

import type { ISideBarCompliance } from '@/store/interfaces/compliances';

import classes from './CompliancesList.module.scss';
import ComplianceItem from './ComplianceItem';

interface IProps {
	readonly compliances: ISideBarCompliance[];
}

const CompliancesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div id="compliance-list-container" className={classes['container']}>
			{props.compliances.map((compliance) => (
				<ComplianceItem key={compliance.id} compliance={compliance} />
			))}
			<Element name="compliance-list-end" />
		</div>
	);
};

CompliancesListView.displayName = 'CompliancesListView';
CompliancesListView.defaultProps = {};

export default React.memo(CompliancesListView);
