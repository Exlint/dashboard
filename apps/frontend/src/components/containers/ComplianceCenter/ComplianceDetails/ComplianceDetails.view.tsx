import React from 'react';
import { Outlet } from 'react-router-dom';

import type { ISelectedSideBarCompliance } from '@/store/interfaces/compliances';

import classes from './ComplianceDetails.module.scss';
import Header from './Header';

interface IProps {
	readonly selectedCompliance: ISelectedSideBarCompliance | null;
}

const ComplianceDetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	if (!props.selectedCompliance) {
		return null;
	}

	return (
		<main className={classes['main']}>
			<Header
				complianceLabel={props.selectedCompliance.label}
				complianceId={props.selectedCompliance.id}
			/>

			<Outlet />
		</main>
	);
};

ComplianceDetailsView.displayName = 'ComplianceDetailsView';
ComplianceDetailsView.defaultProps = {};

export default React.memo(ComplianceDetailsView);
