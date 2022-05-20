import React from 'react';

import HeaderView from './Header.view';

interface IProps {}

const Header: React.FC<IProps> = () => {
	return <HeaderView />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
