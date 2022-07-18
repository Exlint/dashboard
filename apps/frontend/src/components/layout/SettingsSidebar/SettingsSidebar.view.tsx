import React from 'react';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';

import classes from './SettingsSidebar.module.scss';

interface IProps {}

const SettingsSidebarView: React.FC<IProps> = () => {
	return (
		<section className={classes['sidebar']}>
			<div className={classes['innerSidebar']}>
				<div className={classes['headerContainer']}>
					<h2 className={classes['headerContainer__title']}>Settings</h2>
					<hr className={classes['headerContainer__divider']} />
				</div>
				<div className={classes['userDetalis']}>
					<div className={classes['usernameContainer']}>
						<EDSvg
							name="userDefultProfilePicture"
							className={classes['usernameContainer__profile']}
						/>
						<span className={classes['usernameContainer__details']}>Username: Amir</span>
					</div>
					<div
						className={concatClasses(
							classes,
							'usernameContainer__details',
							'userDetalis__created',
						)}
					>
						Created: 22 May 2022
					</div>
				</div>
			</div>
		</section>
	);
};

SettingsSidebarView.displayName = 'SettingsSidebarView';
SettingsSidebarView.defaultProps = {};

export default React.memo(SettingsSidebarView);
