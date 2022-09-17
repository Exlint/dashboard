import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { backendApi } from '@/utils/http';

import type { IGetAllSecretsResponse, ISecret, ISecretDetails } from './interfaces/secret';

import SecretManagementView from './SecretManagement.view';

interface IProps {}

const SecretManagement: React.FC<IProps> = () => {
	const [secretsListState, setSecretsListState] = useState<ISecret[]>([]);

	const navigate = useNavigate();
	const location = useLocation();
	const createdSecretDetails = location.state as ISecretDetails | null;

	useEffect(() => {
		backendApi
			.get<IGetAllSecretsResponse>('/user/secrets')
			.then((response) => {
				if (createdSecretDetails) {
					setSecretsListState(() =>
						response.data.secrets.filter((secret) => secret.id !== createdSecretDetails.secretId),
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
