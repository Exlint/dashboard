import type { Prisma } from '@prisma/client';
import React from 'react';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly selectedRuleConfiguration: Prisma.JsonArray | null;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <RuleConfigurationView selectedRuleConfiguration={props.selectedRuleConfiguration} />;
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
