import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './SelectedRule.module.scss';

interface IProps {
	readonly ruleName: string;
	readonly ruleCatagory: string;
	readonly hasConfig: boolean;
	readonly ruleAlertType: string | undefined;
	readonly onRemoveRule: () => void;
	readonly onEditRule: (_: string) => void;
}

const SelectedRuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['selectedRule']}>
			<div className={classes['innerSelectedrule']}>
				<div className={classes['leftSideContainer']}>
					<span className={classes['leftSideContainer__name']}>{props.ruleName}</span>
					<span className={classes['leftSideContainer__catagory']}>{props.ruleCatagory}</span>
				</div>
				<div className={classes['middleSideContainer']}>
					<span className={classes['middleSideContainer__text']}>{props.ruleAlertType}</span>
					{props.hasConfig && (
						<span className={classes['middleSideContainer__text']}>
							{t('ruleOnboarding.selectedRules.selectedRule.withConfig')}
						</span>
					)}
				</div>
				<div className={classes['rightSideContainer']}>
					<button type="button" onClick={() => props.onRemoveRule()}>
						<EDSvg name="removeRule" className={classes['rightSideContainer__removeRule']} />
					</button>
					<button type="button" onClick={() => props.onEditRule(props.ruleName)}>
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
