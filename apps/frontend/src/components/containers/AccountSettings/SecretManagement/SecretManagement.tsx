import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { IGetAllSecretsResponseData } from '@exlint.io/common';

import useBackend from '@/hooks/use-backend';
import { backendApi } from '@/utils/http';

import SecretManagementView from './SecretManagement.view';

interface IProps {}

const SecretManagement: React.FC<IProps> = () => {
	const navigate = useNavigate();

	const { data: getAllSecretsResponseData, mutate: getAllSecretsMutate } =
		useBackend<IGetAllSecretsResponseData>('/user/secrets');

	const hasSecrets = useMemo(() => {
		if (!getAllSecretsResponseData) {
			return false;
		}

		return getAllSecretsResponseData.secrets.length > 0;
	}, [getAllSecretsResponseData]);

	const onRevokeAllSecrets = async () => {
		await getAllSecretsMutate(
			async (currentData) => {
				await backendApi.delete('/user/secrets');

				return {
					...currentData,
					secrets: [],
				};
			},
			{
				optimisticData: (currentData) => {
					return {
						...currentData,
						secrets: [],
					};
				},
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
