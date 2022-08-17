import React, { useState } from 'react';

import type { IPolicyData } from '@/interfaces/libraries';

import GroupView from './Group.view';

interface IProps {
	readonly groupId: string;
	readonly groupLabel: string;
	readonly policies: IPolicyData[];
	readonly isSelected: boolean;
	readonly onSelectGroup: () => void;
}

const Group: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [copyGroupIdState, setCopyGroupIdState] = useState<boolean>(false);
	const [slicedPoliciesState, setSlicedPoliciesState] = useState<IPolicyData[] | null>(null);

	if (props.policies !== undefined) {
		setSlicedPoliciesState(() => props.policies.slice(0, 4));
	}

	const onCopyGroupId = async () => {
		setCopyGroupIdState(() => true);

		await navigator.clipboard.writeText(props.groupId);

		setTimeout(() => setCopyGroupIdState(() => false), 2000);
	};

	return (
		<GroupView
			groupId={props.groupId}
			groupLabel={props.groupLabel}
			policies={slicedPoliciesState}
			isSelected={props.isSelected}
			copyGroupId={copyGroupIdState}
			onSelectGroup={props.onSelectGroup}
			onCopyGroupId={onCopyGroupId}
		/>
	);
};

Group.displayName = 'Group';
Group.defaultProps = {};

export default React.memo(Group);
