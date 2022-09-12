import React from 'react';

import AuthView from './Auth.view';

interface IProps {}

const Auth: React.FC<IProps> = () => {
	return <AuthView />;
};

Auth.displayName = 'Auth';
Auth.defaultProps = {};

export default React.memo(Auth);
