import React from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { groupsActions } from '@/store/reducers/groups';
import type { IDeleteSideBarGroupPayload } from '@/store/interfaces/groups';
import { backendApi } from '@/utils/http';

import DeleteGroupView from './DeleteGroup.view';

interface IPropsFromDispatch {
	readonly deleteSideBarGroup: (
		deletePayload: IDeleteSideBarGroupPayload,
	) => PayloadAction<IDeleteSideBarGroupPayload>;
}

interface IProps extends IPropsFromDispatch {
	readonly groupId: string;
	readonly groupLabel: string;
}

const DeleteGroup: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onDeleteGroupConfirmClick = () => {
		backendApi.delete(`/user/groups/${props.groupId}`).then(() => {
			props.deleteSideBarGroup({ id: props.groupId });

			navigate('/group-center');
		});
	};

	return (
		<DeleteGroupView
			groupLabel={props.groupLabel}
			onDeleteGroupConfirmClick={onDeleteGroupConfirmClick}
		/>
	);
};

DeleteGroup.displayName = 'DeleteGroup';
DeleteGroup.defaultProps = {};

export default connect(null, {
	deleteSideBarGroup: groupsActions.deleteSideBarGroup,
})(React.memo(DeleteGroup));
