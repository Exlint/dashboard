import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Sidebar.module.scss';

interface IProps {}

const SidebarView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<section className={classes['sidebar']}>
			<div className={classes['innerSidebar']}>
				<div className={classes['headerContainer']}>
					<h2 className={classes['headerContainer__title']}>Settings</h2>
					<hr className={classes['headerContainer__divider']} />
				</div>
				<div className={classes['userDetalis']}>
					<div className={classes['usernameContainer']}>
						<div className={classes['userProfilePicture']}>
							<VSvg
								className={classes['userProfilePicture__defult']}
								name="userDefultProfilePicture"
							/>
						</div>
						<span className={classes['usernameContainer__title']}>Username:</span>
						<span className={classes['usernameContainer__username']}>Amir</span>
					</div>
				</div>
			</div>
		</section>
	);
};

SidebarView.displayName = 'SidebarView';
SidebarView.defaultProps = {};

export default React.memo(SidebarView);
