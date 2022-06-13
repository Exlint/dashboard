import React from 'react';

import { IGroup } from '@/interfaces/group';

import PoliciesView from './Policies.view';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly onCreateNewPolicy: () => void;
}

const Policies: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PoliciesView selectedGroup={props.selectedGroup} />;
};

Policies.displayName = 'Policies';
Policies.defaultProps = {};

export default React.memo(Policies);
