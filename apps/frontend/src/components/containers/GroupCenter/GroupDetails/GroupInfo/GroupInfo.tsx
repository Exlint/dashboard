import React, { useState } from 'react';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';

import GroupInfoView from './GroupInfo.view';

interface IProps {
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

	const onChangeGroupLable = (newGroupLable: string) => setGroupLableState(() => newGroupLable);

	// const onPasswordInputChange = (input: string) => setPasswordInputState(() => input);

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

export default React.memo(GroupInfo);
