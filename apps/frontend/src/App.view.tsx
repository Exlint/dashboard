import React, { Suspense } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/layout/Header';

interface Props {
	isAuthenticated: boolean;
}

const Login = React.lazy(() => import('./pages/Login'));
const GroupCenter = React.lazy(() => import('./pages/GroupCenter'));
const TokenManagement = React.lazy(() => import('./pages/TokenManagement'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<Switch>
				{!props.isAuthenticated && (
					<>
						<Route path="/login" component={Login} />
						<Route path="/external-auth-redirect" component={ExternalAuthRedirect} />
					</>
				)}
				{props.isAuthenticated && (
					<>
						<Header />

						<Redirect exact path="/" to="/login" />
						<Route path="/group-center" component={GroupCenter} />
						<Route path="/token-management" component={TokenManagement} />
					</>
				)}
			</Switch>
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
