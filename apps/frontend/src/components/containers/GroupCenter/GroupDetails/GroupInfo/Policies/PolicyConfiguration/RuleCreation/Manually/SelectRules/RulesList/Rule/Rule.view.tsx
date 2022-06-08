import React from 'react';
import VSvg from '@/ui/VSvg';

import classes from './Rule.module.scss';

interface IProps {
	readonly key: number;
	readonly ruleName: string;
	readonly ruleDescription: string;
	readonly ruleCatagory: string;
	readonly index: number;
	readonly selectedRuleIndex: number | null;
	readonly onSelectedRuleIndex: (index: number) => void;
}

const RuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const isRuleIndexEven = props.index % 2 === 0;

	return (
		<div
			className={classes['rule']}
			style={{
				backgroundColor: isRuleIndexEven ? '#FEFEFE' : '#F9F9F9',
				borderImage:
					props.selectedRuleIndex === props.index
						? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
						: 'none',
			}}
		>
			<span className={classes['rule__name']}>{props.ruleName}</span>
			<span className={classes['rule__description']}>{props.ruleDescription}</span>
			<span className={classes['rule__catagory']}>{props.ruleCatagory}</span>
			<button
				className={classes['addRuleButton']}
				type="button"
				onClick={() => props.onSelectedRuleIndex(props.index)}
			>
				<VSvg name="addRuleButton" className={classes['addRuleButton__icon']} />
			</button>
		</div>
	);
};

RuleView.displayName = 'RuleView';
RuleView.defaultProps = {};

export default React.memo(RuleView);
