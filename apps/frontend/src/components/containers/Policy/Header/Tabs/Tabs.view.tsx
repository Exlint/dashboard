import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './Tabs.module.scss';

interface IProps {
	readonly hasRules: boolean;
}

const TabsView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<NavLink
				className={({ isActive }) => concatClasses(classes, 'tab', isActive ? 'tab--active' : null)}
				to="configurations"
			>
				<div className={classes['tabItems']}>
					<EDSvg className={classes['tabItems__icon']} name="configurations" />
					<span className={classes['tabItems__text']}>
						{t('policy.header.tabs.configurations')}
					</span>
				</div>
				<div className={classes['tab__border']} />
			</NavLink>

			<NavLink
				className={({ isActive }) => concatClasses(classes, 'tab', isActive ? 'tab--active' : null)}
				to="settings"
			>
				<div className={classes['tabItems']}>
					<EDSvg className={classes['tabItems__icon']} name="settings" />
					<span className={classes['tabItems__text']}>{t('policy.header.tabs.settings')}</span>
				</div>
				<div className={classes['tab__border']} />
			</NavLink>
		</div>
	);
};

TabsView.displayName = 'TabsView';
TabsView.defaultProps = {};

export default React.memo(TabsView);
