import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import { backendApi } from '@/utils/http';

import type { IGetAllGroupsResponse, ISideBarGroup } from './interfaces/group';

import GroupCenterView from './GroupCenter.view';

interface IProps {}

const GroupCenter: React.FC<IProps> = () => {
	const [sideBarGroupsState, setSideBarGroupsState] = useState<ISideBarGroup[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		backendApi.get<IGetAllGroupsResponse>('/user/groups').then((response) => {
			const groups = response.data.groups;

			setSideBarGroupsState(() => groups);

			const groupId = groups[0]?.id;

			if (groupId) {
				navigate(`/group-center/${groupId}`);
			}
		});
	}, [backendApi]);

	const onAddGroupToSideBar = (group: ISideBarGroup) => {
		setSideBarGroupsState((prev) => [...prev, group]);

		scroller.scrollTo('group-list-end', {
			containerId: 'group-list-container',
			smooth: true,
			duration: 500,
		});
	};

	return <GroupCenterView sideBarGroups={sideBarGroupsState} onAddGroupToSideBar={onAddGroupToSideBar} />;
};

GroupCenter.displayName = 'GroupCenter';
GroupCenter.defaultProps = {};

export default React.memo(GroupCenter);
