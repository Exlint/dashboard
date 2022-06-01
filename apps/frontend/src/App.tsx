import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as fromApp from './store/app';

import Login from './pages/login';
import Header from './components/layout/Header';
import GroupCenter from './pages/groupCenter';
import TokenManagement from './pages/tokenManagement';

interface PropsFromState {
	isAuthenticated: boolean;
}

interface IProps extends PropsFromState {}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<Suspense fallback={null}>
			<Switch>
				{!props.isAuthenticated && (
					<>
						<Route path="/login">
							<Login />
						</Route>
						<Redirect path="*" to="/login" />
					</>
				)}
				{props.isAuthenticated && (
					<>
						<Header />

						<Route path="/groupCenter">
							<GroupCenter />
						</Route>

						<Route path="/tokenManagement">
							<TokenManagement />
						</Route>

						<Redirect path="*" to="/groupCenter" />
					</>
				)}
			</Switch>
		</Suspense>
	);
};

App.displayName = 'App';

const mapStateToProps = (state: fromApp.AppState) => {
	return {
		isAuthenticated: !!state.user.email,
	};
};

export default connect(mapStateToProps)(React.memo(App));
