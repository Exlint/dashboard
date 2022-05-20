import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import Group from './Group';
import classes from './GroupsList.module.scss';

interface IProps {
	readonly groupsList: { title: string; id: number; policies: number[] }[] | [];
}

const GroupsListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['groupsList']}>
			<div className={classes['innerGroupsList']}>
				{props.groupsList.map((group, index) => (
					<>
						<Group key={index} title={group.title} id={group.id} policies={group.policies} />
						<hr className={classes['innerGroupsList__dividerLine']} />
					</>
				))}
			</div>
		</div>
	);
};

GroupsListView.displayName = 'GroupsListView';
GroupsListView.defaultProps = {};

export default React.memo(GroupsListView);
