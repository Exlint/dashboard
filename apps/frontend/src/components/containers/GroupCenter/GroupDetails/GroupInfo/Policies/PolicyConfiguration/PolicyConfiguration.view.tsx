import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
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

	if (route.pathname.includes('/manual')) {
		currentPage = 'manual';
	}

	return (
		<section
			className={classes['policyConfiguration']}
			style={{ height: currentPage !== 'manual' ? '100%' : 'fit-content' }}
		>
			<PolicySidebar
				selectedLibrary={props.selectedLibrary}
				policyLabelInput={props.policyLabelInput}
			/>
			<Suspense fallback={null}>
				<Switch>
					<Route path="/groupCenter/group/Policy/Configurations-Onboarding">
						<NewPolicyConfiguration policyLabelInput={props.policyLabelInput} />
					</Route>
					<Route path="/groupCenter/group/Policy/ruleOnboarding">
						<RuleCreation
							policyLabelInput={props.policyLabelInput}
							selectedLibrary={props.selectedLibrary}
						/>
					</Route>
					<Redirect path="*" to="/groupCenter/group/Policy/ruleOnboarding" />
				</Switch>
			</Suspense>
		</section>
	);
};

PolicyConfiguration.displayName = 'PolicyConfiguration';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);
