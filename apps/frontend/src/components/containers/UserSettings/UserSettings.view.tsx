import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import SettingsSidebar from '@/layout/SettingsSidebar';

import UserSettingsModal from './UserSettingsModal';

import classes from './UserSettings.module.scss';

interface IProps {
	readonly isModelOnView: boolean;
	readonly onLogout: () => void;
	readonly onBackdropClick: () => void;
}

const UserSettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<SettingsSidebar />
			<main className={classes['innerWrapper']}>
				<section className={classes['userSettings']}>
					<h3 className={classes['userSettings__title']}>{t('userSettings.title')}</h3>
					<div className={classes['mainSection']}>
						<div className={classes['details']}>
							<EDSvg
								className={classes['details__icon']}
								name="userSettingsDefaultProfilePicture"
							/>
							<span className={classes['details__username']}>{t('userSettings.username')}</span>
						</div>
						<div className={classes['actionsWrapper']}>
							<div className={classes['action']}>
								<button
									className={classes['action__button']}
									type="button"
									role="button"
									onClick={props.onBackdropClick}
								>
									{t('userSettings.deleteUserAction')}
								</button>
								{props.isModelOnView && (
									<UserSettingsModal onBackdropClick={props.onBackdropClick} />
								)}
							</div>
							<div className={classes['action']}>
								<button
									className={classes['action__button']}
									type="button"
									role="button"
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
