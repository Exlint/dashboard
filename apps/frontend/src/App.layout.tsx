import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import EDNotification from '@/ui/EDNotification';

interface IProps {}

const AppLayout: React.FC<IProps> = () => {
	return (
		<Suspense fallback={null}>
			<Outlet />

			<div id="backdrop-root" />
			<div id="overlay-root" />

			<EDNotification />
		</Suspense>
	);
};

AppLayout.displayName = 'AppLayout';
AppLayout.defaultProps = {};

export default React.memo(AppLayout);
