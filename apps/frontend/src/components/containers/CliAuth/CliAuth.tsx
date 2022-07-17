import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { cliBackendApi } from '@/utils/http';

import CliAuthView from './CliAuth.view';

interface IProps {}

const CliAuth: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const port = searchParams.get('port');

	if (!port) {
		navigate('/auth');
	}

	const onAuthClick = async () => {
		try {
			await cliBackendApi.get('/user/auth/auth');
		} catch {
			navigate(`/auth?port=${port}`);
		}
	};

	return <CliAuthView onAuthClick={onAuthClick} />;
};

CliAuth.displayName = 'CliAuth';
CliAuth.defaultProps = {};

export default React.memo(CliAuth);
