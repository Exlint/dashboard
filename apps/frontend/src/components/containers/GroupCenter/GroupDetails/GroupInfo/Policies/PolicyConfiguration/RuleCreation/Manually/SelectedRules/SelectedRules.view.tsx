import React from 'react';

import { IRule } from '@/interfaces/rule';

import classes from './SelectedRules.module.scss';
import SelectedRule from './SelectedRule/SelectedRule';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly selectedRules: Record<string, IRule> | null;
	readonly onRemoveRule: () => void;
	readonly onEditSelectedRule: (rule: IRule) => void;
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
						Object.values(props.selectedRules).map((rule, index) => {
							return (
								<SelectedRule
									key={index}
									selectedRule={rule}
									ruleName={rule.name}
									ruleCatagory={rule.catagory}
									ruleAlertType={rule.alertType}
									onRemoveRule={props.onRemoveRule}
									onEditSelectedRule={props.onEditSelectedRule}
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
