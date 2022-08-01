import React from 'react';
import { Routes, Route } from 'react-router-dom';

import type { IGroup } from '@/interfaces/group';

import NewPolicy from './NewPolicy';
import GroupsSidebar from './GroupsSidebar';
import GroupDetails from './GroupDetails';

import classes from './GroupCenter.module.scss';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number | null;
	readonly onCreateNewGroup: () => void;
	readonly onUpdateGroupLabel: (groupId: string, newLabel: string) => void;
	readonly onAddGroup: (group: IGroup) => void;
	readonly onRemoveGroup: (groupId: string) => void;
	readonly onSelectGroup: (index: number) => void;
}

const GroupCenterView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedGroup =
		props.selectedGroupIndex !== null ? props.groupsList[props.selectedGroupIndex] ?? null : null;

	const selectedGroupId = selectedGroup?.id;

	const groupDetailsElement = (
		<GroupDetails
			selectedGroup={selectedGroup!}
			onUpdateGroupLabel={props.onUpdateGroupLabel}
			onAddGroup={props.onAddGroup}
			onRemoveGroup={props.onRemoveGroup}
		/>
	);

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
					<Route path="/" element={groupDetailsElement} />
					<Route path="/new-policy" element={<NewPolicy selectedGroupId={selectedGroupId} />} />
				</Routes>
			)}
		</main>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
