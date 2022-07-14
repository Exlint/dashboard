import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import Header from './components/layout/Header';

interface Props {
	isAuthenticated: boolean;
}

const Auth = React.lazy(() => import('./pages/Auth'));
const GroupCenter = React.lazy(() => import('./pages/GroupCenter'));
const TokenManagement = React.lazy(() => import('./pages/TokenManagement'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<Routes>
				{!props.isAuthenticated && (
					<>
						<Route path="/auth" element={<Auth />} />
						<Route path="/external-auth-redirect" element={<ExternalAuthRedirect />} />
						<Route path="*" element={<Navigate replace to="/auth" />} />
					</>
				)}
				{props.isAuthenticated && (
					<>
						<Header />

						<Route path="/group-center" element={<GroupCenter />} />
						<Route path="/token-management" element={<TokenManagement />} />
						<Route path="*" element={<Navigate replace to="/group-center" />} />
					</>
				)}
			</Routes>
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
