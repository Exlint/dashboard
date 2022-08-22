import React from 'react';
import EDSvg from '@/ui/EDSvg';

import type { IRule } from '@/interfaces/rule';

import classes from './Rule.module.scss';

interface IProps {
	readonly key: number;
	readonly ruleName: string;
	readonly ruleCatagory: string | undefined;
	readonly ruleDescription: string;
	readonly hasAutoFix: boolean | undefined;
	readonly selectedRule: IRule | null;
	readonly onSelectRule: (_: string) => void;
}

const RuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const isRuleIndexEven = props.key % 2 === 0;

	return (
		<div
			className={classes['rule']}
			style={{
				backgroundColor: isRuleIndexEven ? '#FEFEFE' : '#F9F9F9',
				borderImage:
					props.selectedRule?.ruleName === props.ruleName
						? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
						: 'none',
			}}
		>
			<span className={classes['rule__name']}>{props.ruleName}</span>
			<span className={classes['rule__description']}>{props.ruleDescription}</span>
			<span className={classes['rule__catagory']}>{props.ruleCatagory}</span>
			<span className={classes['rule__autoFix']}>{props.hasAutoFix}</span>

			<button
				className={classes['addRuleButton']}
				type="button"
				onClick={() => props.onSelectRule(props.ruleName)}
			>
				<EDSvg name="addRuleButton" className={classes['addRuleButton__icon']} />
			</button>
		</div>
	);
};

RuleView.displayName = 'RuleView';
RuleView.defaultProps = {};

export default React.memo(RuleView);
