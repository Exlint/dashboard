import { clearAllListeners, createListenerMiddleware } from '@reduxjs/toolkit';

import { uiActions } from '../reducers/ui';
import { NOTIFICATION_SHOW_TIMEOUT } from '../models/ui';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	actionCreator: uiActions.closeNotification,
	effect: (_, listnerApi) => {
		listnerApi.dispatch(clearAllListeners());
	},
});

listenerMiddleware.startListening({
	actionCreator: uiActions.showNotification,
	effect: async (_, listnerApi) => {
		listnerApi.dispatch(clearAllListeners());

		await listnerApi.delay(NOTIFICATION_SHOW_TIMEOUT);

		listnerApi.dispatch(uiActions.closeNotification());
	},
});

export default listenerMiddleware;
