import React from 'react';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';

import GroupDetailsView from './GroupDetails.view';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const GroupDetails: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<GroupDetailsView
			selectedGroup={props.selectedGroup}
			selectedLibrary={props.selectedLibrary}
			policyLabelInput={props.policyLabelInput}
			onPolicyLabelInputChanged={props.onPolicyLabelInputChanged}
			onSelectedLibrary={props.onSelectedLibrary}
			onCancelSelectedLibrary={props.onCancelSelectedLibrary}
		/>
	);
};

GroupDetails.displayName = 'GroupDetails';
GroupDetails.defaultProps = {};

export default React.memo(GroupDetails);
