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
	const [copyGroupIdState, setCopyGroupIdState] = useState<boolean>(false);
	const [isMoreInfoClickedState, setIsMoreInfoClickedState] = useState<boolean>(false);

	const groupId = props.selectedGroup.id;

	const onLabelOnEdit = (isEdit: boolean) => {
		setIsLabelOnEditState(() => isEdit);
	};

	const onChangeGroupLabel = (newGroupLabel: string) => {
		if (newGroupLabel.length > 0 && newGroupLabel.length <= 20) {
			setGroupLabelState(() => newGroupLabel);
		}
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

	const onCopyGroupId = async () => {
		setCopyGroupIdState(() => true);

		await navigator.clipboard.writeText(groupId);

		setTimeout(() => setCopyGroupIdState(() => false), 2000);
	};

	const onMoreInfoClick = () => {
		setIsMoreInfoClickedState(() => !isMoreInfoClickedState);
	};

	useEffect(() => {
		setGroupLabelState(() => props.selectedGroup.label);
	}, [props.selectedGroup]);

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			groupLabel={groupLabelState}
			isLabelOnEdit={isLabelOnEditState}
			copyGroupId={copyGroupIdState}
			isMoreInfoClicked={isMoreInfoClickedState}
			onLabelOnEdit={onLabelOnEdit}
			onChangeGroupLabel={onChangeGroupLabel}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onCancelLabelChanges={onCancelLabelChanges}
			onCopyGroupId={onCopyGroupId}
			onMoreInfoClick={onMoreInfoClick}
		/>
	);
};

GroupInfo.displayName = 'GroupInfo';
GroupInfo.defaultProps = {};

export default React.memo(GroupInfo);
