import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import classes from './Configurations.module.scss';

interface IProps {}

const ConfigurationsView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['configurationsTabs']}>
				<NavLink
					className={({ isActive }) =>
						concatClasses(
							classes,
							'configurationsTabs__tab',
							isActive ? 'configurationsTabs__tab--active' : null,
						)
					}
					to="configuration"
				>
					{t('policy.configurations.tabs.configuration')}
				</NavLink>
				<hr className={classes['configurationsTabs__divider']} />
				<NavLink
					className={({ isActive }) =>
						concatClasses(
							classes,
							'configurationsTabs__tab',
							isActive ? 'configurationsTabs__tab--active' : null,
						)
					}
					to="file-list"
				>
					{t('policy.configurations.tabs.fileList')}
				</NavLink>
				<hr className={classes['configurationsTabs__divider']} />
				<NavLink
					className={({ isActive }) =>
						concatClasses(
							classes,
							'configurationsTabs__tab',
							isActive ? 'configurationsTabs__tab--active' : null,
						)
					}
					to="ignore-list"
				>
					{t('policy.configurations.tabs.ignoreList')}
				</NavLink>
			</div>

			<Outlet />
		</div>
	);
};

ConfigurationsView.displayName = 'ConfigurationsView';
ConfigurationsView.defaultProps = {};

export default React.memo(ConfigurationsView);
