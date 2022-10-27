import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

import { concatClasses } from '@/utils/component';

import classes from './Configuration.module.scss';

interface IProps {}

const ConfigurationView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['configurationTabs']}>
				<NavLink
					className={({ isActive }) =>
						concatClasses(
							classes,
							'configurationTabs__tab',
							isActive ? 'configurationTabs__tab--active' : null,
						)
					}
					to="form"
				>
					{t('policy.configurations.tabs.form')}
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						concatClasses(
							classes,
							'configurationTabs__tab',
							isActive ? 'configurationTabs__tab--active' : null,
						)
					}
					to="code"
				>
					{t('policy.configurations.tabs.code')}
				</NavLink>
			</div>

			<Outlet />
		</div>
	);
};

ConfigurationView.displayName = 'ConfigurationView';
ConfigurationView.defaultProps = {};

export default React.memo(ConfigurationView);
