import React from 'react';

import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';

import TokenTableView from './TokenTable.view';

interface IProps {
	readonly secrets: ISecrets[] | null;
	readonly onRenderTable: () => void;
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

	const onRefreshSecret = (secretId: string) => {
		backendApi.delete(`user/secrets/refresh-secret/${secretId}`);
	};

	const onUpdateLabel = (value: string) => {
		console.log(value);

		// backendApi
		// 	.patch(`/user/secrets/edit-label/${props.selectedGroup.id}`, {
		// 		label: newLabel,
		// 	})
		// 	.catch(() => {
		// 		props.onUpdateGroupLabel(props.selectedGroup.id, oldLabel);
		// 	});
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
