import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { cliBackendApi, temporaryCliServerApi } from '@/utils/http';
import type { ICliAuthResponseData } from '@/interfaces/responses';

import CliAuthView from './CliAuth.view';

interface IProps {}

const CliAuth: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const port = searchParams.get('port');

	useEffect(() => {
		if (!port) {
			navigate('/auth');
		}
	}, [port]);

	const onAuthClick = async () => {
		let cliToken: string;

		try {
			const response = await cliBackendApi.get<ICliAuthResponseData>(`/user/auth/auth?port=${port}`);

			cliToken = response.data.cliToken;
		} catch {
			navigate(`/auth?port=${port}`);

			return;
		}

		try {
			await temporaryCliServerApi.get(`http://localhost:${port}/${cliToken}`);

			navigate('/cli-authenticated');
		} catch {
			navigate('/');
		}
	};

	return <CliAuthView onAuthClick={onAuthClick} />;
};

CliAuth.displayName = 'CliAuth';
CliAuth.defaultProps = {};

export default React.memo(CliAuth);
