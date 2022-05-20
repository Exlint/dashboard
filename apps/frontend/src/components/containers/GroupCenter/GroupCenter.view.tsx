import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import GroupsSlidebar from './GroupsSlidebar';
import GroupDetails from './GroupDetails';

import classes from './GroupCenter.module.scss';

interface IProps {}

const GroupCenterView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<section className={classes['groupCenterContainer']}>
			<GroupsSlidebar />
			<GroupDetails />
		</section>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
