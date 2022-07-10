import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';
import { IParams } from '@/interfaces/params';
import * as fromApp from '@/store/app';
import * as groupsActions from '@/store/actions/groups';
import { IEditGroupLable } from '@/interfaces/editGroupLable';

import GroupInfoView from './GroupInfo.view';

interface IPropsFromState {
	readonly groups: IGroup[];
}

interface IPropsFromDispatch {
	editGroupLable: (groupId: string, newLable: string) => groupsActions.EditGroupLabel;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {
	readonly selectedGroup: IGroup | null;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const GroupInfo: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNewPolicyClickedState, setIsNewPolicyClickedState] = useState<boolean>(false);
	const [isLableOnEditState, setIsLableOnEditState] = useState<boolean>(false);
	const [groupLableState, setGroupLableState] = useState<string | null>(null);

	const { groupId } = useParams<IParams>();

	const onChangeGroupLable = (newGroupLable: string) => {
		if (newGroupLable.length) {
			axios
				.post<IEditGroupLable>(`${process.env.REACT_APP_BACKEND_URL}/edit-label`, {
					label: newGroupLable,
				})
				.then(() => {
					props.editGroupLable(groupId!, newGroupLable);
				})
				.catch((err: AxiosError) => {
					alert(err.response?.data);
				});
		}
	};

	const selectedGroup = props.groups.filter((group) => group.id === groupId)[0];

	useEffect(() => {
		setGroupLableState(() => selectedGroup!.label);
	}, [selectedGroup]);

	const onLableOnEdit = () => {
		setIsLableOnEditState(!isLableOnEditState);
	};

	const onUpdateLableChanges = () => {
		setIsLableOnEditState(false);
	};

	const onCancelLableChanges = () => {
		setIsLableOnEditState(false);
	};

	const onCreateNewPolicy = () => {
		setIsNewPolicyClickedState(() => !isNewPolicyClickedState);
	};

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			isNewPolicyClicked={isNewPolicyClickedState}
			selectedLibrary={props.selectedLibrary}
			policyLabelInput={props.policyLabelInput}
			isLableOnEdit={isLableOnEditState}
			groupLable={groupLableState}
			onUpdateLableChanges={onUpdateLableChanges}
			onCancelLableChanges={onCancelLableChanges}
			onChangeGroupLable={onChangeGroupLable}
			onLableOnEdit={onLableOnEdit}
			onPolicyLabelInputChanged={props.onPolicyLabelInputChanged}
			onSelectedLibrary={props.onSelectedLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

GroupInfo.displayName = 'GroupInfo';
GroupInfo.defaultProps = {};

const mapStateToProps = (state: fromApp.AppState) => {
	return {
		groups: state.groups.groups,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<groupsActions.GroupsTypes>): IPropsFromDispatch => {
	return {
		editGroupLable: (groupId: string, newLable: string): groupsActions.EditGroupLabel =>
			dispatch(groupsActions.editGroupLabel(groupId, newLable)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupInfo));
