import React from 'react';
import EDSvg from '@/ui/EDSvg';
import type { ILibraryRule } from '@/interfaces/libraries';

import classes from './SelectedRule.module.scss';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly ruleAlertType: string | undefined;
	readonly onRemoveRule: () => void;
	readonly onEditSelectedRule: (rule: ILibraryRule) => void;
}

const SelectedRuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['selectedRule']}>
			<div className={classes['innerSelectedrule']}>
				<div className={classes['leftSideContainer']}>
					<span className={classes['leftSideContainer__name']}>{props.ruleName}</span>
					<span className={classes['leftSideContainer__catagory']}>{props.ruleCatagory}</span>
				</div>
				<div className={classes['middleSideContainer']}>
					<span className={classes['middleSideContainer__text']}>{props.ruleAlertType}</span>
					//todo: validate if there is code config
					{true && <span className={classes['middleSideContainer__text']}>+ Code Config.</span>}
				</div>
				<div className={classes['rightSideContainer']}>
					<button type="button" onClick={() => props.onRemoveRule()}>
						<EDSvg name="removeRule" className={classes['rightSideContainer__removeRule']} />
					</button>
					<button type="button" onClick={() => props.onEditSelectedRule(props.selectedRule!)}>
						<EDSvg name="editRule" className={classes['rightSideContainer__editRule']} />
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
