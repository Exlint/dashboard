import React from 'react';

import { ILibrary } from '@/interfaces/library';
import { librariesList } from '@/data/librariesList';

import classes from './Manually.module.scss';
import SelectRules from './SelectRules';
import RuleConfiguration from './RuleConfiguration';
import SelectedRules from './SelectedRules';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRuleIndex: number | null;
	readonly selectedRuleAlertTypeIndex: number[];
	readonly selectedRulesIndexes: number[];
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onSelectedRuleIndex: (index: number) => void;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRuleIndex: () => void;
	readonly onAddRuleIndexToList: (index: number) => void;
	readonly onRemoveRuleIndexFromList: (index: number) => void;
	readonly onEditSelectedRule: (index: number) => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const ManuallyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const rulesObject = librariesList['ESLint'].rulesList;

	return (
		<section className={classes['manually']}>
			<SelectRules
				policyLabelInput={props.policyLabelInput}
				selectedLibrary={props.selectedLibrary}
				selectedRuleIndex={props.selectedRuleIndex}
				selectedRulesIndexes={props.selectedRulesIndexes}
				onSelectedRuleIndex={props.onSelectedRuleIndex}
			/>

			<div className={classes['container']}>
				<div className={classes['rightSideContainer']}>
					<RuleConfiguration
						rulesObject={rulesObject}
						policyLabelInput={props.policyLabelInput}
						selectedRuleIndex={props.selectedRuleIndex}
						selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
						selectedRulesIndexes={props.selectedRulesIndexes}
						ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
						onSelectedRuleAlertType={props.onSelectedRuleAlertType}
						onRemoveRuleIndex={props.onRemoveRuleIndex}
						onAddRuleIndexToList={props.onAddRuleIndexToList}
						onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
					/>

					<SelectedRules
						rulesObject={rulesObject}
						selectedRulesIndexes={props.selectedRulesIndexes}
						selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
						ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
						onRemoveRuleIndexFromList={props.onRemoveRuleIndexFromList}
						onEditSelectedRule={props.onEditSelectedRule}
					/>
				</div>
			</div>
		</section>
	);
};

ManuallyView.displayName = 'ManuallyView';
ManuallyView.defaultProps = {};

export default React.memo(ManuallyView);
