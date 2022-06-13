import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';
import { IRule } from '@/interfaces/rule';

import classes from './SelectedRule.module.scss';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly ruleAlertType: string | undefined;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onRemoveRuleFromList: (ruleName: string) => void;
	readonly onEditSelectedRule: (rule: IRule) => void;
}

const SelectedRuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['selectedRule']}>
			<div className={classes['innerSelectedrule']}>
				<div className={classes['leftSideContainer']}>
					<span className={classes['leftSideContainer__name']}>{props.ruleName}</span>
					<span className={classes['leftSideContainer__catagory']}>{props.ruleCatagory}</span>
				</div>
				<div className={classes['middleSideContainer']}>
					<span className={classes['middleSideContainer__text']}>{props.ruleAlertType}</span>
					{props.ruleCodeBasedConfigurationsInput.length > 0 && (
						<span className={classes['middleSideContainer__text']}>+ Code Config.</span>
					)}
					<span className={classes['middleSideContainer__text']}>+ Rule Config.</span>
				</div>
				<div className={classes['rightSideContainer']}>
					<button type="button" onClick={() => props.onRemoveRuleFromList(props.ruleName)}>
						<VSvg name="removeRuleIcon" className={classes['rightSideContainer__removeRule']} />
					</button>
					<button type="button" onClick={() => props.onEditSelectedRule(props.selectedRule!)}>
						<VSvg name="editRuleIcon" className={classes['rightSideContainer__editRule']} />
					</button>
				</div>
			</div>
			<hr className={classes['selectedRule__divider']} />
		</div>
	);
};

SelectedRuleView.displayName = 'SelectedRuleView';
SelectedRuleView.defaultProps = {};

export default React.memo(SelectedRuleView);
