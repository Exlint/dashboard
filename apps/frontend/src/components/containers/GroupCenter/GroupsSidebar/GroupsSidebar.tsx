import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import axios, { AxiosError, AxiosResponse } from 'axios';
import uniqid from 'uniqid';

import { IGroup } from '@/interfaces/group';
import { IGroupId } from '@/interfaces/groupId';
import { currentDate } from '@/utils/currentDate';

import * as fromApp from '@/store/app';
import * as groupsActions from '@/store/actions/groups';
import GroupsSidebarView from './GroupsSidebar.view';

interface IPropsFromState {
	readonly groups: IGroup[];
}

interface IPropsFromDispatch {
	addGroup: (group: IGroup) => groupsActions.AddGroup;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {
	readonly selectedGroup: IGroup | null;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const GroupsSidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onCreateNewGroup = () => {
		axios
			.post<IGroupId>(`${process.env.REACT_APP_BACKEND_URL}/create`, {})
			.then((response: AxiosResponse<IGroupId>) => {
				props.addGroup({
					label: 'New Group',
					createdAt: currentDate(),
					id: response.data.id,
					policies: [],
				});
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});

		props.addGroup({ label: 'New Group', createdAt: currentDate(), id: uniqid(), policies: [] });
	};

	return (
		<GroupsSidebarView
			groups={props.groups}
			selectedGroup={props.selectedGroup}
			onCreateNewGroup={onCreateNewGroup}
			onSelectedGroup={props.onSelectedGroup}
		/>
	);
};

GroupsSidebar.displayName = 'GroupsSidebar';
GroupsSidebar.defaultProps = {};

const mapStateToProps = (state: fromApp.AppState) => {
	return {
		groups: state.groups.groups,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<groupsActions.GroupsTypes>): IPropsFromDispatch => {
	return {
		addGroup: (group: IGroup): groupsActions.AddGroup => dispatch(groupsActions.addGroup(group)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupsSidebar));
