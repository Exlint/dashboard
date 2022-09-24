import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import EDNotification from '@/ui/EDNotification';
import AppRouter from './App.router';

interface IProps {
	readonly isAuthenticated: boolean | null;
}

const AppView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<div id="backdrop-root" />
			<div id="overlay-root" />

			<EDNotification />

			<AppRouter isAuthenticated={props.isAuthenticated} />
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
