import React from 'react';

import type { ILibraryData } from '@/interfaces/libraries';
import type { IRule } from '@/interfaces/rule';

import classes from './RuleOnboarding.module.scss';
import SelectRules from './SelectRules';
import RuleConfiguration from './RuleConfiguration';
import SelectedRules from './SelectedRules';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedLibrary: ILibraryData | null;
	readonly selectedRule: IRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly selectedRulesList: IRule[] | null;
	readonly onSelectRule: (_: string) => void;
	readonly onEditRule: (_: string) => void;
	readonly onRemoveRule: () => void;
	readonly onSelectedRuleAlertType: (index: number) => void;
}

const RuleOnboardingView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const rulesObject = props.selectedLibrary?.rules;

	return (
		<section className={classes['manually']}>
			<SelectRules
				rulesObject={rulesObject}
				libraryName={props.selectedLibrary!.name}
				libraryLogo={props.selectedLibrary!.name}
				selectedRule={props.selectedRule}
				onSelectRule={props.onSelectRule}
			/>

			<div className={classes['container']}>
				<div className={classes['rightSideContainer']}>
					<RuleConfiguration
						policyId={props.policyId}
						selectedRule={props.selectedRule}
						selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
						isRuleOnUpdate={props.isRuleOnUpdate}
						onSelectedRuleAlertType={props.onSelectedRuleAlertType}
						onRemoveRule={props.onRemoveRule}
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
