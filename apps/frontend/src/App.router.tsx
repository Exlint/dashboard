import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Account from '@/containers/AccountSettings/Account';
import SecretManagement from '@/containers/AccountSettings/SecretManagement';
import NewSecret from '@/containers/AccountSettings/NewSecret';
import NewGroup from '@/containers/GroupCenter/NewGroup';
import GroupDetails from '@/containers/GroupCenter/GroupDetails';
import GroupSettings from '@/containers/GroupCenter/GroupDetails/Settings';
import Policies from '@/containers/GroupCenter/GroupDetails/Policies';
import PolicySettings from '@/containers/Policy/Settings';

interface IProps {
	readonly isAuthenticated: boolean | null;
}

const Auth = React.lazy(() => import('./pages/Auth'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));
const AccountSettings = React.lazy(() => import('./pages/AccountSettings'));
const CliAuth = React.lazy(() => import('./pages/CliAuth'));
const CliAuthenticated = React.lazy(() => import('./pages/CliAuthenticated'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const GroupCenter = React.lazy(() => import('./pages/GroupCenter'));
const NewPolicy = React.lazy(() => import('./pages/NewPolicy'));
const Policy = React.lazy(() => import('./pages/Policy'));

const AppRouter: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => (
	<Routes>
		{props.isAuthenticated === false && (
			<>
				<Route path="" element={<Auth />} />
				<Route path="auth" element={<Auth />} />
				<Route path="external-auth-redirect" element={<ExternalAuthRedirect />} />
			</>
		)}
		{props.isAuthenticated && (
			<>
				<Route path="" element={<GroupCenter />} />
				<Route path="account-settings" element={<AccountSettings />}>
					<Route path="" element={<Navigate to="account" replace />} />
					<Route path="account" element={<Account />} />
					<Route path="secret-management" element={<SecretManagement />} />
					<Route path="secret-management/new" element={<NewSecret />} />
					<Route path="secret-management/*" element={<Navigate to="secret-management" replace />} />
					<Route path="*" element={<Navigate to="account" replace />} />
				</Route>
				<Route path="group-center" element={<GroupCenter />}>
					<Route path="new" element={<NewGroup />} />
					<Route path=":groupId" element={<GroupDetails />}>
						<Route path="" element={<Navigate to="policies" replace />} />
						<Route path="policies" element={<Policies />} />
						<Route path="history" element={null} />
						<Route path="settings" element={<GroupSettings />} />
					</Route>
				</Route>
				<Route path="group-center/:groupId/policies/new" element={<NewPolicy />} />
				<Route path="group-center/:groupId/policies/:policyId" element={<Policy />}>
					<Route path="" element={<Navigate to="rules" replace />} />
					<Route path="rules" element={null} />
					<Route path="configurations" element={null} />
					<Route path="history" element={null} />
					<Route path="settings" element={<PolicySettings />} />
				</Route>
			</>
		)}
		<Route path="cli-auth" element={<CliAuth />} />
		<Route path="cli-authenticated" element={<CliAuthenticated />} />
		<Route path="/not-found" element={<NotFound />} />
		<Route path="*" element={props.isAuthenticated === null ? null : <NotFound />} />
	</Routes>
);

AppRouter.displayName = 'AppRouter';
AppRouter.defaultProps = {};

export default React.memo(AppRouter);
