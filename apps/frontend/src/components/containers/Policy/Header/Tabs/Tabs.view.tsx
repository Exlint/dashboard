import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './Tabs.module.scss';

interface IProps {}

const TabsView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<NavLink
				className={({ isActive }) => concatClasses(classes, 'tab', isActive ? 'tab--active' : null)}
				to="rules"
			>
				<EDSvg className={classes['tab__icon']} name="rule" />
				<span className={classes['tab__text']}>{t('policy.header.tabs.rules')}</span>
				<div className={classes['tab__border']} />
			</NavLink>
			<NavLink
				className={({ isActive }) => concatClasses(classes, 'tab', isActive ? 'tab--active' : null)}
				to="configurations"
			>
				<EDSvg className={classes['tab__icon']} name="configurations" />
				<span className={classes['tab__text']}>{t('policy.header.tabs.configurations')}</span>
				<div className={classes['tab__border']} />
			</NavLink>
			<NavLink
				className={({ isActive }) => concatClasses(classes, 'tab', isActive ? 'tab--active' : null)}
				to="history"
			>
				<EDSvg className={classes['tab__icon']} name="history" />
				<span className={classes['tab__text']}>{t('policy.header.tabs.history')}</span>
				<div className={classes['tab__border']} />
			</NavLink>
			<NavLink
				className={({ isActive }) => concatClasses(classes, 'tab', isActive ? 'tab--active' : null)}
				to="settings"
			>
				<EDSvg className={classes['tab__icon']} name="settings" />
				<span className={classes['tab__text']}>{t('policy.header.tabs.settings')}</span>
				<div className={classes['tab__border']} />
			</NavLink>
		</div>
	);
};

TabsView.displayName = 'TabsView';
TabsView.defaultProps = {};

export default React.memo(TabsView);
