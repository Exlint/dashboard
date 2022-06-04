import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import NavigateBackButton from '@/ui/NavigateBackButton';

// import { Trans, useTranslation } from 'react-i18next';

import classes from './RuleCreation.module.scss';
import Options from './Options';
import Recommended from './Recommended';
import Manually from './Manually';
import FileFormat from './FileFormat';

interface IProps {
	readonly policyLabelInput: string | null;
}

const RuleCreationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();
	const route = useLocation();

	let currentPage;

	if (route.pathname === '/groupCenter/group/Policy/ruleOnboarding') {
		currentPage = 'options';
	}

	return (
		<section className={classes['ruleCration']}>
			<NavigateBackButton />
			{currentPage === 'options' && <Options policyLabelInput={props.policyLabelInput} />}

			<Suspense fallback={null}>
				<Switch>
					<Route path="/groupCenter/group/Policy/ruleOnboarding/manual">
						<Manually />
					</Route>
					<Route path="/groupCenter/group/Policy/ruleOnboarding/manual">
						<Recommended />
					</Route>
					<Route path="/groupCenter/group/Policy/ruleOnboarding/file">
						<FileFormat policyLabelInput={props.policyLabelInput} />
					</Route>
					<Redirect path="*" to="/groupCenter/group/Policy/ruleOnboarding" />
				</Switch>
			</Suspense>
		</section>
	);
};

RuleCreationView.displayName = 'RuleCreationView';
RuleCreationView.defaultProps = {};

export default React.memo(RuleCreationView);
