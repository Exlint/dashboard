import React from 'react';

import EDSvg from '@/ui/EDSvg';
import SettingsSidebar from '@/layout/SettingsSidebar';
import UserSettingsModal from './UserSettingsModal';

import classes from './UserSettings.module.scss';

interface IProps {
	readonly modalChangeHandler: () => void;
	readonly modalState: boolean;
}

const UserSettingsView: React.FC<IProps> = (props) => {
	return (
		<section className={classes['mainWrapper']}>
			<SettingsSidebar />
			<div className={classes['innerWrapper']}>
				<div className={classes['userSettings']}>
					<h1 className={classes['userSettings__title']}>User Settings</h1>
					<div className={classes['mainSection']}>
						<div className={classes['mainSection__details']}>
							<EDSvg
								className={classes['mainSection__details--icon']}
								name="userSettingsDefaultProfilePicture"
							/>
							<span className={classes['mainSection__details--username']}>User</span>
						</div>
						<div className={classes['actionsWrapper']}>
							<div className={classes['actionsWrapper__action']}>
								<button
									className={classes['actionsWrapper__action--text']}
									type="button"
									onClick={props.modalChangeHandler}
								>
									Delete User
								</button>
								{props.modalState && (
									<UserSettingsModal modalChangeHandler={props.modalChangeHandler} />
								)}
							</div>
							<div className={classes['actionsWrapper__action']}>
								<button className={classes['actionsWrapper__action--text']} type="button">
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
