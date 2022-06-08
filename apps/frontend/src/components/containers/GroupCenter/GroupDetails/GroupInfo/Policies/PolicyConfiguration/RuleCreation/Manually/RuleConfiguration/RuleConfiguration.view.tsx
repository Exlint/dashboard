import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import VSvg from '@/ui/VSvg';

import SelectedRule from './SelectedRule';
import Header from './Header';
import classes from './RuleConfiguration.module.scss';
import RuleAlertType from './RuleAlertType';
import CodeBasedConfigurations from './CodeBasedConfigurations';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly rulesObject: { [key: string]: string };
	readonly selectedRuleIndex: number | null;
	readonly selectedRuleAlertTypeIndex: number[];
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly selectedRulesIndexes: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRuleIndex: () => void;
	readonly onAddRuleIndexToList: (index: number) => void;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const RuleConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['ruleConfiguration']}>
			<span
				className={classes['disabled']}
				style={{ display: props.selectedRuleIndex === null ? 'flex' : 'none' }}
			/>
			<div className={classes['innerRuleConfiguration']}>
				<Header
					selectedRuleIndex={props.selectedRuleIndex}
					selectedRulesIndexes={props.selectedRulesIndexes}
					onAddRuleIndexToList={props.onAddRuleIndexToList}
				/>
				<SelectedRule
					selectedRuleIndex={props.selectedRuleIndex}
					rulesObject={props.rulesObject}
					onRemoveRuleIndex={props.onRemoveRuleIndex}
				/>
				<RuleAlertType
					selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
					selectedRuleIndex={props.selectedRuleIndex}
					onSelectedRuleAlertType={props.onSelectedRuleAlertType}
				/>

				<CodeBasedConfigurations
					selectedRuleIndex={props.selectedRuleIndex}
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
							backgroundColor: props.selectedRuleIndex === null ? '#D2D2D2' : '#8197b8',
							borderColor: props.selectedRuleIndex === null ? '#B7B7B7' : '#6b7d98',
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
