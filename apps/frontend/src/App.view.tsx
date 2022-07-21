import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

interface Props {
	isAuthenticated: boolean;
}

const Auth = React.lazy(() => import('./pages/Auth'));
const GroupCenter = React.lazy(() => import('./pages/GroupCenter'));
const ExternalAuthRedirect = React.lazy(() => import('./pages/ExternalAuthRedirect'));

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<Routes>
				{props.isAuthenticated && (
					<>
						<Route path="/auth" element={<Auth />} />
						<Route path="/external-auth-redirect" element={<ExternalAuthRedirect />} />
						<Route path="*" element={<Navigate replace to="/auth" />} />
					</>
				)}
				{!props.isAuthenticated && (
					<>
						<Route path="/group-center/*" element={<GroupCenter />} />
						<Route path="/new-policy" element={<span>amir</span>} />
					</>
				)}
			</Routes>
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
