import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import { IRule } from '@/interfaces/rule';
import VSvg from '@/ui/VSvg';

import SelectedRule from './SelectedRule';
import Header from './Header';
import classes from './RuleConfiguration.module.scss';
import RuleAlertType from './RuleAlertType';
import CodeBasedConfigurations from './CodeBasedConfigurations';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly selectedRuleAlertTypeIndex: number[];
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
	readonly onAddRuleToList: (rule: IRule) => void;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const RuleConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['ruleConfiguration']}>
			<span
				className={classes['disabled']}
				style={{ display: props.selectedRule === null ? 'flex' : 'none' }}
			/>
			<div className={classes['innerRuleConfiguration']}>
				<Header
					selectedRule={props.selectedRule}
					selectedRules={props.selectedRules}
					onAddRuleToList={props.onAddRuleToList}
				/>
				<SelectedRule selectedRule={props.selectedRule} onRemoveRule={props.onRemoveRule} />
				<RuleAlertType
					selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
					onSelectedRuleAlertType={props.onSelectedRuleAlertType}
				/>

				<CodeBasedConfigurations
					selectedRule={props.selectedRule}
					policyLabelInput={props.policyLabelInput}
					isBasedCodeConfigurationsClicked={props.isBasedCodeConfigurationsClicked}
					ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
					onClickBasedCodeConfigurations={props.onClickBasedCodeConfigurations}
					onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
				/>

				<div className={classes['inputRuleConfigurations']}>
					<VSvg
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
						<VSvg name="arrowRight" className={classes['editButton__icon']} />
					</button>
				</div>
			</div>
		</div>
	);
};

RuleConfigurationView.displayName = 'RuleConfigurationView';
RuleConfigurationView.defaultProps = {};

export default React.memo(RuleConfigurationView);
