import React from 'react';
import { Routes, Route } from 'react-router-dom';

import type { IGroup } from '@/interfaces/group';

import NewPolicy from './NewPolicy';
import GroupsSidebar from './GroupsSidebar';
import GroupDetails from './GroupDetails';

import classes from './GroupCenter.module.scss';

interface IProps {
	readonly groupsList: IGroup[] | [];
	readonly selectedGroupIndex: number | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectGroup: (index: number) => void;
}

const GroupCenterView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedGroup = props.selectedGroupIndex
		? props.groupsList[props.selectedGroupIndex] ?? null
		: null;

	const selectedGroupId = selectedGroup?.id;

	return (
		<main className={classes['main']}>
			<GroupsSidebar
				groupsList={props.groupsList}
				selectedGroupIndex={props.selectedGroupIndex}
				onCreateNewGroup={props.onCreateNewGroup}
				onSelectGroup={props.onSelectGroup}
			/>
			{selectedGroupId && (
				<Routes>
					<Route path="/" element={<GroupDetails selectedGroup={selectedGroup} />} />
					<Route path="/new-policy" element={<NewPolicy selectedGroupId={selectedGroupId} />} />
				</Routes>
			)}
		</main>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
