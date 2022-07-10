import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';
import { IRule } from '@/interfaces/rule';

import classes from './Header.module.scss';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly selectedRules: IRule[];
	readonly onAddRuleToList: () => void;
	readonly onUpdateRule: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<span className={classes['header__title']}>Rule Configuration</span>
			<div className={classes['addRuleButton']}>
				{props.selectedRules.includes(props.selectedRule!) ? (
					<button
						className={classes['buttonContainer']}
						type="button"
						onClick={() => props.onAddRuleToList()}
					>
						<VSvg className={classes['buttonContainer__updateIcon']} name="updateRuleIcon" />
					</button>
				) : (
					<button
						className={classes['buttonContainer']}
						type="button"
						onClick={() => props.onUpdateRule}
					>
						<VSvg className={classes['buttonContainer__addIcon']} name="addRuleButtonPurple" />
					</button>
				)}

				<span className={classes['addRuleButton__text']}>
					{props.selectedRules.includes(props.selectedRule!) ? 'Update Rule' : 'Add Rule'}
				</span>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
