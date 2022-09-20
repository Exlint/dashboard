import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly groupLabel: string;
	readonly groupId: string;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <HeaderView groupLabel={props.groupLabel} groupId={props.groupId} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
