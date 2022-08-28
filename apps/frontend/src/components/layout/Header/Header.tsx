import React from 'react';

import HeaderView from './Header.view';

interface IProps {}

const Header: React.FC<IProps> = () => {
	const onExitButton = () => {
		alert('exit');
	};

	return <HeaderView onExitButton={onExitButton} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default Header;
