import React, { useState } from 'react';

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
	const [copyGroupIdState, setCopyGroupIdState] = useState<boolean>(false);
	const [isMoreInfoClickedState, setIsMoreInfoClickedState] = useState<boolean>(false);

	const groupId = props.selectedGroup.id;

	const onUpdateGroupLabel = (newInput: string) => {
		const oldLabel = newInput;
		let newLabel = newInput;

		if (newInput === '') {
			newLabel = props.selectedGroup.label;
		}

		props.onUpdateGroupLabel(props.selectedGroup.id, newLabel);

		backendApi
			.patch(`/user/groups/${props.selectedGroup.id}`, {
				label: newLabel,
			})
			.catch(() => {
				props.onUpdateGroupLabel(props.selectedGroup.id, oldLabel);
			});
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
		setIsMoreInfoClickedState(() => false);

		backendApi.delete(`/user/groups/${props.selectedGroup.id}`).catch(() => {
			props.onAddGroup(props.selectedGroup);
		});
	};

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			copyGroupId={copyGroupIdState}
			isMoreInfoClicked={isMoreInfoClickedState}
			onUpdateGroupLabel={onUpdateGroupLabel}
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
