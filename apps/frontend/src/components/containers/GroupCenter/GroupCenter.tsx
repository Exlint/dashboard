import React, { useEffect, useState } from 'react';
import type { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

import { backendApi } from '@/utils/http';
import { currentDate } from '@/utils/current-date';
import type { IGroup } from '@/interfaces/group';
import type { ICreateGroupResponseData, IGetGroupsResponseData } from '@/interfaces/responses';

import GroupCenterView from './GroupCenter.view';

interface IProps {}

const GroupCenter: React.FC<IProps> = () => {
	const { t } = useTranslation();
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
	}, [backendApi]);

	const onCreateNewGroup = () => {
		backendApi
			.post<ICreateGroupResponseData>('/user/groups/create')
			.then((response) => {
				setGroupsListState((prev) => {
					setSelectGroupIndexState(() => prev.length);

					return [
						...prev,
						{
							label: t('groupCenter.newGroupLabel'),
							createdAt: currentDate(),
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
			})
			.catch((err: AxiosError) => {
				//TODO: Add action when catch error
				alert(err.response?.data);
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
	};

	return (
		<GroupCenterView
			groupsList={groupsListState}
			selectedGroupIndex={selectedGroupIndexState}
			onCreateNewGroup={onCreateNewGroup}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onRemoveGroup={onRemoveGroup}
			onSelectGroup={onSelectGroup}
		/>
	);
};

GroupCenter.displayName = 'GroupCenter';
GroupCenter.defaultProps = {};

export default React.memo(GroupCenter);
