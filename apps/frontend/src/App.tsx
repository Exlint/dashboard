import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

import * as fromApp from './store/app';
import { backendApiAxios } from './utils/http';
import type { IAutoLoginResponseData } from './interfaces/responses';
import * as userActions from './store/actions/user';

import AppView from './App.view';
import { IUser } from './interfaces/user';

interface PropsFromState {
	readonly isAuthenticated: boolean;
}

interface PropsFromDispatch {
	readonly setUser: (user: IUser) => userActions.SetUser;
}

interface IProps extends PropsFromState, PropsFromDispatch {}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	useEffect(() => {
		const authorizationInterceptor = backendApiAxios.interceptors.request.use((request) => {
			let token: string | null;

			if (request.url === '/user/auth/auto-login') {
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
	}, [props.isAuthenticated]);

	useEffect(() => {
		backendApiAxios
			.post('/user/auth/auto-login')
			.then((response: AxiosResponse<IAutoLoginResponseData>) => {
				sessionStorage.setItem('token', response.data.accessToken);

				props.setUser({
					id: response.data.id,
					name: response.data.name,
				});
			})
			.catch(() => {
				return;
			});
	}, []);

	return <AppView isAuthenticated={props.isAuthenticated} />;
};

App.displayName = 'App';
App.defaultProps = {};

const mapStateToProps = (state: fromApp.AppState) => {
	return {
		isAuthenticated: !!state.user,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserTypes>): PropsFromDispatch => {
	return {
		setUser: (user: IUser): userActions.SetUser => dispatch(userActions.setUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App));
