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
	listnerApi: ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>>,
) => {
	listnerApi.cancelActiveListeners();

	await listnerApi.delay(NOTIFICATION_SHOW_TIMEOUT);

	listnerApi.dispatch(uiActions.closeNotification());
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
