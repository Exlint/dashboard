import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

interface IProps {
	readonly isAuthenticated: boolean | null;
}

const Auth = React.lazy(() => import('./pages/Auth'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));
const UserSettings = React.lazy(() => import('./pages/UserSettings'));
const CliAuth = React.lazy(() => import('./pages/CliAuth'));
const CliAuthenticated = React.lazy(() => import('./pages/CliAuthenticated'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const AppView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<div id="backdrop-root" />
			<div id="overlay-root" />
			<Routes>
				{props.isAuthenticated === false && (
					<>
						<Route path="/" element={<Auth />} />
						<Route path="/auth" element={<Auth />} />
						<Route path="/external-auth-redirect" element={<ExternalAuthRedirect />} />
					</>
				)}
				<Route path="/cli-auth" element={<CliAuth />} />
				<Route path="/cli-authenticated" element={<CliAuthenticated />} />
				<Route path="/not-found" element={<NotFound />} />
				<Route path="/user-settings" element={<UserSettings />} />
				<Route
					path="*"
					element={props.isAuthenticated === null ? null : <Navigate replace to="/not-found" />}
				/>
			</Routes>
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
