import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

import { concatClasses } from '@/utils/component';

import classes from './Configuration.module.scss';

interface IProps {
	readonly onSelectionBasedConfigurationTabClick: VoidFunction;
}

const ConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['configurationTabs']}>
				<button
					className={classes['configurationTabs__tab']}
					type="button"
					onClick={props.onSelectionBasedConfigurationTabClick}
				>
					{t('policy.configurations.tabs.form')}
				</button>
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
