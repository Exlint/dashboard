import React from 'react';
import { useTranslation } from 'react-i18next';

import type { IRule } from '@/interfaces/rule';

import EDSvg from '@/ui/EDSvg';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';

import SelectedRule from './SelectedRule';
import Header from './Header';
import classes from './RuleConfiguration.module.scss';
import RuleAlertType from './RuleAlertType';
import CodeBasedConfigurations from './CodeBasedConfigurations';

interface IProps {
	readonly selectedPolicy: IPolicySidebar | null;
	readonly policyId: string | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly isRuleOnUpdate: boolean;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
	readonly onOpenCodeConfigurationsModal: () => void;
	readonly onCloseCodeConfigurationsModal: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
	readonly onUpdateSelectedRulesList: (_: IRule) => void;
}

const RuleConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

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
					onUpdateSelectedRulesList={props.onUpdateSelectedRulesList}
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
					onOpenCodeConfigurationsModal={props.onOpenCodeConfigurationsModal}
					onCloseCodeConfigurationsModal={props.onCloseCodeConfigurationsModal}
					onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
				/>

				<div className={classes['inputRuleConfigurations']}>
					<EDSvg
						name="ruleSpecificConfiguration"
						className={classes['inputRuleConfigurations__icon']}
					/>
					<span className={classes['inputRuleConfigurations__text']}>
						{t('ruleOnboarding.ruleConfiguration.codeBasedConfiguration')}
					</span>

					<div
						className={classes['disabledfeature']}
						style={{ display: props.selectedRule === null ? 'none' : 'flex' }}
					>
						<span className={classes['disabledfeature__text']}>
							{t('ruleOnboarding.ruleConfiguration.commingSoon')}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

RuleConfigurationView.displayName = 'RuleConfigurationView';
RuleConfigurationView.defaultProps = {};

export default React.memo(RuleConfigurationView);
