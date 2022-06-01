import React from 'react';

import { IGroup } from '@/interfaces/group';

import PoliciesListView from './PoliciesList.view';

interface IProps {
	readonly selectedGroup: IGroup | null;
}

const PoliciesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PoliciesListView selectedGroup={props.selectedGroup} />;
};

PoliciesList.displayName = 'PoliciesList';
PoliciesList.defaultProps = {};

export default React.memo(PoliciesList);
