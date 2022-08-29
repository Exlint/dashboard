import React from 'react';

import type { ILibraryData, ILibraryRule } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';
import PolicySidebar from '@/layout/PolicySidebar';
import { librariesData } from '@/data/libraries-data';

import classes from './RuleOnboarding.module.scss';
import SelectRules from './SelectRules';
import RuleConfiguration from './RuleConfiguration';
import SelectedRules from './SelectedRules';
import { IPolicySidebar } from '@/interfaces/policy-sidebar';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedPolicy: IPolicySidebar | null;
	readonly selectedLibrary: ILibraryData | null;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly selectedRulesList: IRule[] | null;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectRule: (_: string) => void;
	readonly onEditRule: (_: string) => void;
	readonly onRemoveRule: () => void;
	readonly onSelectedRuleAlertType: (_: number) => void;
	readonly onCodeBasedConfigurationsInputChanged: (_: string) => void;
}

const RuleOnboardingView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let libraryNameInLowerCase: 'eslint' | 'stylelint' | 'depcheck' | 'prettier' | 'inflint';
	let libraryData: ILibraryData;
	let rulesObject: Record<string, ILibraryRule> | undefined;

	if (props.selectedPolicy) {
		libraryNameInLowerCase = props.selectedPolicy?.libraryName.toLocaleLowerCase() as Lowercase<
			ILibraryData['name']
		>;

		libraryData = libraryNameInLowerCase && librariesData[libraryNameInLowerCase];

		rulesObject = libraryData?.rules;
	}

	return (
		<section className={classes['manually']}>
			<div className={classes['sidebar']}>
				<div className={classes['innerSidebar']}>
					<PolicySidebar
						name={props.selectedPolicy?.libraryName!}
						groupLabel={props.selectedPolicy?.groupLabel!}
						policyLabel={props.selectedPolicy?.policyLabel!}
						createdAt="11 jun"
					/>
				</div>
			</div>

			<SelectRules
				rulesObject={rulesObject}
				selectedPolicy={props.selectedPolicy}
				selectedRule={props.selectedRule}
				onSelectRule={props.onSelectRule}
			/>

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
						onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
					/>

					<SelectedRules
						selectedRulesList={props.selectedRulesList}
						onEditRule={props.onEditRule}
					/>
				</div>
			</div>
		</section>
	);
};

RuleOnboardingView.displayName = 'RuleOnboardingView';
RuleOnboardingView.defaultProps = {};

export default React.memo(RuleOnboardingView);
