import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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
const Account = React.lazy(() => import('@/containers/AccountSettings/Account'));
const SecretManagement = React.lazy(() => import('@/containers/AccountSettings/SecretManagement'));
const NewSecret = React.lazy(() => import('@/containers/AccountSettings/NewSecret'));
const NewGroup = React.lazy(() => import('@/containers/GroupCenter/NewGroup'));
const GroupDetails = React.lazy(() => import('@/containers/GroupCenter/GroupDetails'));
const GroupSettings = React.lazy(() => import('@/containers/GroupCenter/GroupDetails/Settings'));
const Policies = React.lazy(() => import('@/containers/GroupCenter/GroupDetails/Policies'));
const PolicySettings = React.lazy(() => import('@/containers/Policy/Settings'));
const Configurations = React.lazy(() => import('@/containers/Policy/Configurations'));
const Configuration = React.lazy(() => import('@/containers/Policy/Configurations/Configuration'));
const FilesList = React.lazy(() => import('@/containers/Policy/Configurations/FilesList'));
const Code = React.lazy(() => import('@/containers/Policy/Configurations/Configuration/Code'));

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
						<Route path="settings" element={<GroupSettings />} />
					</Route>
				</Route>
				<Route path="group-center/:groupId/policies/new" element={<NewPolicy />} />
				<Route path="group-center/:groupId/policies/:policyId" element={<Policy />}>
					<Route path="" element={<Navigate to="configurations" replace />} />
					<Route path="configurations" element={<Configurations />}>
						<Route path="" element={<Navigate to="configuration" replace />} />
						<Route path="configuration" element={<Configuration />}>
							<Route path="" element={<Navigate to="code" replace />} />
							<Route path="code" element={<Code />} />
						</Route>
						<Route path="file-list" element={<FilesList key={0} type="linted" />} />
						<Route path="ignore-list" element={<FilesList key={1} type="ignored" />} />
					</Route>
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
