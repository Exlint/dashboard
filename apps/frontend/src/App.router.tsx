import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import AppLayout from './App.layout';
import BackendService from './services/backend';
import { endProgress, startProgress } from './services/progress-bar';

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
			loader: async () => {
				startProgress();

				await import('./pages/Auth');

				endProgress();

				return null;
			},
		},
		{
			path: 'auth',
			element: <Auth />,
			loader: async () => {
				startProgress();

				await import('./pages/Auth');

				endProgress();

				return null;
			},
		},
	];

	const authorizedRoutes: RouteObject[] = [
		{
			path: '',
			element: <ComplianceCenter />,
			loader: async () => {
				startProgress();

				await Promise.all([
					BackendService.preload('/user/compliances'),
					import('./pages/ComplianceCenter'),
				]);

				endProgress();

				return null;
			},
		},
		{
			path: 'account-settings',
			element: <AccountSettings />,
			loader: async () => {
				startProgress();

				await import('./pages/AccountSettings');

				endProgress();

				return null;
			},
			children: [
				{
					path: '',
					element: <Navigate to="account" replace />,
				},
				{
					path: 'account',
					element: <Account />,
					loader: async () => {
						startProgress();

						await import('@/containers/AccountSettings/Account');

						endProgress();

						return null;
					},
				},
				{
					path: 'secret-management',
					element: <SecretManagement />,
					loader: async () => {
						startProgress();

						await Promise.all([
							BackendService.preload('/user/secrets'),
							import('@/containers/AccountSettings/SecretManagement'),
						]);

						endProgress();

						return null;
					},
				},
				{
					path: 'secret-management/new',
					element: <NewSecret />,
					loader: async () => {
						startProgress();

						await import('@/containers/AccountSettings/NewSecret');

						endProgress();

						return null;
					},
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

				await Promise.all([
					BackendService.preload('/user/compliances'),
					import('./pages/ComplianceCenter'),
				]);

				endProgress();

				return null;
			},
			children: [
				{
					path: 'new',
					element: <NewCompliance />,
					loader: async () => {
						startProgress();

						await import('@/containers/ComplianceCenter/NewCompliance');

						endProgress();

						return null;
					},
				},
				{
					path: ':complianceId',
					element: <ComplianceDetails />,
					loader: async () => {
						startProgress();

						await import('@/containers/ComplianceCenter/ComplianceDetails');

						endProgress();

						return null;
					},
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
									endProgress();

									return null;
								}

								await Promise.all([
									BackendService.preload(
										`/user/compliances/inline-policies/${complianceId}?p=1`,
									),
									import('@/containers/ComplianceCenter/ComplianceDetails/Policies'),
								]);

								endProgress();

								return null;
							},
						},
						{
							path: 'settings',
							element: <ComplianceSettings />,
							loader: async () => {
								startProgress();

								await import('@/containers/ComplianceCenter/ComplianceDetails/Settings');

								endProgress();

								return null;
							},
						},
					],
				},
			],
		},
		{
			path: 'compliance-center/:complianceId/policies/new',
			element: <NewPolicy />,
			loader: async () => {
				startProgress();

				await import('./pages/NewPolicy');

				endProgress();

				return null;
			},
		},
		{
			path: 'compliance-center/:complianceId/policies/:policyId',
			element: <Policy />,
			loader: async () => {
				startProgress();

				await import('./pages/Policy');

				endProgress();

				return null;
			},
			children: [
				{
					path: '',
					element: <Navigate to="configurations" replace />,
				},
				{
					path: 'configurations',
					element: <Configurations />,
					loader: async () => {
						startProgress();

						await import('@/containers/Policy/Configurations');

						endProgress();

						return null;
					},
					children: [
						{
							path: '',
							element: <Navigate to="configuration" replace />,
						},
						{
							path: 'configuration',
							element: <Configuration />,
							loader: async () => {
								startProgress();

								await import('@/containers/Policy/Configurations/Configuration');

								endProgress();

								return null;
							},
							children: [
								{
									path: '',
									element: <Navigate to="code" replace />,
								},
								{
									path: 'code',
									element: <Code />,
									loader: async () => {
										startProgress();

										await import('@/containers/Policy/Configurations/Configuration/Code');

										endProgress();

										return null;
									},
								},
							],
						},
						{
							path: 'file-list',
							element: <FilesList key={0} type="linted" />,
							loader: async () => {
								startProgress();

								await import('@/containers/Policy/Configurations/FilesList');

								endProgress();

								return null;
							},
						},
						{
							path: 'ignore-list',
							element: <FilesList key={1} type="ignored" />,
							loader: async () => {
								startProgress();

								await import('@/containers/Policy/Configurations/FilesList');

								endProgress();

								return null;
							},
						},
					],
				},
				{
					path: 'settings',
					element: <PolicySettings />,
					loader: async () => {
						startProgress();

						await import('@/containers/Policy/Settings');

						endProgress();

						return null;
					},
				},
			],
		},
	];

	const generalRoutes: RouteObject[] = [
		{
			path: 'external-auth-redirect',
			element: <ExternalAuthRedirect />,
			loader: async () => {
				startProgress();

				await import('./pages/ExternalAuthRedirect');

				endProgress();

				return null;
			},
		},
		{
			path: 'cli-auth',
			element: <CliAuth />,
			loader: async () => {
				startProgress();

				await import('./pages/CliAuth');

				endProgress();

				return null;
			},
		},
		{
			path: 'cli-authenticated',
			element: <CliAuthenticated />,
			loader: async () => {
				startProgress();

				await import('./pages/CliAuthenticated');

				endProgress();

				return null;
			},
		},
		{
			path: 'not-found',
			element: <NotFound />,
			loader: async () => {
				startProgress();

				await import('./pages/NotFound');

				endProgress();

				return null;
			},
		},
		{
			path: '*',
			element: isAuthenticated === null ? null : <NotFound />,
		},
	];

	let routesChildren = generalRoutes;

	if (isAuthenticated) {
		routesChildren = [...authorizedRoutes, ...generalRoutes];
	}

	if (isAuthenticated === false) {
		routesChildren = [...unAuthorizedRoutes, ...generalRoutes];
	}

	const routes: RouteObject[] = [
		{
			element: <AppLayout />,
			children: routesChildren,
		},
	];

	return routes;
};

export default RouterBuilder;
