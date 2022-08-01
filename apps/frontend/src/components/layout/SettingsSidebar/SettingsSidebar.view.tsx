import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './SettingsSidebar.module.scss';

interface IProps {
	readonly name: string;
}

const SettingsSidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<div className={classes['sidebar']}>
				<section className={classes['headerWrapper']}>
					<EDSvg className={classes['headerWrapper__icon']} name="backToGroupLabel" />
					<div className={classes['headerWrapper__title']}>
						{t('policySidebar.header.title')}
						<span className={classes['headerWrapper__title--purple']}>
							{t('policySidebar.header.purpleTitle')}
						</span>
					</div>
				</section>
				<hr className={classes['divider']} />
				<div className={classes['userDetalis']}>
					<div className={classes['usernameContainer']}>
						<EDSvg name="greyUser" className={classes['usernameContainer__profileIcon']} />
						<span className={classes['usernameContainer__usernameText']}>
							{t('settingsSidebar.username')}
						</span>
					</div>
					<span className={classes['usernameContainer__username']}>{props.name}</span>
				</div>
			</div>
		</aside>
	);
};

SettingsSidebarView.displayName = 'SettingsSidebarView';
SettingsSidebarView.defaultProps = {};

export default React.memo(SettingsSidebarView);
