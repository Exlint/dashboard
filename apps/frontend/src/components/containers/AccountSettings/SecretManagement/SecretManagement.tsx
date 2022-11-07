import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Secret } from '@prisma/client';
import type { IGetAllSecretsResponseData } from '@exlint-dashboard/common';

import { backendApi } from '@/utils/http';

import type { ISecretItem } from './interfaces/secrets';

import SecretManagementView from './SecretManagement.view';

interface IProps {}

const SecretManagement: React.FC<IProps> = () => {
	const [secretsListState, setSecretsListState] = useState<ISecretItem[]>([]);

	const navigate = useNavigate();
	const location = useLocation();
	const createdSecretDetails = location.state as Pick<Secret, 'id' | 'secret'> | null;

	useEffect(() => {
		backendApi
			.get<IGetAllSecretsResponseData>('/user/secrets')
			.then((response) => {
				if (createdSecretDetails) {
					setSecretsListState(() =>
						response.data.secrets.filter((secret) => secret.id !== createdSecretDetails.id),
					);

					return;
				}

				setSecretsListState(() => response.data.secrets);
			})
			.catch(() => {
				return;
			});
	}, [backendApi, createdSecretDetails]);

	const onDeleteSecret = (secretId: string) => {
		backendApi.delete(`/user/secrets/${secretId}`).then(() => {
			setSecretsListState((prev) => prev.filter((secret) => secret.id !== secretId));
		});
	};

	const onRevokeAllSecrets = () => {
		backendApi.delete('/user/secrets').then(() => {
			setSecretsListState(() => []);
			navigate('', { replace: true });
		});
	};

	return (
		<SecretManagementView
			secretsList={secretsListState}
			createdSecretDetails={createdSecretDetails}
			onDeleteSecret={onDeleteSecret}
			onRevokeAllSecrets={onRevokeAllSecrets}
		/>
	);
};

SecretManagement.displayName = 'SecretManagement';
SecretManagement.defaultProps = {};

export default React.memo(SecretManagement);
