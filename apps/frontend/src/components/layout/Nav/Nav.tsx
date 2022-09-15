import React from 'react';

import NavView from './Nav.view';

interface IProps {}

const Nav: React.FC<IProps> = () => {
	return <NavView />;
};

Nav.displayName = 'Nav';
Nav.defaultProps = {};

export default React.memo(Nav);
