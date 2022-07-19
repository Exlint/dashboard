import React from 'react';

import EDSvg from '@/ui/EDSvg';
import SettingsSidebar from '@/layout/SettingsSidebar';
import UserSettingsModal from './UserSettingsModal';

import classes from './UserSettings.module.scss';

interface IProps {
	readonly onBackdropClick: () => void;
	readonly isModelOnViewState: boolean;
}

const UserSettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['mainWrapper']}>
			<SettingsSidebar />
			<div className={classes['innerWrapper']}>
				<div className={classes['userSettings']}>
					<h1 className={classes['userSettings__title']}>User Settings</h1>
					<div className={classes['mainSection']}>
						<div className={classes['details']}>
							<EDSvg
								className={classes['details__icon']}
								name="userSettingsDefaultProfilePicture"
							/>
							<span className={classes['details__username']}>User</span>
						</div>
						<div className={classes['actionsWrapper']}>
							<div className={classes['action']}>
								<button
									className={classes['action__text']}
									type="button"
									onClick={props.onBackdropClick}
								>
									Delete User
								</button>
								{props.isModelOnViewState && (
									<UserSettingsModal onBackdropClick={props.onBackdropClick} />
								)}
							</div>
							<div className={classes['action']}>
								<button className={classes['action__text']} type="button">
									Log Out
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

UserSettingsView.displayName = 'UserSettingsView';
UserSettingsView.defaultProps = {};

export default React.memo(UserSettingsView);
