import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAutoAuthResponseData } from '@exlint.io/common';

import type { IAuthPayload } from './store/interfaces/auth';
import type { AppState } from './store/app';
import { authActions } from './store/reducers/auth';

import AppView from './App.view';
import BackendService from './services/backend';

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
		BackendService.get<IAutoAuthResponseData>('/user/auth')
			.then((responseData) => {
				sessionStorage.setItem('token', responseData.accessToken);

				props.auth({
					id: responseData.id,
					name: responseData.name,
					createdAt: responseData.createdAt,
				});
			})
			.catch(() => props.setUnauthenticated());
	}, []);

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
