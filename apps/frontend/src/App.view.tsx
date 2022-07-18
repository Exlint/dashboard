import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

interface Props {
	isAuthenticated: boolean;
}

const Auth = React.lazy(() => import('./pages/Auth'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));
const UserSettings = React.lazy(() => import('./pages/UserSettings'));

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			{props.isAuthenticated && (
				<Routes>
					<Route path="/auth" element={<Auth />} />
					<Route path="/external-auth-redirect" element={<ExternalAuthRedirect />} />
					<Route path="*" element={<Navigate replace to="/auth" />} />
				</Routes>
			)}
			{!props.isAuthenticated && (
				<Routes>
					<Route path="/user-settings" element={<UserSettings />} />
				</Routes>
			)}
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
