import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { usePage } from '@/hooks/use-page';
import { endProgress, startProgress } from '@/services/progress-bar';

interface IProps {}

const Page: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { onLoad } = usePage();
	const location = useLocation();

	const render = useMemo(() => {
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <>{props.children}</>;
	}, [props.children]);

	useEffect(() => {
		onLoad(render);
	}, [onLoad, render]);

	useEffect(() => {
		endProgress();

		return () => startProgress();
	}, [location]);

	return render;
};

Page.displayName = 'Page';
Page.defaultProps = {};

export default Page;
