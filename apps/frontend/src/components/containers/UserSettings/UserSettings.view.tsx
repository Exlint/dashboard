import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import SettingsSidebar from '@/layout/SettingsSidebar';

import UserSettingsModal from './UserSettingsModal';

import classes from './UserSettings.module.scss';

interface IProps {
	readonly isModelOnView: boolean;
	readonly onBackdropClick: () => void;
}

const UserSettingsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<main className={classes['container']}>
			<SettingsSidebar />
			<section className={classes['innerWrapper']}>
				<div className={classes['userSettings']}>
					<h1 className={classes['userSettings__title']}>{t('userSettings.title')}</h1>
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
								<button className={classes['action__button']} type="button" role="button">
									{t('userSettings.logoutAction')}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

UserSettingsView.displayName = 'UserSettingsView';
UserSettingsView.defaultProps = {};

export default React.memo(UserSettingsView);
