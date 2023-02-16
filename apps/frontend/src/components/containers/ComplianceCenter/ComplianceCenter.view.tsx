import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '@/layout/Nav';

import SideBar from './SideBar';

import classes from './ComplianceCenter.module.scss';

interface IProps {}

const ComplianceCenterView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<Nav />
			<div className={classes['content']}>
				<SideBar />

				<Outlet />
			</div>
		</div>
	);
};

ComplianceCenterView.displayName = 'ComplianceCenterView';
ComplianceCenterView.defaultProps = {};

export default React.memo(ComplianceCenterView);
