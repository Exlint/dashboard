import React from 'react';

import { ruleAlertTypes } from '@/data/ruleAlertTypes';

import classes from './SelectedRules.module.scss';
import SelectedRule from './SelectedRule/SelectedRule';

interface IProps {
	readonly rulesObject: { [key: string]: string };
	readonly selectedRulesIndexes: number[];
	readonly selectedRuleAlertTypeIndex: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onRemoveRuleIndexFromList: (index: number) => void;
	readonly onEditSelectedRule: (index: number) => void;
}

const SelectedRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div
			className={classes['ruleConfiguration']}
			style={{
				borderImage:
					props.selectedRulesIndexes.length > 0
						? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
						: 'none',
			}}
		>
			<span
				className={classes['disabled']}
				style={{ display: props.selectedRulesIndexes.length === 0 ? 'flex' : 'none' }}
			/>
			<div className={classes['innerRuleConfiguration']}>
				<span className={classes['innerRuleConfiguration__title']}>Selected Rules</span>
				<hr className={classes['headerDivider']} />
				<div className={classes['selectedRules']}>
					{Object.keys(props.rulesObject).map((ruleName, index) => {
						if (props.selectedRulesIndexes.includes(index)) {
							return (
								<SelectedRule
									ruleIndex={index}
									ruleName={ruleName}
									ruleCatagory={index < 20 ? 'Best Practices' : 'Stylistic Issues'}
									ruleAlertType={ruleAlertTypes[0]}
									ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
									onRemoveRuleIndexFromList={props.onRemoveRuleIndexFromList}
									onEditSelectedRule={props.onEditSelectedRule}
								/>
							);
						}

						return;
					})}
				</div>
			</div>
		</div>
	);
};

SelectedRulesView.displayName = 'SelectedRulesView';
SelectedRulesView.defaultProps = {};

export default React.memo(SelectedRulesView);
