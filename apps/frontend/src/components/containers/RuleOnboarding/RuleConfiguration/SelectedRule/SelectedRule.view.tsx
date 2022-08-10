import React from 'react';
import EDSvg from '@/ui/EDSvg';

import type { ILibraryRule } from '@/interfaces/libraries';

import classes from './SelectedRule.module.scss';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly onRemoveRule: () => void;
}

const SelectedRuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div
			className={classes['selectedRule']}
			style={{
				borderTop:
					props.selectedRule === null
						? '2px solid rgba(231, 231, 231, 1)'
						: 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1',
				borderBottom:
					props.selectedRule === null
						? '2px solid rgba(231, 231, 231, 1)'
						: 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1',
				borderImage:
					props.selectedRule !== null
						? 'linear-gradient(to right, rgba(79, 51, 155, 0.5), rgba(79, 51, 155, 1)) 1'
						: 'none',
			}}
		>
			<div className={classes['innerRule']}>
				<div className={classes['leftSideContainer']}>
					<span className={classes['leftSideContainer__ruleName']}>
						{props.selectedRule?.ruleName}
					</span>
					<span className={classes['leftSideContainer__catagory']}>
						{props.selectedRule?.category}
					</span>
				</div>
				<div className={classes['middleSideContainer']}>
					<span className={classes['middleSideContainer__description']}>
						{props.selectedRule?.description}
					</span>
				</div>
				<button
					className={classes['removeRuleButton']}
					type="button"
					style={{ display: props.selectedRule !== null ? 'flex' : 'none' }}
					onClick={props.onRemoveRule}
				>
					<EDSvg name="removeRule" className={classes['removeRuleButton__icon']} />
				</button>
			</div>
		</div>
	);
};

SelectedRuleView.displayName = 'SelectedRuleView';
SelectedRuleView.defaultProps = {};

export default React.memo(SelectedRuleView);
