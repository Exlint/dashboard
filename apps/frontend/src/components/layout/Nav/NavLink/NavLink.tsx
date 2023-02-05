import React from 'react';
import { useLocation } from 'react-router-dom';

import type icons from '@/assets/icons';

import NavLinkView from './NavLink.view';

interface IProps {
	readonly route: string;
	readonly iconName: keyof typeof icons;
	readonly text: string;
	readonly testId: string;
}

const NavLink: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { pathname } = useLocation();

	return (
		<NavLinkView
			route={props.route}
			iconName={props.iconName}
			text={props.text}
			activePathName={pathname}
			testId={props.testId}
		/>
	);
};

NavLink.displayName = 'NavLink';
NavLink.defaultProps = {};

export default React.memo(NavLink);
