import React from 'react';

import { IPolicy } from '@/interfaces/policy';

import PoliciesView from './Policies.view';

interface IProps {
	readonly groupPolicies: IPolicy[];
}

const Policies: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PoliciesView groupPolicies={props.groupPolicies} />;
};

Policies.displayName = 'Policies';
Policies.defaultProps = {};

export default React.memo(Policies);
