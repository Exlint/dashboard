import React, { useState } from 'react';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';
import GroupCenterView from './GroupCenter.view';

interface IProps {}

const GroupCenter: React.FC<IProps> = () => {
	const [selectedGroupState, setSelectGroupState] = useState<IGroup | null>(null);

	const [selectedLibraryState, setSelectLibraryState] = useState<ILibrary | null>(null);

	const [policyLabelInputState, setPolicyLabelInputState] = useState<string | null>(null);

	const onPolicyLabelInputChanged = (input: string) => setPolicyLabelInputState(() => input);

	const onSelectedLibrary = (library: ILibrary) => {
		setSelectLibraryState(() => library);
	};

	const onCancelSelectedLibrary = () => {
		setSelectLibraryState(() => null);
	};

	const onSelectedGroup = (group: IGroup) => {
		setSelectGroupState(() => group);
		setSelectLibraryState(() => null);
	};

	return (
		<GroupCenterView
			selectedGroup={selectedGroupState}
			selectedLibrary={selectedLibraryState}
			policyLabelInput={policyLabelInputState}
			onPolicyLabelInputChanged={onPolicyLabelInputChanged}
			onSelectedLibrary={onSelectedLibrary}
			onCancelSelectedLibrary={onCancelSelectedLibrary}
			onSelectedGroup={onSelectedGroup}
		/>
	);
};

GroupCenter.displayName = 'GroupCenter';
GroupCenter.defaultProps = {};

export default React.memo(GroupCenter);
