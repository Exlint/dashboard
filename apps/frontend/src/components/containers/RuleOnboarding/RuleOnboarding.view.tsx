import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDNavigateBackButton from '@/ui/EDNavigateBackButton';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';
import type { ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';
import PolicySidebar from '@/layout/PolicySidebar';

import classes from './RuleOnboarding.module.scss';
import SelectRules from './SelectRules';
import RuleConfiguration from './RuleConfiguration';
import SelectedRules from './SelectedRules';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedPolicy: IPolicySidebar | null;
	readonly rulesObject: Record<string, ILibraryRule> | undefined;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly selectedRulesList: IRule[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectRule: (_: string) => void;
	readonly onEditRule: (_: string) => void;
	readonly onRemoveRule: () => void;
	readonly onSelectedRuleAlertType: (_: number) => void;
	readonly onCodeBasedConfigurationsInputChanged: (_: string) => void;
	readonly onDoneButton: () => void;
	readonly onUpdateSelectedRulesList: (rule: IRule) => void;
}

const RuleOnboardingView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['manually']}>
			<div className={classes['sidebar']}>
				<div className={classes['innerSidebar']}>
					<PolicySidebar
						name={props.selectedPolicy?.libraryName ?? ''}
						groupLabel={props.selectedPolicy?.groupLabel ?? ''}
						policyId={props.policyId}
						policyLabel={props.selectedPolicy?.policyLabel ?? ''}
						createdAt="11 jun"
					/>
				</div>
			</div>

			<div className={classes['onboradingContainer']}>
				<div className={classes['buttonsContainer']}>
					<EDNavigateBackButton />
					<button
						className={classes['doneButtonContainer']}
						type="button"
						onClick={props.onDoneButton}
					>
						<span className={classes['doneButtonContainer__text']}>
							{t('ruleOnboarding.doneButton')}
						</span>
						<EDSvg className={classes['doneButtonContainer__icon']} name="arrowRight" />
					</button>
				</div>
				<div className={classes['innerRules']}>
					<div className={classes['selectRules']}>
						<SelectRules
							rulesObject={props.rulesObject}
							selectedPolicy={props.selectedPolicy}
							selectedRule={props.selectedRule}
							onSelectRule={props.onSelectRule}
						/>
					</div>

					<div className={classes['container']}>
						<div className={classes['rightSideContainer']}>
							<RuleConfiguration
								selectedPolicy={props.selectedPolicy}
								policyId={props.policyId}
								selectedRule={props.selectedRule}
								selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
								isRuleOnUpdate={props.isRuleOnUpdate}
								ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
								onSelectedRuleAlertType={props.onSelectedRuleAlertType}
								onRemoveRule={props.onRemoveRule}
								onCodeBasedConfigurationsInputChanged={
									props.onCodeBasedConfigurationsInputChanged
								}
								onUpdateSelectedRulesList={props.onUpdateSelectedRulesList}
							/>

							<SelectedRules
								selectedRulesList={props.selectedRulesList}
								onEditRule={props.onEditRule}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

RuleOnboardingView.displayName = 'RuleOnboardingView';
RuleOnboardingView.defaultProps = {};

export default React.memo(RuleOnboardingView);
