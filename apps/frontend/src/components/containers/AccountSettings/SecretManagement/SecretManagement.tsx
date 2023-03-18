import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { IGetAllSecretsResponseData } from '@exlint.io/common';

import useBackend from '@/hooks/use-backend';
import BackendService from '@/services/backend';

import SecretManagementView from './SecretManagement.view';

interface IProps {}

const SecretManagement: React.FC<IProps> = () => {
	const navigate = useNavigate();

	const { data: getAllSecretsResponseData, mutate: getAllSecretsMutate } =
		useBackend<IGetAllSecretsResponseData>('/user/secrets');

	const hasSecrets = useMemo(() => {
		return !!getAllSecretsResponseData && getAllSecretsResponseData.secrets.length > 0;
	}, [getAllSecretsResponseData]);

	const onRevokeAllSecrets = async () => {
		await getAllSecretsMutate(
			async () => {
				await BackendService.delete('/user/secrets');

				return { secrets: [] };
			},
			{
				optimisticData: { secrets: [] },
				rollbackOnError: true,
			},
		);

		navigate('', { replace: true });
	};

	return <SecretManagementView hasSecrets={hasSecrets} onRevokeAllSecrets={onRevokeAllSecrets} />;
};

SecretManagement.displayName = 'SecretManagement';
SecretManagement.defaultProps = {};

export default React.memo(SecretManagement);
