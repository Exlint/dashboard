import React from 'react';

import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';
import type { IRefreshSecretResponseData } from '@/interfaces/responses';

import TokenTableView from './TokenTable.view';

interface IProps {
	readonly secrets: ISecrets[] | null;
	readonly onRenderTable: () => void;
	readonly onOpenModal: () => void;
	readonly onDisplayModalRightSide: () => void;
	readonly onClientSecretChange: (_: string) => void;
	readonly onSecretLabelChange: (_: string) => void;
}

const TokenTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const formatDate = (unixDate: number) => {
		const date = new Date(unixDate);

		return new Intl.DateTimeFormat('en-gb', { dateStyle: 'full' }).format(date);
	};

	const onRevokeSecret = async (secretId: string) => {
		await backendApi.delete(`user/secrets/${secretId}`);
		props.onRenderTable();
	};

	const onRefreshSecret = async (secretId: string, secretLabel: string) => {
		await backendApi
			.patch<IRefreshSecretResponseData>(`user/secrets/refresh-secret/${secretId}`)
			.then((response) => {
				props.onClientSecretChange(response.data.clientSecret);
				props.onSecretLabelChange(secretLabel);
			});
		props.onOpenModal();
		props.onDisplayModalRightSide();
	};

	const onUpdateLabel = (secretLabel: string, secretId?: string) => {
		backendApi
			.patch(`/user/secrets/edit-label/${secretId}`, {
				label: secretLabel,
			})
			.then(() => props.onRenderTable());
	};

	return (
		<TokenTableView
			secrets={props.secrets}
			formatDate={formatDate}
			onRefreshSecret={onRefreshSecret}
			onRevokeSecret={onRevokeSecret}
			onUpdateLabel={onUpdateLabel}
		/>
	);
};

TokenTable.displayName = 'TokenTable';
TokenTable.defaultProps = {};

export default React.memo(TokenTable);
