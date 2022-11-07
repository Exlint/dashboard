import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { IRefreshSecretResponseData } from '@exlint-dashboard/common';

import { backendApi } from '@/utils/http';

import type { ISecret } from '../interfaces/secret';

import SecretsListView from './SecretsList.view';

interface IProps {
	readonly secretsList: ISecret[];
	readonly onDeleteSecret: (secretId: string) => void;
}

const SecretsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onRefreshSecret = (secretId: string) => {
		backendApi
			.patch<IRefreshSecretResponseData>(`/user/secrets/refresh-secret/${secretId}`)
			.then((response) => {
				navigate('/account-settings/secret-management', {
					state: {
						secretId,
						secretValue: response.data.secret,
					},
				});
			});
	};

	return (
		<SecretsListView
			secretsList={props.secretsList}
			onRefreshSecret={onRefreshSecret}
			onDeleteSecret={props.onDeleteSecret}
		/>
	);
};

SecretsList.displayName = 'SecretsList';
SecretsList.defaultProps = {};

export default React.memo(SecretsList);
