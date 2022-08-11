import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import SettingsSidebar from '@/layout/SettingsSidebar';

import UserSettingsModal from './UserSettingsModal';

import classes from './UserSettings.module.scss';

interface IProps {
	readonly isModelOnView: boolean;
	readonly onLogout: () => void;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
}

const UserSettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<SettingsSidebar />
			<main className={classes['main']}>
				<section className={classes['userSettingsSection']}>
					<h3 className={classes['userSettingsSection__title']}>{t('userSettings.title')}</h3>
					<div className={classes['body']}>
						<div className={classes['usernameWrapper']}>
							<EDSvg className={classes['usernameWrapper__icon']} name="blackUser" />
							<span className={classes['usernameWrapper__username']}>
								{t('userSettings.username')}
							</span>
						</div>
						<div className={classes['actionsWrapper']}>
							<div className={classes['action']}>
								<button
									className={classes['action__button']}
									type="button"
									onClick={props.onOpenModal}
								>
									{t('userSettings.deleteUserAction')}
								</button>
								{props.isModelOnView && (
									<UserSettingsModal onCloseModal={props.onCloseModal} />
								)}
							</div>
							<div className={classes['action']}>
								<button
									className={classes['action__button']}
									type="button"
									onClick={props.onLogout}
								>
									{t('userSettings.logoutAction')}
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

UserSettingsView.displayName = 'UserSettingsView';
UserSettingsView.defaultProps = {};

export default React.memo(UserSettingsView);
