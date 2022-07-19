import React from 'react';

import { IPolicy } from '@/interfaces/policy';

import PoliciesListView from './PoliciesList.view';

interface IProps {
	readonly groupPolicy: IPolicy[];
}

const PoliciesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PoliciesListView groupPolicy={props.groupPolicy} />;
};

PoliciesList.displayName = 'PoliciesList';
PoliciesList.defaultProps = {};

export default React.memo(PoliciesList);
