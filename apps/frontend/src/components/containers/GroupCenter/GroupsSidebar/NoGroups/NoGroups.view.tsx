import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import VSvg from '@/ui/VSvg';

import classes from './NoGroups.module.scss';

interface IProps {}

const NoGroupsView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<div className={classes['createGroup']}>
			<div className={classes['innerCreateGroup']}>
				<h3 className={classes['innerCreateGroup__title']}>Create your first Group</h3>
				<VSvg name="createGroupIcon" className={classes['createGroupIcon']} />
			</div>
		</div>
	);
};

NoGroupsView.displayName = 'NoGroupsView';
NoGroupsView.defaultProps = {};

export default React.memo(NoGroupsView);
