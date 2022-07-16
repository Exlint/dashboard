import { clearAllListeners, createListenerMiddleware } from '@reduxjs/toolkit';

import { backendApiAxios } from '@/utils/http';
import { IRefreshTokenResponseData } from '@/interfaces/responses';

import { authActions } from '../reducers/auth';
import { ACCESS_TOKEN_REFRESH_TIMEOUT } from '../models/auth';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	actionCreator: authActions.logout,
	effect: (_, listnerApi) => {
		listnerApi.dispatch(clearAllListeners());

		localStorage.clear();
		sessionStorage.clear();
	},
});

listenerMiddleware.startListening({
	actionCreator: authActions.login,
	effect: async (_, listnerApi) => {
		let isLoggedIn = true;

		while (isLoggedIn) {
			try {
				const response = await backendApiAxios.post<IRefreshTokenResponseData>(
					'/user/auth/refresh-token',
				);

				sessionStorage.setItem('token', response.data.accessToken);

				await listnerApi.delay(ACCESS_TOKEN_REFRESH_TIMEOUT);
			} catch {
				listnerApi.dispatch(authActions.logout());

				isLoggedIn = false;
			}
		}
	},
});

export default listenerMiddleware;
