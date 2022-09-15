import React from 'react';

import { concatClasses } from '@/utils/component';
import type { NotificationType } from '@/store/interfaces/ui';

import type icons from '../../../assets/icons';
import EDSvg from '../EDSvg';

import classes from './EDNotification.module.scss';

interface IProps {
	readonly notificationType: NotificationType | null;
	readonly notificationTitle: string | null;
	readonly notificationMessage: string | null;
	readonly isWithFullOpacity: boolean;
	readonly onCloseNotification: VoidFunction;
}

const EDNotificationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let notificationIcon: keyof typeof icons;

	switch (props.notificationType) {
		case 'info':
			notificationIcon = 'notificationInfo';

			break;
		case 'checkmark':
			notificationIcon = 'notificationCheckmark';

			break;
		case 'warning':
			notificationIcon = 'notificationWarning';

			break;
		case 'error':
			notificationIcon = 'notificationError';

			break;
		default:
			notificationIcon = 'notificationInfo';
	}

	return (
		<div
			className={concatClasses(
				classes,
				'container',
				`container--${props.notificationType}`,
				props.isWithFullOpacity ? 'container--fullOpacity' : null,
			)}
		>
			<EDSvg className={classes['container__icon']} name={notificationIcon} />
			<div className={classes['textContainer']}>
				<h5 className={classes['textContainer__title']}>{props.notificationTitle}</h5>
				<span className={classes['textContainer__message']}>{props.notificationMessage}</span>
			</div>
			<EDSvg
				className={classes['container__closeIcon']}
				name="close"
				onClick={props.onCloseNotification}
			/>
		</div>
	);
};

EDNotificationView.displayName = 'EDNotificationView';
EDNotificationView.defaultProps = {};

export default React.memo(EDNotificationView);
