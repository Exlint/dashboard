import type { Prisma } from '@prisma/client';
import React from 'react';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly ruleId: string | null;
	readonly ruleName: string | null;
	readonly ruleConfiguration: Prisma.JsonArray | null;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RuleConfigurationView
			ruleId={props.ruleId}
			ruleName={props.ruleName}
			ruleConfiguration={props.ruleConfiguration}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
