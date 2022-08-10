import React from 'react';

import RuleOnboarding from '@/containers/RuleOnboarding';

interface IProps {}

const RuleOnboardingPage: React.FC<IProps> = () => {
	return <RuleOnboarding />;
};

RuleOnboardingPage.displayName = 'RuleOnboardingPage';
RuleOnboardingPage.defaultProps = {};

export default RuleOnboardingPage;
