import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import type { IRule } from '@/interfaces/rule';

import classes from './Header.module.scss';

interface IProps {
	readonly selectedRule: IRule | null;
	readonly isRuleOnUpdate: boolean;
	readonly onAddRuleToList: () => void;
	readonly onUpdateRule: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<span className={classes['header__title']}>
				{t('ruleOnboarding.ruleConfiguration.header.title')}
			</span>
			<div className={classes['addRuleButton']}>
				{props.isRuleOnUpdate ? (
					<button className={classes['buttonContainer']} type="button" onClick={props.onUpdateRule}>
						<EDSvg className={classes['buttonContainer__updateIcon']} name="updateRule" />
					</button>
				) : (
					<button
						className={classes['buttonContainer']}
						type="button"
						onClick={props.onAddRuleToList}
					>
						<EDSvg className={classes['buttonContainer__addIcon']} name="addRuleButtonPurple" />
					</button>
				)}

				<span className={classes['addRuleButton__text']}>
					{props.isRuleOnUpdate ? 'Update Rule' : 'Add Rule'}
				</span>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
