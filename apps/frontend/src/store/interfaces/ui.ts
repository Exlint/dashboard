export type NotificationType = 'info' | 'checkmark' | 'warning' | 'error';

export interface IUiState {
	notificationType: NotificationType | null;
	notificationTitle: string | null;
	notificationMessage: string | null;
}

export interface IUiShowNotificationPayload {
	notificationType: NotificationType;
	notificationTitle: string;
	notificationMessage: string;
}
