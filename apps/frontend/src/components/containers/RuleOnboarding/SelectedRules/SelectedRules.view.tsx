import React from 'react';

import type { IRule } from '@/interfaces/rule';

import classes from './SelectedRules.module.scss';
import SelectedRule from './SelectedRule/SelectedRule';

interface IProps {
	readonly selectedRulesList: IRule[] | null;
	readonly onRemoveRule: () => void;
	readonly onEditRule: (_: string) => void;
}

const SelectedRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div
			className={classes['ruleConfiguration']}
			style={{
				borderImage: props.selectedRulesList
					? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
					: 'none',
			}}
		>
			<span
				className={classes['disabled']}
				style={{ display: props.selectedRulesList ? 'none' : 'flex' }}
			/>
			<div className={classes['innerRuleConfiguration']}>
				<span className={classes['innerRuleConfiguration__title']}>Selected Rules</span>
				<hr className={classes['headerDivider']} />
				<div className={classes['selectedRules']}>
					{props.selectedRulesList &&
						props.selectedRulesList.map((rule, index) => {
							return (
								<SelectedRule
									key={index}
									ruleName={rule.ruleName!}
									ruleCatagory={rule.category!}
									ruleAlertType={rule.alertType}
									hasConfig={rule.hasConfig!}
									onRemoveRule={props.onRemoveRule}
									onEditRule={props.onEditRule}
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
