import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';

import classes from './SideBar.module.scss';

interface IProps {}

const SideBarView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<NavLink
				className={({ isActive }) =>
					concatClasses(classes, 'innerLink', isActive ? 'innerLink--active' : null)
				}
				to="account"
			>
				<div className={classes['innerLink__border']} />
				<EDSvg className={classes['innerLink__icon']} name="greyUser" />
				<span className={classes['innerLink__text']}>{t('accountSettings.sideBar.account')}</span>
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					concatClasses(classes, 'innerLink', isActive ? 'innerLink--active' : null)
				}
				to="secret-management"
			>
				<div className={classes['innerLink__border']} />
				<EDSvg className={classes['innerLink__icon']} name="key" />
				<span className={classes['innerLink__text']}>
					{t('accountSettings.sideBar.secretManagement')}
				</span>
			</NavLink>
		</aside>
	);
};

SideBarView.displayName = 'SideBarView';
SideBarView.defaultProps = {};

export default React.memo(SideBarView);
