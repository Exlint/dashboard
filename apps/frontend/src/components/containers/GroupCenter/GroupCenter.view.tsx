import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IGroup } from '@/interfaces/group';

import NewPolicy from './NewPolicy';
import GroupsSidebar from './GroupsSidebar';
import GroupDetails from './GroupDetails';

import classes from './GroupCenter.module.scss';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectGroup: (index: number) => void;
}

const GroupCenterView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const selectedGroup = props.selectedGroupIndex
	// 	? props.groupsList[props.selectedGroupIndex] ?? null
	// 	: null;

	// readonly id: string;
	// readonly label: string;
	// readonly libraryName: string;
	// readonly createdAt: string;
	// readonly rules: Record<string, IRule> | null;

	const selectedGroupTemp: IGroup = {
		id: 'test123',
		label: 'sssnew group',
		createdAt: '11 jun',
		policies: [
			{ id: 'first', label: 'policyLabel', libraryName: 'ESLint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
		],
	};

	const groupListTemp = [selectedGroupTemp];

	// const selectedGroupId = selectedGroup?.id;
	const selectedGroupId = selectedGroupTemp?.id;

	return (
		<main className={classes['main']}>
			<GroupsSidebar
				// groupsList={props.groupsList}
				selectedGroupIndex={props.selectedGroupIndex}
				groupsList={groupListTemp}
				onCreateNewGroup={props.onCreateNewGroup}
				onSelectGroup={props.onSelectGroup}
			/>
			<GroupDetails selectedGroup={selectedGroupTemp} />
			{selectedGroupId && (
				<Routes>
					<Route
						path="/group-center/"
						element={<GroupDetails selectedGroup={selectedGroupTemp} />}
					/>
					<Route
						path="/group-center/new-policy/"
						element={<NewPolicy selectedGroupId={selectedGroupId} />}
					/>
				</Routes>
			)}
		</main>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
