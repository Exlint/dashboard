import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import Header from '@/layout/Header';

interface IProps {
	readonly isAuthenticated: boolean | null;
}

const Auth = React.lazy(() => import('./pages/Auth'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));
const GroupCenter = React.lazy(() => import('./pages/GroupCenter'));
const PolicyConfiguration = React.lazy(() => import('./pages/PolicyConfiguration'));
const UserSettings = React.lazy(() => import('./pages/UserSettings'));
const TokenManagement = React.lazy(() => import('./pages/TokenManagement'));
const CliAuth = React.lazy(() => import('./pages/CliAuth'));
const CliAuthenticated = React.lazy(() => import('./pages/CliAuthenticated'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Policy = React.lazy(() => import('./pages/Policy'));
const RuleOnboarding = React.lazy(() => import('./pages/RuleOnboarding'));

const AppView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<div id="backdrop-root" />
			<div id="overlay-root" />
			{props.isAuthenticated && <Header />}

			<Routes>
				{props.isAuthenticated === false && (
					<>
						<Route path="/" element={<Auth />} />
						<Route path="/auth" element={<Auth />} />
						<Route path="/external-auth-redirect" element={<ExternalAuthRedirect />} />
					</>
				)}
				{props.isAuthenticated && (
					<Route>
						<Route path="/group-center/*" element={<GroupCenter />} />
						<Route path="/user-settings" element={<UserSettings />} />
						<Route path="/policy-configuration/:policyId" element={<PolicyConfiguration />} />
						<Route path="/rule-onboarding/:policyId" element={<RuleOnboarding />} />
						<Route path="/token-management" element={<TokenManagement />} />
						<Route path="/policy" element={<Policy />} />
					</Route>
				)}
				<Route path="/cli-auth" element={<CliAuth />} />
				<Route path="/cli-authenticated" element={<CliAuthenticated />} />
				<Route path="/not-found" element={<NotFound />} />
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
