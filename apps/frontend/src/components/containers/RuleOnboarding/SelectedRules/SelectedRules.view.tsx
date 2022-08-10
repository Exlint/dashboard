import React from 'react';

import type { ILibraryRule } from '@/interfaces/libraries';

import classes from './SelectedRules.module.scss';
import SelectedRule from './SelectedRule/SelectedRule';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly selectedRules: ILibraryRule[] | null;
	readonly onRemoveRule: () => void;
	readonly onEditRule: (rule: ILibraryRule) => void;
}

const SelectedRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div
			className={classes['ruleConfiguration']}
			style={{
				borderImage: props.selectedRules
					? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
					: 'none',
			}}
		>
			<span
				className={classes['disabled']}
				style={{ display: props.selectedRules ? 'none' : 'flex' }}
			/>
			<div className={classes['innerRuleConfiguration']}>
				<span className={classes['innerRuleConfiguration__title']}>Selected Rules</span>
				<hr className={classes['headerDivider']} />
				<div className={classes['selectedRules']}>
					{props.selectedRules &&
						Object.entries(props.selectedRules).map((rule, index) => {
							return (
								<SelectedRule
									key={index}
									selectedRule={props.selectedRule}
									ruleName={rule[1].ruleName!}
									ruleCatagory={rule[1].category!}
									ruleAlertType={rule[1].category}
									onRemoveRule={props.onRemoveRule}
									onEditSelectedRule={props.onEditRule}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

SelectedRulesView.displayName = 'SelectedRulesView';
SelectedRulesView.defaultProps = {};

export default React.memo(SelectedRulesView);
