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
	readonly onUpdateGroupLabel: (_: string, __: string) => void;
	readonly onAddGroup: (_: IGroup) => void;
	readonly onRemoveGroup: (_: string) => void;
	readonly onSelectGroup: (_: number) => void;
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
		<div className={classes['main']}>
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
		</div>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
