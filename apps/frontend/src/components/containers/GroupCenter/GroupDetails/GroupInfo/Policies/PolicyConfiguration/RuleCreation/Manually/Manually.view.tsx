import React from 'react';

import { ILibrary } from '@/interfaces/library';
import { IRule } from '@/interfaces/rule';

import classes from './Manually.module.scss';
import SelectRules from './SelectRules';
import RuleConfiguration from './RuleConfiguration';
import SelectedRules from './SelectedRules';

interface IProps {
	readonly rulesObject: { [key: string]: string } | Record<string, Record<string, unknown>>;
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly selectedRuleAlertTypeIndex: number;
	readonly onSelectedRule: (rule: IRule) => void;
	readonly onSelectedRuleAlertType: (index: number) => void;
	readonly onRemoveRule: () => void;
	readonly onAddRuleToList: (rule: IRule) => void;
	readonly onEditSelectedRule: (rule: IRule) => void;
}

const ManuallyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['manually']}>
			<SelectRules
				rulesObject={props.rulesObject}
				policyLabelInput={props.policyLabelInput}
				selectedLibrary={props.selectedLibrary}
				selectedRule={props.selectedRule}
				selectedRules={props.selectedRules}
				onSelectedRule={props.onSelectedRule}
			/>

			<div className={classes['container']}>
				<div className={classes['rightSideContainer']}>
					<RuleConfiguration
						policyLabelInput={props.policyLabelInput}
						selectedRule={props.selectedRule}
						selectedRuleAlertTypeIndex={props.selectedRuleAlertTypeIndex}
						selectedRules={props.selectedRules}
						onSelectedRuleAlertType={props.onSelectedRuleAlertType}
						onRemoveRule={props.onRemoveRule}
					/>

					<SelectedRules
						selectedRule={props.selectedRule}
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
