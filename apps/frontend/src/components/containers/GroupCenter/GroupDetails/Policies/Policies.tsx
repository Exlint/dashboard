import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { IPolicyData } from '@/interfaces/libraries';

import PoliciesView from './Policies.view';

interface IProps {
	readonly groupPolicies: IPolicyData[];
}

const Policies: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onNavigateToNewPolicy = () => {
		navigate('/group-center/new-policy');
	};

	return <PoliciesView groupPolicies={props.groupPolicies} onNavigateToNewPolicy={onNavigateToNewPolicy} />;
};

Policies.displayName = 'Policies';
Policies.defaultProps = {};

export default React.memo(Policies);
