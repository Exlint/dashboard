import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios, { type AxiosResponse } from 'axios';
import { type PayloadAction } from '@reduxjs/toolkit';

import { backendApiAxios } from './utils/http';
import type { IAutoLoginResponseData } from './interfaces/responses';
import type { ILoginPayload } from './store/interfaces/auth';
import type { AppState } from './store/app';
import { authActions } from './store/reducers/auth';

import AppView from './App.view';

interface PropsFromState {
	readonly isAuthenticated: boolean;
}

interface PropsFromDispatch {
	readonly login: (loginPayload: ILoginPayload) => PayloadAction<ILoginPayload>;
}

interface IProps extends PropsFromState, PropsFromDispatch {}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	useEffect(() => {
		const authorizationInterceptor = backendApiAxios.interceptors.request.use((request) => {
			let token: string | null;

			if (request.url === '/user/auth/auto-login' || request.url === '/user/auth/refresh-token') {
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

		return () => {
			backendApiAxios.interceptors.request.eject(authorizationInterceptor);
		};
	}, [props.isAuthenticated, backendApiAxios]);

	useEffect(() => {
		backendApiAxios
			.post('/user/auth/auto-login')
			.then((response: AxiosResponse<IAutoLoginResponseData>) => {
				sessionStorage.setItem('token', response.data.accessToken);

				props.login({
					id: response.data.id,
					name: response.data.name,
				});
			})
			.catch(() => {
				return;
			});
	}, [backendApiAxios]);

	return <AppView isAuthenticated={props.isAuthenticated} />;
};

App.displayName = 'App';
App.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		isAuthenticated: state.auth.id !== null,
	};
};

export default connect(mapStateToProps, { login: authActions.login })(React.memo(App));
