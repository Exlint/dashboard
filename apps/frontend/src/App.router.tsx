import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import AppLayout from './App.layout';
import { startProgress } from './services/progress-bar';
import { preloader } from './utils/http-backend';

const Auth = React.lazy(() => import('./pages/Auth'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));
const AccountSettings = React.lazy(() => import('./pages/AccountSettings'));
const CliAuth = React.lazy(() => import('./pages/CliAuth'));
const CliAuthenticated = React.lazy(() => import('./pages/CliAuthenticated'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const ComplianceCenter = React.lazy(() => import('./pages/ComplianceCenter'));
const NewPolicy = React.lazy(() => import('./pages/NewPolicy'));
const Policy = React.lazy(() => import('./pages/Policy'));
const Account = React.lazy(() => import('@/containers/AccountSettings/Account'));
const SecretManagement = React.lazy(() => import('@/containers/AccountSettings/SecretManagement'));
const NewSecret = React.lazy(() => import('@/containers/AccountSettings/NewSecret'));
const NewCompliance = React.lazy(() => import('@/containers/ComplianceCenter/NewCompliance'));
const ComplianceDetails = React.lazy(() => import('@/containers/ComplianceCenter/ComplianceDetails'));
const Policies = React.lazy(() => import('@/containers/ComplianceCenter/ComplianceDetails/Policies'));
const PolicySettings = React.lazy(() => import('@/containers/Policy/Settings'));
const Configurations = React.lazy(() => import('@/containers/Policy/Configurations'));
const Configuration = React.lazy(() => import('@/containers/Policy/Configurations/Configuration'));
const FilesList = React.lazy(() => import('@/containers/Policy/Configurations/FilesList'));
const Code = React.lazy(() => import('@/containers/Policy/Configurations/Configuration/Code'));

const ComplianceSettings = React.lazy(
	() => import('@/containers/ComplianceCenter/ComplianceDetails/Settings'),
);

const RouterBuilder = (isAuthenticated: boolean | null) => {
	const unAuthorizedRoutes: RouteObject[] = [
		{
			path: '',
			element: <Auth />,
		},
		{
			path: 'auth',
			element: <Auth />,
		},
		{
			path: 'external-auth-redirect',
			element: <ExternalAuthRedirect />,
		},
	];

	const authorizedRoutes: RouteObject[] = [
		{
			path: '',
			element: <ComplianceCenter />,
			loader: async () => {
				startProgress();

				await preloader('/user/compliances');

				return null;
			},
		},
		{
			path: 'account-settings',
			element: <AccountSettings />,
			children: [
				{
					path: '',
					element: <Navigate to="account" replace />,
				},
				{
					path: 'account',
					element: <Account />,
				},
				{
					path: 'secret-management',
					element: <SecretManagement />,
					loader: async () => {
						startProgress();

						await preloader('/user/secrets');

						return null;
					},
				},
				{
					path: 'secret-management/new',
					element: <NewSecret />,
				},
				{
					path: 'secret-management/*',
					element: <Navigate to="secret-management" replace />,
				},
				{
					path: '*',
					element: <Navigate to="account" replace />,
				},
			],
		},
		{
			path: 'compliance-center',
			element: <ComplianceCenter />,
			loader: async () => {
				startProgress();

				await preloader('/user/compliances');

				return null;
			},
			children: [
				{
					path: 'new',
					element: <NewCompliance />,
				},
				{
					path: ':complianceId',
					element: <ComplianceDetails />,
					children: [
						{
							path: '',
							element: <Navigate to="policies" replace />,
						},
						{
							path: 'policies',
							element: <Policies />,
							loader: async (args) => {
								startProgress();

								const complianceId = args.params['complianceId'];

								if (!complianceId) {
									return null;
								}

								await preloader(`/user/compliances/inline-policies/${complianceId}?p=1`);

								return null;
							},
						},
						{
							path: 'settings',
							element: <ComplianceSettings />,
						},
					],
				},
			],
		},
		{
			path: 'compliance-center/:complianceId/policies/new',
			element: <NewPolicy />,
		},
		{
			path: 'compliance-center/:complianceId/policies/:policyId',
			element: <Policy />,
			children: [
				{
					path: '',
					element: <Navigate to="configurations" replace />,
				},
				{
					path: 'configurations',
					element: <Configurations />,
					children: [
						{
							path: '',
							element: <Navigate to="configuration" replace />,
						},
						{
							path: 'configuration',
							element: <Configuration />,
							children: [
								{
									path: '',
									element: <Navigate to="code" replace />,
								},
								{
									path: 'code',
									element: <Code />,
								},
							],
						},
						{
							path: 'file-list',
							element: <FilesList key={0} type="linted" />,
						},
						{
							path: 'ignore-list',
							element: <FilesList key={1} type="ignored" />,
						},
					],
				},
				{
					path: 'settings',
					element: <PolicySettings />,
				},
			],
		},
	];

	const generalRoutes: RouteObject[] = [
		{
			path: 'cli-auth',
			element: <CliAuth />,
		},
		{
			path: 'cli-authenticated',
			element: <CliAuthenticated />,
		},
		{
			path: 'not-found',
			element: <NotFound />,
		},
		{
			path: '*',
			element: isAuthenticated === null ? null : <NotFound />,
		},
	];

	const routes = [
		{
			element: <AppLayout />,
			children: [...(isAuthenticated ? authorizedRoutes : unAuthorizedRoutes), ...generalRoutes],
		},
	];

	return routes;
};

export default RouterBuilder;
