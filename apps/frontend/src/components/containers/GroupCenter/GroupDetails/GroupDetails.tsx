import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IGetGroupResponseData } from '@exlint-dashboard/common';

import { backendApi } from '@/utils/http';
import type {
	IEditSideBarGroupLabelPayload,
	ISelectedSideBarGroup,
	ISetSelectedSideBarGroupPayload,
} from '@/store/interfaces/groups';
import { groupsActions } from '@/store/reducers/groups';
import type { AppState } from '@/store/app';

import GroupDetailsView from './GroupDetails.view';

interface IPropsFromState {
	readonly selectedSideBarGroup: ISelectedSideBarGroup;
}

interface IPropsFromDispatch {
	readonly editSideBarGroup: (
		editDetails: IEditSideBarGroupLabelPayload,
	) => PayloadAction<IEditSideBarGroupLabelPayload>;
	readonly setSelectedSideBarGroup: (
		selectedDetails: ISetSelectedSideBarGroupPayload,
	) => PayloadAction<ISetSelectedSideBarGroupPayload>;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const GroupDetails: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();
	const params = useParams<Record<string & 'groupId', string>>();

	useEffect(() => {
		backendApi
			.get<IGetGroupResponseData>(`/user/groups/${params.groupId!}`)
			.then((response) => {
				props.setSelectedSideBarGroup({
					selectedSideBarGroup: {
						...response.data,
						id: params.groupId!,
					},
				});
			})
			.catch(() => navigate('/group-center'));
	}, [params, backendApi]);

	return <GroupDetailsView selectedGroup={props.selectedSideBarGroup} />;
};

GroupDetails.displayName = 'GroupDetails';
GroupDetails.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		selectedSideBarGroup: state.groups.selectedSideBarGroup!,
	};
};

export default connect(mapStateToProps, {
	editSideBarGroup: groupsActions.editSideBarGroup,
	setSelectedSideBarGroup: groupsActions.setSelectedSideBarGroup,
})(React.memo(GroupDetails));
