import React, { useState } from 'react';

import type { IGroup } from '@/interfaces/group';
import { backendApi } from '@/utils/http';

import { useClickOutside } from '@/hooks/click-outside';

import GroupInfoView from './GroupInfo.view';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly onUpdateGroupLabel: (groupId: string, newLabel: string) => void;
	readonly onAddGroup: (group: IGroup) => void;
	readonly onRemoveGroup: (groupId: string) => void;
}

const GroupInfo: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [copyGroupIdState, setCopyGroupIdState] = useState<boolean>(false);

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

	const onDeleteGroup = () => {
		console.log('blabla');
		props.onRemoveGroup(props.selectedGroup.id);
		toggleTooltipVisibility();

		backendApi.delete(`/user/groups/${props.selectedGroup.id}`).catch(() => {
			props.onAddGroup(props.selectedGroup);
		});
	};

	const {
		ref: tooltopRef,
		isVisible: isTooltipVisible,
		toggleVisibility: toggleTooltipVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			copyGroupId={copyGroupIdState}
			tooltopRef={tooltopRef}
			isTooltipVisible={isTooltipVisible}
			toggleTooltipVisibility={toggleTooltipVisibility}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onCopyGroupId={onCopyGroupId}
			onDeleteGroup={onDeleteGroup}
		/>
	);
};

GroupInfo.displayName = 'GroupInfo';
GroupInfo.defaultProps = {};

export default React.memo(GroupInfo);
