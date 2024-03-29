import type { ILibraryRule } from '@exlint.io/common';
import React from 'react';

import RuleView from './Rule.view';

interface IProps {
	readonly name: string;
	readonly description: string;
	readonly category: ILibraryRule['category'];
	readonly isEnabled: boolean;
	readonly hasAutofix: boolean;
	readonly isSelected?: boolean;
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
			isSelected={props.isSelected}
			onDisableRule={props.onDisableRule}
			onEnableRule={props.onEnableRule}
		/>
	);
};

Rule.displayName = 'Rule';
Rule.defaultProps = {};

export default React.memo(Rule);
