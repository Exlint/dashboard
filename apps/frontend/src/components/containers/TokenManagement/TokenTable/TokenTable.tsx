import React, { useEffect, useState } from 'react';

import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';
import type { IGetSecretsResponseData } from '@/interfaces/responses';

import TokenTableView from './TokenTable.view';

interface IProps {}

const TokenTable: React.FC<IProps> = () => {
	const [secretsState, setSecretsState] = useState<ISecrets[]>([]);

	const formatDate = (unixDate: number) => {
		const date = new Date(unixDate);

		return new Intl.DateTimeFormat('en-gb', { dateStyle: 'full' }).format(date);
	};

	useEffect(() => {
		backendApi.get<IGetSecretsResponseData>('user/secrets').then((response) => {
			setSecretsState(() => response.data.secrets);
		});
	}, []);

	const onRevokeSecret = (secretId: string) => {
		backendApi.delete(`user/secrets/${secretId}`);
	};

	const onRefreshSecret = (secretId: string) => {
		backendApi.delete(`user/secrets/refresh-secret/${secretId}`);
	};

	return (
		<TokenTableView
			secrets={secretsState}
			formatDate={formatDate}
			onRefreshSecret={onRefreshSecret}
			onRevokeSecret={onRevokeSecret}
		/>
	);
};

TokenTable.displayName = 'TokenTable';
TokenTable.defaultProps = {};

export default React.memo(TokenTable);
