import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ExternalAuthRedirectView from './ExternalAuthRedirect.view';

interface IProps {}

const ExternalAuthRedirect: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const refreshToken = searchParams.get('refreshToken');

		if (refreshToken) {
			localStorage.setItem('token', refreshToken);
		}

		navigate('/');
	}, [searchParams]);

	return <ExternalAuthRedirectView />;
};

ExternalAuthRedirect.displayName = 'ExternalAuthRedirect';
ExternalAuthRedirect.defaultProps = {};

export default React.memo(ExternalAuthRedirect);
