import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { IGroup } from '@/interfaces/group';
import { backendApiAxios } from '@/utils/http';

import GroupInfoView from './GroupInfo.view';

interface IProps {
	readonly selectedGroup: IGroup;
}

const GroupInfo: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [groupLabelState, setGroupLabelState] = useState<string>('');
	const [isLabelOnEditState, setIsLabelOnEditState] = useState<boolean>(false);
	const [isHoveringState, setIsHoveringState] = useState<boolean>(false);

	const onLabelOnEdit = (isEdit: boolean) => {
		setIsLabelOnEditState(() => isEdit);
	};

	const onHovering = (isHovering: boolean) => {
		setIsHoveringState(() => isHovering);
	};

	const onChangeGroupLabel = (newGroupLabel: string) => {
		setGroupLabelState(() => newGroupLabel);
	};

	const onUpdateGroupLabel = () => {
		let newGroupLabel = groupLabelState;

		if (groupLabelState === '') {
			newGroupLabel = props.selectedGroup.label;
		}

		backendApiAxios
			.post('/edit-group-label', { groupId: props.selectedGroup.id, label: newGroupLabel })
			.then()
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	const onCancelLabelChanges = () => {
		setGroupLabelState(() => props.selectedGroup.label);
		setIsLabelOnEditState(() => false);
	};

	useEffect(() => {
		setGroupLabelState(() => props.selectedGroup.label);
	}, [props.selectedGroup, onUpdateGroupLabel]);

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			groupLabel={groupLabelState}
			isLabelOnEdit={isLabelOnEditState}
			isHovering={isHoveringState}
			onLabelOnEdit={onLabelOnEdit}
			onHovering={onHovering}
			onChangeGroupLabel={onChangeGroupLabel}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onCancelLabelChanges={onCancelLabelChanges}
		/>
	);
};

GroupInfo.displayName = 'GroupInfo';
GroupInfo.defaultProps = {};

export default React.memo(GroupInfo);
