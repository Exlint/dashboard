import React from 'react';

import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';

import TokenTableView from './TokenTable.view';

interface IProps {
	readonly secrets: ISecrets[] | null;
}

const TokenTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const formatDate = (unixDate: number) => {
		const date = new Date(unixDate);

		return new Intl.DateTimeFormat('en-gb', { dateStyle: 'full' }).format(date);
	};

	const onRevokeSecret = (secretId: string) => {
		backendApi.delete(`user/secrets/${secretId}`);
	};

	const onRefreshSecret = (secretId: string) => {
		backendApi.delete(`user/secrets/refresh-secret/${secretId}`);
	};

	return (
		<TokenTableView
			secrets={props.secrets}
			formatDate={formatDate}
			onRefreshSecret={onRefreshSecret}
			onRevokeSecret={onRevokeSecret}
		/>
	);
};

TokenTable.displayName = 'TokenTable';
TokenTable.defaultProps = {};

export default React.memo(TokenTable);
