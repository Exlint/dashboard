import React from 'react';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {}

const RuleConfiguration: React.FC<IProps> = () => {
	return <RuleConfigurationView />;
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
