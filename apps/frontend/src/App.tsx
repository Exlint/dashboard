import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAutoAuthResponseData } from '@exlint-dashboard/common';

import { backendApi, cliBackendApi } from './utils/http';
import type { IAuthPayload } from './store/interfaces/auth';
import type { AppState } from './store/app';
import { authActions } from './store/reducers/auth';

import AppView from './App.view';

interface IPropsFromState {
	readonly isAuthenticated: boolean | null;
}

interface IPropsFromDispatch {
	readonly auth: (loginPayload: IAuthPayload) => PayloadAction<IAuthPayload>;
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromState, IPropsFromDispatch {}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	useEffect(() => {
		const backendAuthorizationInterceptor = backendApi.interceptors.request.use((request) => {
			let token: string | null;

			if (
				(request.url === '/user/auth' && request.method === 'get') ||
				(request.url === '/user/auth/refresh-token' && request.method === 'get')
			) {
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
			.get<IAutoAuthResponseData>('/user/auth')
			.then((response) => {
				sessionStorage.setItem('token', response.data.accessToken);

				props.auth({
					id: response.data.id,
					name: response.data.name,
					createdAt: response.data.createdAt,
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
