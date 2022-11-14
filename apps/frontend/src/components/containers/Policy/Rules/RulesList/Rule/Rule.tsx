import type { ILibraryRule } from '@exlint-dashboard/common';
import React from 'react';

import RuleView from './Rule.view';

interface IProps {
	readonly name: string;
	readonly description: string;
	readonly category: ILibraryRule['category'];
	readonly isEnabled: boolean;
	readonly hasAutofix: boolean;
	readonly onDisableRule: VoidFunction;
	readonly onEnableRule: VoidFunction;
}

const Rule: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<RuleView
			name={props.name}
			description={props.description}
			category={props.category}
			isEnabled={props.isEnabled}
			hasAutofix={props.hasAutofix}
			onDisableRule={props.onDisableRule}
			onEnableRule={props.onEnableRule}
		/>
	);
};

Rule.displayName = 'Rule';
Rule.defaultProps = {};

export default React.memo(Rule);
