import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import { backendApi } from '@/utils/http';
import type { IGroup } from '@/interfaces/group';
import type { ICreateGroupResponseData, IGetGroupsResponseData } from '@/interfaces/responses';

import GroupCenterView from './GroupCenter.view';

interface IProps {}

const GroupCenter: React.FC<IProps> = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [groupsListState, setGroupsListState] = useState<IGroup[]>([]);
	const [selectedGroupIndexState, setSelectGroupIndexState] = useState<number | null>(null);

	useEffect(() => {
		backendApi.get<IGetGroupsResponseData>('/user/groups/all').then((response) => {
			const transformedGroupList = response.data.groups.map((group) => ({
				...group,
				label: group.label ? group.label : t('groupCenter.newGroupLabel'),
			}));

			setGroupsListState(() => transformedGroupList);

			if (response.data.groups.length > 0) {
				setSelectGroupIndexState(() => 0);
			}
		});
	}, []);

	const onCreateNewGroup = () => {
		backendApi.post<ICreateGroupResponseData>('/user/groups').then((response) => {
			setGroupsListState((prev) => {
				setSelectGroupIndexState(() => prev.length);
				navigate('/group-center');

				return [
					...prev,
					{
						label: t('groupCenter.newGroupLabel'),
						id: response.data.groupId,
						policies: [],
					},
				];
			});
			scroller.scrollTo('group-list-end', {
				containerId: 'group-list-container',
				smooth: true,
				duration: 500,
			});
		});
	};

	const onUpdateGroupLabel = (groupId: string, newLabel: string) => {
		setGroupsListState((prev) =>
			prev.map((group) => {
				if (group.id === groupId) {
					return {
						...group,
						label: newLabel,
					};
				}

				return group;
			}),
		);
	};

	const onAddGroup = (group: IGroup) => setGroupsListState((prev) => [...prev, group]);

	const onRemoveGroup = (groupId: string) => {
		if (groupsListState.length === 1) {
			setSelectGroupIndexState(() => null);
		} else if (groupsListState.length - 1 === selectedGroupIndexState) {
			setSelectGroupIndexState((prev) => prev! - 1);
		}

		setGroupsListState((prev) => prev.filter((group) => group.id !== groupId));
	};

	const onSelectGroup = (index: number) => {
		setSelectGroupIndexState(() => index);
		navigate('/group-center');
	};

	return (
		<GroupCenterView
			groupsList={groupsListState}
			selectedGroupIndex={selectedGroupIndexState}
			onCreateNewGroup={onCreateNewGroup}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onAddGroup={onAddGroup}
			onRemoveGroup={onRemoveGroup}
			onSelectGroup={onSelectGroup}
		/>
	);
};

GroupCenter.displayName = 'GroupCenter';
GroupCenter.defaultProps = {};

export default React.memo(GroupCenter);
