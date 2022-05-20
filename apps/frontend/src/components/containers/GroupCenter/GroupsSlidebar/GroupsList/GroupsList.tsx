import React from 'react';

import GroupsListView from './GroupsList.view';

interface IProps {
	readonly groupsList: { title: string; id: number; policies: number[] }[] | [];
}

const GroupsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <GroupsListView groupsList={props.groupsList} />;
};

GroupsList.displayName = 'GroupsList';
GroupsList.defaultProps = {};

export default React.memo(GroupsList);
