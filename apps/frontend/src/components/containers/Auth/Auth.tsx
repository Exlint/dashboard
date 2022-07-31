import React from 'react';
import { useSearchParams } from 'react-router-dom';

import AuthView from './Auth.view';

interface IProps {}

const Auth: React.FC<IProps> = () => {
	const [searchParams] = useSearchParams();

	const port = searchParams.get('port');

	return <AuthView port={port} />;
};

Auth.displayName = 'Auth';
Auth.defaultProps = {};

export default React.memo(Auth);
