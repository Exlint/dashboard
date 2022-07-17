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

	useEffect(() => {
		setGroupLabelState(() => props.selectedGroup.label);
	}, [props.selectedGroup]);

	const onChangeGroupLabel = (newGroupLabel: string) => {
		setGroupLabelState(() => newGroupLabel);
	};

	const onUpdateGroupLabel = () => {
		if (groupLabelState !== undefined && groupLabelState!.length > 0) {
			backendApiAxios
				.post('/edit-group-label', { groupId: props.selectedGroup.id, label: groupLabelState })
				.then()
				.catch((err: AxiosError) => {
					alert(err.response?.data);
				});
		}
	};

	const onLabelOnEdit = () => {
		setIsLabelOnEditState(() => !isLabelOnEditState);
	};

	const onCancelLabelChanges = () => {
		setIsLabelOnEditState(() => false);
	};

	return (
		<GroupInfoView
			selectedGroup={props.selectedGroup}
			groupLabel={groupLabelState}
			isLabelOnEdit={isLabelOnEditState}
			onChangeGroupLabel={onChangeGroupLabel}
			onUpdateGroupLabel={onUpdateGroupLabel}
			onLabelOnEdit={onLabelOnEdit}
			onCancelLabelChanges={onCancelLabelChanges}
		/>
	);
};

GroupInfo.displayName = 'GroupInfo';
GroupInfo.defaultProps = {};

export default React.memo(GroupInfo);
