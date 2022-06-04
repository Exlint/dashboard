import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { ILibrary } from '@/interfaces/library';

import PolicySidebar from './PolicySidebar';
import RuleCreation from './RuleCreation';

import classes from './PolicyConfiguration.module.scss';
import NewPolicyConfiguration from './NewPolicyConfiguration';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
}

const PolicyConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const route = useLocation();

	let currentPage;

	if (route.pathname.includes('/Configurations')) {
		currentPage = 'configurations';
	} else if (route.pathname.includes('/ruleOnboarding')) {
		currentPage = 'ruleCreation';
	}

	return (
		<section className={classes['policyConfiguration']}>
			<PolicySidebar
				selectedLibrary={props.selectedLibrary}
				policyLabelInput={props.policyLabelInput}
			/>
			<Route path="/groupCenter/group/Policy/Configurations-Onboarding">
				{currentPage === 'configurations' && (
					<NewPolicyConfiguration policyLabelInput={props.policyLabelInput} />
				)}
			</Route>
			<Route path="/groupCenter/group/Policy/ruleOnboarding">
				{currentPage === 'ruleCreation' && <RuleCreation policyLabelInput={props.policyLabelInput} />}
			</Route>
		</section>
	);
};

PolicyConfiguration.displayName = 'PolicyConfiguration';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);
