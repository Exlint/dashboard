import React from 'react';

import type { IRule } from '@/interfaces/rule';

import EDSvg from '@/ui/EDSvg';

import SelectedRule from './SelectedRule';
import Header from './Header';
import classes from './RuleConfiguration.module.scss';
import RuleAlertType from './RuleAlertType';
import CodeBasedConfigurations from './CodeBasedConfigurations';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly isRuleOnUpdate: boolean;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const RuleConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['ruleConfiguration']}>
			<span
				className={classes['disabled']}
				style={{ display: props.selectedRule === null ? 'flex' : 'none' }}
			/>
			<div className={classes['innerRuleConfiguration']}>
				<Header
					policyId={props.policyId}
					selectedRule={props.selectedRule}
					ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
					selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
					isRuleOnUpdate={props.isRuleOnUpdate}
				/>
				<SelectedRule selectedRule={props.selectedRule} onRemoveRule={props.onRemoveRule} />
				<RuleAlertType
					selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
					onSelectedRuleAlertType={props.onSelectedRuleAlertType}
				/>

				<CodeBasedConfigurations
					selectedRule={props.selectedRule}
					policyLabelInput="tempPolicyLabel"
					isBasedCodeConfigurationsClicked={props.isBasedCodeConfigurationsClicked}
					ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
					onClickBasedCodeConfigurations={props.onClickBasedCodeConfigurations}
					onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
				/>

				<div className={classes['inputRuleConfigurations']}>
					<EDSvg
						name="ruleSpecificConfiguration"
						className={classes['inputRuleConfigurations__icon']}
					/>
					<span className={classes['inputRuleConfigurations__text']}>
						Input code-based configurations
					</span>
					<button
						className={classes['editButton']}
						type="button"
						style={{
							backgroundColor: props.selectedRule === null ? '#D2D2D2' : '#8197b8',
							borderColor: props.selectedRule === null ? '#B7B7B7' : '#6b7d98',
						}}
					>
						<span className={classes['editButton__text']}>Edit</span>
						<EDSvg name="arrowRight" className={classes['editButton__icon']} />
					</button>
				</div>
			</div>
		</div>
	);
};

RuleConfigurationView.displayName = 'RuleConfigurationView';
RuleConfigurationView.defaultProps = {};

export default React.memo(RuleConfigurationView);
