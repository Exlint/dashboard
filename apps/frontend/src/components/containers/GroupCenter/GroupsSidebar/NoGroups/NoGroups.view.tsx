import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './NoGroups.module.scss';

interface IProps {}

const NoGroupsView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['createGroup']}>
			<div className={classes['innerCreateGroup']}>
				<h3 className={classes['innerCreateGroup__title']}>
					{t('groupCenter.groupSideBar.noGroup.header')}
				</h3>
				<EDSvg name="createGroupIcon" className={classes['createGroupIcon']} />
			</div>
		</div>
	);
};

NoGroupsView.displayName = 'NoGroupsView';
NoGroupsView.defaultProps = {};

export default React.memo(NoGroupsView);
