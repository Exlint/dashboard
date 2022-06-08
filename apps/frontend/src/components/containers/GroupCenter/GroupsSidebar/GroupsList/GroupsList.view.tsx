import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import { IGroup } from '@/interfaces/group';

import Group from './Group';
import classes from './GroupsList.module.scss';

interface IProps {
	readonly groupsList: IGroup[] | [];
	readonly selectedGroup: IGroup | null;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const GroupsListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['groupsList']}>
			{props.groupsList.map((group, index) => (
				<>
					<Group
						key={index}
						title={group.title}
						id={group.id}
						policies={group.policies}
						selectedGroup={props.selectedGroup}
						onSelectedGroup={props.onSelectedGroup}
					/>
					<hr className={classes['groupsList__dividerLine']} />
				</>
			))}
		</div>
	);
};

GroupsListView.displayName = 'GroupsListView';
GroupsListView.defaultProps = {};

export default React.memo(GroupsListView);
