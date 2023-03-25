import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { ICliAuthResponseData } from '@exlint.io/common';

import CliBackendService from '@/services/cli-backend';

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
		let email: string;

		try {
			const responseData = await CliBackendService.get<ICliAuthResponseData>('/user/auth/auth');

			cliToken = responseData.cliToken;
			email = responseData.email;
		} catch {
			navigate(`/auth?port=${port}`);

			return;
		}

		try {
			const res = await fetch(`http://localhost:${port}/${cliToken}/${email}`);

			if (!res.ok) {
				throw new Error();
			}

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
