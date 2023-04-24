import {
	createListenerMiddleware,
	type ThunkDispatch,
	type ListenerEffectAPI,
	type AnyAction,
} from '@reduxjs/toolkit';

import { uiActions } from '../reducers/ui';
import { NOTIFICATION_SHOW_TIMEOUT } from '../models/ui';

const listenerMiddleware = createListenerMiddleware();

const showNotificationEffect = async (
	_: unknown,
	listenerApi: ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>>,
) => {
	listenerApi.cancelActiveListeners();

	await listenerApi.delay(NOTIFICATION_SHOW_TIMEOUT);

	listenerApi.dispatch(uiActions.closeNotification());
};

listenerMiddleware.startListening({
	actionCreator: uiActions.closeNotification,
	effect: () => {
		listenerMiddleware.stopListening({
			actionCreator: uiActions.showNotification,
			effect: showNotificationEffect,
			cancelActive: true,
		});
		listenerMiddleware.startListening({
			actionCreator: uiActions.showNotification,
			effect: showNotificationEffect,
		});
	},
});

listenerMiddleware.startListening({
	actionCreator: uiActions.showNotification,
	effect: showNotificationEffect,
});

export default listenerMiddleware;
