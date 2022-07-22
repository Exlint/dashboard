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
	// Const navigate = useNavigate();

	// Const selectedGroup = props.selectedGroupIndex
	// 	? props.groupsList[props.selectedGroupIndex] ?? null
	// 	: null;

	// Readonly id: string;
	// Readonly label: string;
	// Readonly libraryName: string;
	// Readonly createdAt: string;
	// Readonly rules: Record<string, IRule> | null;

	const selectedGroupTemp: IGroup = {
		id: 'test1222',
		label: 'sssnew group',
		createdAt: '11 jun',
		policies: [
			{
				id: 'first9128739',
				label: 'policyLabel',
				libraryName: 'ESLint',
				createdAt: '11 jun',
				rules: null,
			},
			{
				id: 'second1234321',
				label: 'secondLabel',
				libraryName: 'Stylint',
				createdAt: '11 jun',
				rules: null,
			},
			{
				id: 'third92836',
				label: 'secondLabel',
				libraryName: 'Stylint',
				createdAt: '11 jun',
				rules: null,
			},
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
			{ id: 'second', label: 'secondLabel', libraryName: 'Stylint', createdAt: '11 jun', rules: null },
		],
	};

	const groupListTemp = [selectedGroupTemp];

	// Const selectedGroupId = selectedGroup?.id;
	const selectedGroupId = selectedGroupTemp.id;
	// Const selectedGroupId = false;

	return (
		<main className={classes['main']}>
			<GroupsSidebar
				// GroupsList={props.groupsList}
				selectedGroupIndex={props.selectedGroupIndex}
				groupsList={groupListTemp}
				onCreateNewGroup={props.onCreateNewGroup}
				onSelectGroup={props.onSelectGroup}
			/>
			{selectedGroupId && (
				<Routes>
					<Route path="/" element={<GroupDetails selectedGroup={selectedGroupTemp} />} />
					<Route path="/new-policy" element={<NewPolicy selectedGroupId={selectedGroupId} />} />
				</Routes>
			)}
		</main>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
