import React from 'react';

import type { ILibraryData, ILibraryRule } from '@/interfaces/libraries';

import classes from './RuleOnboarding.module.scss';
import SelectRules from './SelectRules';
import RuleConfiguration from './RuleConfiguration';
import SelectedRules from './SelectedRules';

interface IProps {
	readonly selectedLibrary: ILibraryData | null;
	readonly selectedRule: ILibraryRule | null;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly onSelectRule: (rule: ILibraryRule) => void;
	readonly onEditRule: (rule: ILibraryRule) => void;
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
						selectedRule={props.selectedRule}
						selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
						onSelectedRuleAlertType={props.onSelectedRuleAlertType}
						onRemoveRule={props.onRemoveRule}
					/>

					<SelectedRules selectedRule={props.selectedRule} onEditRule={props.onEditRule} />
				</div>
			</div>
		</section>
	);
};

RuleOnboardingView.displayName = 'RuleOnboardingView';
RuleOnboardingView.defaultProps = {};

export default React.memo(RuleOnboardingView);
