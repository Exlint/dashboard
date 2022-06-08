import React from 'react';
import VSvg from '@/ui/VSvg';

import classes from './SelectedRule.module.scss';

interface IProps {
	readonly selectedRuleIndex: number | null;
	readonly rulesObject: { [key: string]: string };
	readonly onRemoveRuleIndex: () => void;
}

const SelectedRuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div
			className={classes['selectedRule']}
			style={{
				borderTop:
					props.selectedRuleIndex === null
						? '2px solid rgba(231, 231, 231, 1)'
						: 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1',
				borderBottom:
					props.selectedRuleIndex === null
						? '2px solid rgba(231, 231, 231, 1)'
						: 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1',
				borderImage:
					props.selectedRuleIndex !== null
						? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
						: 'none',
			}}
		>
			{Object.keys(props.rulesObject).map((ruleName, index) => {
				if (index === props.selectedRuleIndex) {
					return (
						<div key={index} className={classes['innerRule']}>
							<div className={classes['leftSideContainer']}>
								<span className={classes['leftSideContainer__ruleName']}>{ruleName}</span>
								<span className={classes['leftSideContainer__catagory']}>
									{index < 20 ? 'Best Practices' : 'Stylistic Issues'}
								</span>
							</div>
							<div className={classes['middleSideContainer']}>
								<span className={classes['middleSideContainer__description']}>
									{props.rulesObject[ruleName as keyof typeof props.rulesObject]}
								</span>
							</div>
							<button
								className={classes['removeRuleButton']}
								type="button"
								onClick={props.onRemoveRuleIndex}
							>
								<VSvg name="removeRuleIcon" className={classes['removeRuleButton__icon']} />
							</button>
						</div>
					);
				}

				return;
			})}
		</div>
	);
};

SelectedRuleView.displayName = 'SelectedRuleView';
SelectedRuleView.defaultProps = {};

export default React.memo(SelectedRuleView);
