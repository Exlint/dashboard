import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { backendApi } from '@/utils/http';

import type { IGetGroupResponse, IGroup } from './interfaces/group';

import GroupDetailsView from './GroupDetails.view';

interface IProps {}

const GroupDetails: React.FC<IProps> = () => {
	const [groupState, setGroupState] = useState<IGroup | null>(null);

	const navigate = useNavigate();
	const params = useParams<{ readonly '*': string }>();
	const groupId = params['*'];

	useEffect(() => {
		if (!groupId) {
			navigate('/group-center');

			return;
		}

		backendApi
			.get<IGetGroupResponse>(`/user/groups/${groupId}`)
			.then((response) => {
				setGroupState(() => response.data);
			})
			.catch(() => navigate('/group-center'));
	}, [groupId, backendApi]);

	return <GroupDetailsView group={groupState} />;
};

GroupDetails.displayName = 'GroupDetails';
GroupDetails.defaultProps = {};

export default React.memo(GroupDetails);
