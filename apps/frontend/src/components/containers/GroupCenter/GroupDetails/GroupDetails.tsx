import React from 'react';

import { IGroup } from '@/interfaces/group';

import GroupDetailsView from './GroupDetails.view';

interface IProps {
	readonly selectedGroup: IGroup;
}

const GroupDetails: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <GroupDetailsView selectedGroup={props.selectedGroup} />;
};

GroupDetails.displayName = 'GroupDetails';
GroupDetails.defaultProps = {};

export default React.memo(GroupDetails);
