import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios, { type AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';

import { backendApi, cliBackendApi } from './utils/http';
import type { IAutoAuthResponseData } from './interfaces/responses';
import type { IAuthPayload } from './store/interfaces/auth';
import type { AppState } from './store/app';
import { authActions } from './store/reducers/auth';

import AppView from './App.view';

interface PropsFromState {
	readonly isAuthenticated: boolean | null;
}

interface PropsFromDispatch {
	readonly auth: (loginPayload: IAuthPayload) => PayloadAction<IAuthPayload>;
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends PropsFromState, PropsFromDispatch {}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	useEffect(() => {
		const backendAuthorizationInterceptor = backendApi.interceptors.request.use((request) => {
			let token: string | null;

			if (request.url === '/user/auth/auto-auth' || request.url === '/user/auth/refresh-token') {
				token = localStorage.getItem('token');
			} else {
				token = sessionStorage.getItem('token');
			}

			if (!token) {
				throw new axios.Cancel('Missing token');
			}

			request.headers!['Authorization'] = `Bearer ${token}`;

			return request;
		});

		const cliBackendAuthorizationInterceptor = cliBackendApi.interceptors.request.use((request) => {
			const token = localStorage.getItem('token');

			if (!token) {
				throw new axios.Cancel('Missing token');
			}

			request.headers!['Authorization'] = `Bearer ${token}`;

			return request;
		});

		return () => {
			backendApi.interceptors.request.eject(backendAuthorizationInterceptor);
			cliBackendApi.interceptors.request.eject(cliBackendAuthorizationInterceptor);
		};
	}, [props.isAuthenticated, backendApi, cliBackendApi]);

	useEffect(() => {
		backendApi
			.post('/user/auth/auto-auth')
			.then((response: AxiosResponse<IAutoAuthResponseData>) => {
				sessionStorage.setItem('token', response.data.accessToken);

				props.auth({
					id: response.data.id,
					name: response.data.name,
				});
			})
			.catch(() => {
				props.setUnauthenticated();
			});
	}, [backendApi]);

	return <AppView isAuthenticated={props.isAuthenticated} />;
};

App.displayName = 'App';
App.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
};

export default connect(mapStateToProps, {
	auth: authActions.auth,
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(App));
