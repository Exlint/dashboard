import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouterBuilder from './App.router';

interface IProps {
	readonly isAuthenticated: boolean | null;
}

const AppView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const routes = useMemo(() => RouterBuilder(props.isAuthenticated), [props.isAuthenticated]);

	return <RouterProvider router={createBrowserRouter(routes)} />;
};

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
