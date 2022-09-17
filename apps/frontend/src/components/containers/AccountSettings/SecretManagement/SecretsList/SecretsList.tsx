import React from 'react';

import { backendApi } from '@/utils/http';

import type { ISecret } from '../interfaces/secret';

import SecretsListView from './SecretsList.view';

interface IProps {
	readonly secretsList: ISecret[];
	readonly onDeleteSecret: (secretId: string) => void;
}

const SecretsList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onRefreshSecret = (secretId: string) => {
		backendApi.patch(`/user/secrets/refresh-secret/${secretId}`);
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
