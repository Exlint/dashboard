import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './SettingsSidebar.module.scss';

interface IProps {}

const SettingsSidebarView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['innerSidebar']}>
				<div className={classes['headerContainer']}>
					<h2 className={classes['headerContainer__title']}>{t('settingsSidebar.title')}</h2>
					<hr className={classes['headerContainer__divider']} />
				</div>
				<div className={classes['userDetalis']}>
					<div className={classes['usernameContainer']}>
						<EDSvg
							name="userSettingsSidebarDefultProfilePicture"
							className={classes['usernameContainer__profile']}
						/>
						<span className={classes['usernameContainer__details']}>
							{t('settingsSidebar.subText')}
						</span>
					</div>
					<div className={classes['usernameContainer__userName']}>user-name</div>
				</div>
			</div>
		</div>
	);
};

SettingsSidebarView.displayName = 'SettingsSidebarView';
SettingsSidebarView.defaultProps = {};

export default React.memo(SettingsSidebarView);
