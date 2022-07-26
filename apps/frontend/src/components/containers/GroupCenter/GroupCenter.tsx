import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import moment from 'moment';

import { backendApiAxios } from '@/utils/http';
import { IGroup } from '@/interfaces/group';
import { ICreateGroupResponseData, IGetGroupsResponseData } from '@/interfaces/responses';

import GroupCenterView from './GroupCenter.view';

interface IProps {}

const GroupCenter: React.FC<IProps> = () => {
	const [groupsListState, setGroupsListState] = useState<IGroup[]>([]);
	const [selectedGroupIndexState, setSelectGroupIndexState] = useState<number | null>(null);
	const currentDate = moment();

	useEffect(() => {
		backendApiAxios.get<IGetGroupsResponseData>('/group-list/', {}).then((response) => {
			setGroupsListState(response.data.groupsList);

			if (response.data.groupsList.length > 0) {
				setSelectGroupIndexState(() => 0);
			}
		});
	}, [backendApiAxios]);

	const onCreateNewGroup = () => {
		backendApiAxios
			.post<ICreateGroupResponseData>('/create-group/')
			.then((response) => {
				setGroupsListState((prev) => {
					return [
						...prev,
						{
							label: 'New Group',
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
