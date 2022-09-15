import React from 'react';

import type icons from '../../../../assets/icons';

import NavLinkView from './NavLink.view';

interface IProps {
	readonly route: string;
	readonly iconName: keyof typeof icons;
	readonly text: string;
}

const NavLink: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <NavLinkView route={props.route} iconName={props.iconName} text={props.text} />;
};

NavLink.displayName = 'NavLink';
NavLink.defaultProps = {};

export default React.memo(NavLink);
