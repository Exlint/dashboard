import React from 'react';
import { Outlet } from 'react-router-dom';

import EDNotification from '@/ui/EDNotification';

import FallbackProvider from './helpers/FallbackProvider';

interface IProps {}

const AppLayout: React.FC<IProps> = () => {
	return (
		<FallbackProvider>
			<Outlet />

			<div id="backdrop-root" />
			<div id="overlay-root" />

			<EDNotification />
		</FallbackProvider>
	);
};

AppLayout.displayName = 'AppLayout';
AppLayout.defaultProps = {};

export default React.memo(AppLayout);
