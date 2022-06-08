import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Header.module.scss';

interface IProps {
	readonly selectedRuleIndex: number | null;
	readonly selectedRulesIndexes: number[];
	readonly onAddRuleIndexToList: (index: number) => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<span className={classes['header__title']}>Rule Configuration</span>
			<div className={classes['addRuleButton']}>
				<button
					className={classes['buttonContainer']}
					type="button"
					onClick={() => props.onAddRuleIndexToList(props.selectedRuleIndex!)}
				>
					{props.selectedRulesIndexes.includes(props.selectedRuleIndex!) ? (
						<VSvg className={classes['buttonContainer__updateIcon']} name="updateRuleIcon" />
					) : (
						<VSvg className={classes['buttonContainer__addIcon']} name="addRuleButtonPurple" />
					)}
				</button>
				<span className={classes['addRuleButton__text']}>
					{props.selectedRulesIndexes.includes(props.selectedRuleIndex!)
						? 'Update Rule'
						: 'Add Rule'}
				</span>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
