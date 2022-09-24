import React from 'react';
import { NavLink } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import type icons from '@/assets/icons';

import classes from './NavLink.module.scss';

interface IProps {
	readonly route: string;
	readonly iconName: keyof typeof icons;
	readonly text: string;
	readonly activePathName: string;
}

const NavLinkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<NavLink
			className={({ isActive }) =>
				concatClasses(
					classes,
					'container',
					(props.activePathName === '/' && props.route === '/group-center') || isActive
						? 'container--active'
						: null,
				)
			}
			to={props.route}
		>
			<EDSvg className={classes['container__icon']} name={props.iconName} />
			<span className={classes['container__text']}>{props.text}</span>
		</NavLink>
	);
};

NavLinkView.displayName = 'NavLinkView';
NavLinkView.defaultProps = {};

export default React.memo(NavLinkView);
