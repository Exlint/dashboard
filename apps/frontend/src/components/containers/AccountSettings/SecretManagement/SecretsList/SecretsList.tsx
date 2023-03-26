import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { IGetAllSecretsResponseData, IRefreshSecretResponseData } from '@exlint.io/common';

import useBackend from '@/hooks/use-backend';
import BackendService from '@/services/backend';

import type { ISecretRouteState } from '../interfaces/secrets';
import SecretsListView from './SecretsList.view';

interface IProps {}

const SecretsList: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const createdSecretDetails: ISecretRouteState = location.state;

	const { data: getAllSecretsResponseData, mutate: getAllSecretsMutate } =
		useBackend<IGetAllSecretsResponseData>('/user/secrets');

	const secretsList = useMemo(() => {
		if (getAllSecretsResponseData && createdSecretDetails) {
			return getAllSecretsResponseData.secrets.filter(
				(secret) => secret.id !== createdSecretDetails.id,
			);
		}

		if (getAllSecretsResponseData && !createdSecretDetails) {
			return getAllSecretsResponseData.secrets;
		}

		return [];
	}, [getAllSecretsResponseData, createdSecretDetails]);

	const onRefreshSecret = async (secretId: string) => {
		const responseData = await BackendService.patch<IRefreshSecretResponseData>(
			`/user/secrets/refresh-secret/${secretId}`,
		);

		navigate('/account-settings/secret-management', {
			state: {
				id: secretId,
				secret: responseData.secret,
			},
		});
	};

	const onDeleteSecret = async (secretId: string) => {
		await getAllSecretsMutate(
			async (currentData) => {
				await BackendService.delete(`/user/secrets/${secretId}`);

				return {
					...currentData,
					secrets: currentData!.secrets.filter((secret) => secret.id !== secretId),
				};
			},
			{
				optimisticData: (currentData) => {
					return {
						...currentData,
						secrets: currentData!.secrets.filter((secret) => secret.id !== secretId),
					};
				},
				rollbackOnError: true,
			},
		);
	};

	return (
		<SecretsListView
			withCreatedSecret={createdSecretDetails !== null}
			secretsList={secretsList}
			onRefreshSecret={onRefreshSecret}
			onDeleteSecret={onDeleteSecret}
		/>
	);
};

SecretsList.displayName = 'SecretsList';
SecretsList.defaultProps = {};

export default React.memo(SecretsList);
