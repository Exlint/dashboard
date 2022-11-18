import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import EDCopyTextBox from '@/ui/EDCopyTextBox';
import { concatClasses } from '@/utils/component';

import classes from './Header.module.scss';

interface IProps {
	readonly groupLabel: string;
	readonly groupId: string;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<header className={classes['container']}>
			<div className={classes['groupDetails']}>
				<div className={classes['groupLabel']}>
					<EDSvg className={classes['groupLabel__icon']} name="group" />
					<h4 className={classes['groupLabel__text']}>{props.groupLabel}</h4>
				</div>
				<div className={classes['groupId']}>
					<span className={classes['groupId__prefix']}>
						{t('groupCenter.uniqueId')}
						<Trans>&#58;</Trans>
						&nbsp;
					</span>
					<EDCopyTextBox value={props.groupId} />
				</div>
			</div>
			<div className={classes['tabs']}>
				<NavLink
					className={({ isActive }) =>
						concatClasses(classes, 'tab', isActive ? 'tab--active' : null)
					}
					to="policies"
				>
					<EDSvg className={classes['tab__icon']} name="policies" />
					<span className={classes['tab__text']}>{t('groupCenter.tabs.policies')}</span>
					<div className={classes['tab__border']} />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						concatClasses(classes, 'tab', isActive ? 'tab--active' : null)
					}
					to="settings"
				>
					<EDSvg className={classes['tab__icon']} name="settings" />
					<span className={classes['tab__text']}>{t('groupCenter.tabs.settings')}</span>
					<div className={classes['tab__border']} />
				</NavLink>
			</div>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
