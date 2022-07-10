import React from 'react';
import { ruleAlertTypes } from '@/data/ruleAlertTypes';

import classes from './RuleAlertType.module.scss';

interface IProps {
	readonly selectedRuleAlertTypeIndex: number;
	readonly onSelectedRuleAlertType: (index: number) => void;
}

const RuleAlertTypeView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['ruleAlertContainer']}>
			<div className={classes['innerRuleAlert']}>
				{ruleAlertTypes.map((ruleAlertType, index) => (
					<div className={classes['alertType']} key={index}>
						<div className={classes['checkboxBorder']}>
							<button
								className={classes['checkboxBorder__button']}
								type="button"
								style={{
									backgroundColor:
										props.selectedRuleAlertTypeIndex === index ? '#2355a0' : '#fefefe',
								}}
								onClick={() => props.onSelectedRuleAlertType(index)}
							/>
						</div>
						<span className={classes['alertType__text']}>{ruleAlertType}</span>
					</div>
				))}
			</div>
		</div>
	);
};

RuleAlertTypeView.displayName = 'RuleAlertTypeView';
RuleAlertTypeView.defaultProps = {};

export default React.memo(RuleAlertTypeView);
