import React from 'react';

import GroupView from './Group.view';

interface IProps {
	readonly title: string;
	readonly id: number;
	readonly policies: number[];
	readonly key: number;
}

const Group: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <GroupView title={props.title} id={props.id} policies={props.policies} key={props.key} />;
};

Group.displayName = 'Group';
Group.defaultProps = {};

export default React.memo(Group);
