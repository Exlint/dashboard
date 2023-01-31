import {
	createListenerMiddleware,
	type AnyAction,
	type ListenerEffectAPI,
	type ThunkDispatch,
} from '@reduxjs/toolkit';
import type { IRefreshTokenResponseData } from '@exlint.io/common';

import { backendApi } from '@/utils/http';

import { authActions } from '../reducers/auth';
import { ACCESS_TOKEN_REFRESH_TIMEOUT } from '../models/auth';

const listenerMiddleware = createListenerMiddleware();

const authEffect = async (
	_: unknown,
	listnerApi: ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>>,
) => {
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
};

listenerMiddleware.startListening({
	actionCreator: authActions.setUnauthenticated,
	effect: () => {
		listenerMiddleware.stopListening({
			actionCreator: authActions.auth,
			effect: authEffect,
			cancelActive: true,
		});
		listenerMiddleware.startListening({
			actionCreator: authActions.auth,
			effect: authEffect,
		});

		localStorage.clear();
		sessionStorage.clear();
	},
});

listenerMiddleware.startListening({
	actionCreator: authActions.auth,
	effect: authEffect,
});

export default listenerMiddleware;
