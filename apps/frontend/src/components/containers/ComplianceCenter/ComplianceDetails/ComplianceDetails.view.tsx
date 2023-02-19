import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './ComplianceDetails.module.scss';
import Header from './Header';

interface IProps {}

const ComplianceDetailsView: React.FC<IProps> = () => {
	return (
		<main className={classes['main']}>
			<Header />

			<Outlet />
		</main>
	);
};

ComplianceDetailsView.displayName = 'ComplianceDetailsView';
ComplianceDetailsView.defaultProps = {};

export default React.memo(ComplianceDetailsView);
