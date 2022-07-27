import React, { useEffect, useState } from 'react';
import type { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { backendApi } from '@/utils/http';
import type { IGroup } from '@/interfaces/group';
import type { ICreateGroupResponseData, IGetGroupsResponseData } from '@/interfaces/responses';

import GroupCenterView from './GroupCenter.view';

interface IProps {}

const GroupCenter: React.FC<IProps> = () => {
	const { t } = useTranslation();
	const [groupsListState, setGroupsListState] = useState<IGroup[]>([]);
	const [selectedGroupIndexState, setSelectGroupIndexState] = useState<number | null>(null);
	const currentDate = moment();

	useEffect(() => {
		backendApi.get<IGetGroupsResponseData>('/user/groups/group-list').then((response) => {
			setGroupsListState(() => response.data.groupsList);

			if (response.data.groupsList.length > 0) {
				setSelectGroupIndexState(() => 0);
			}
		});
	}, [backendApi]);

	const onCreateNewGroup = () => {
		backendApi
			.post<ICreateGroupResponseData>('/user/groups/create')
			.then((response) => {
				setGroupsListState((prev) => {
					return [
						...prev,
						{
							label: t('groupCenter.newGroupLabel'),
							createdAt: currentDate.format('MMMM Do YYYY'),
							id: response.data.id,
							policies: [],
						},
					];
				});
			})
			.catch((err: AxiosError) => {
				//TODO: Add action when catch error
				alert(err.response?.data);
			});
	};

	const onSelectGroup = (index: number) => {
		setSelectGroupIndexState(() => index);
	};

	return (
		<GroupCenterView
			groupsList={groupsListState}
			selectedGroupIndex={selectedGroupIndexState}
			onCreateNewGroup={onCreateNewGroup}
			onSelectGroup={onSelectGroup}
		/>
	);
};

GroupCenter.displayName = 'GroupCenter';
GroupCenter.defaultProps = {};

export default React.memo(GroupCenter);
