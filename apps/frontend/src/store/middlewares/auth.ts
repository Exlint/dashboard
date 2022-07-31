import { clearAllListeners, createListenerMiddleware } from '@reduxjs/toolkit';

import { backendApi } from '@/utils/http';
import type { IRefreshTokenResponseData } from '@/interfaces/responses';

import { authActions } from '../reducers/auth';
import { ACCESS_TOKEN_REFRESH_TIMEOUT } from '../models/auth';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	actionCreator: authActions.setUnauthenticated,
	effect: (_, listnerApi) => {
		listnerApi.dispatch(clearAllListeners());

		localStorage.clear();
		sessionStorage.clear();
	},
});

listenerMiddleware.startListening({
	actionCreator: authActions.auth,
	effect: async (_, listnerApi) => {
		let isLoggedIn = true;

		while (isLoggedIn) {
			await listnerApi.delay(ACCESS_TOKEN_REFRESH_TIMEOUT);

			try {
				const response = await backendApi.get<IRefreshTokenResponseData>('/user/auth/refresh-token');

				sessionStorage.setItem('token', response.data.accessToken);
			} catch {
				listnerApi.dispatch(authActions.setUnauthenticated());

				isLoggedIn = false;
			}
		}
	},
});

export default listenerMiddleware;
