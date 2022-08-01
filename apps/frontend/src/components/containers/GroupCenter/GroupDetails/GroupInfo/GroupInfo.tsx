/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import type { AxiosError } from 'axios';

import type { IGroup } from '@/interfaces/group';
import { backendApi } from '@/utils/http';

import GroupInfoView from './GroupInfo.view';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly onUpdateGroupLabel: (groupId: string, newLabel: string) => void;
	readonly onAddGroup: (group: IGroup) => void;
	readonly onRemoveGroup: (groupId: string) => void;
}

const GroupInfo: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [groupLabelState, setGroupLabelState] = useState<string>('');
	const [isLabelOnEditState, setIsLabelOnEditState] = useState<boolean>(false);
	const [copyGroupIdState, setCopyGroupIdState] = useState<boolean>(false);
	const [isMoreInfoClickedState, setIsMoreInfoClickedState] = useState<boolean>(false);

	const groupId = props.selectedGroup.id;

	const onEditLabelClick = (isEdit: boolean) => setIsLabelOnEditState(() => isEdit);

	const onChangeGroupLabel = (newGroupLabel: string) => {
		if (newGroupLabel.length >= 0 && newGroupLabel.length <= 20) {
			setGroupLabelState(() => newGroupLabel);
		}
	};

	const onUpdateGroupLabel = () => {
		let newGroupLabel = groupLabelState;

		if (groupLabelState === '') {
			newGroupLabel = props.selectedGroup.label;
		}

		props.onUpdateGroupLabel(props.selectedGroup.id, newGroupLabel);
		setIsLabelOnEditState(() => false);

		backendApi
			.patch(`/user/groups/edit-label/${props.selectedGroup.id}`, {
				label: newGroupLabel,
			})
			.then()
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	const onCancelLabelChanges = () => {
		setGroupLabelState(() => props.selectedGroup.label);
		setIsLabelOnEditState(() => false);
	};

	const onCopyGroupId = async () => {
		setCopyGroupIdState(() => true);

		await navigator.clipboard.writeText(groupId);

		setTimeout(() => setCopyGroupIdState(() => false), 2000);
	};

	const onMoreInfoClick = () => setIsMoreInfoClickedState(() => true);

	const onCloseMoreInfo = () => {
		setIsMoreInfoClickedState(() => false);
	};

	const onDeleteGroup = () => {
		props.onRemoveGroup(props.selectedGroup.id);

		backendApi.delete(`/user/groups/delete/${props.selectedGroup.id}`).catch((err: AxiosError) => {
			props.onAddGroup(props.selectedGroup);
			alert(err.response?.data);
		});
	};

	useEffect(() => {
		setGroupLabelState(() => props.selectedGroup.label!);
	}, [props.selectedGroup]);

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			groupLabel={groupLabelState}
			isLabelOnEdit={isLabelOnEditState}
			copyGroupId={copyGroupIdState}
			isMoreInfoClicked={isMoreInfoClickedState}
			onEditLabelClick={onEditLabelClick}
			onChangeGroupLabel={onChangeGroupLabel}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onCancelLabelChanges={onCancelLabelChanges}
			onCopyGroupId={onCopyGroupId}
			onMoreInfoClick={onMoreInfoClick}
			onCloseMoreInfo={onCloseMoreInfo}
			onDeleteGroup={onDeleteGroup}
		/>
	);
};

GroupInfo.displayName = 'GroupInfo';
GroupInfo.defaultProps = {};

export default React.memo(GroupInfo);
