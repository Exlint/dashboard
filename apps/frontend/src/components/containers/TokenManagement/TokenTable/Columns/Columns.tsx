import React from 'react';

import type { ISecrets } from '@/interfaces/secrets';
import { backendApi } from '@/utils/http';

interface IColumns {
	readonly title: string;
	readonly dataIndex: string;
	readonly key: string;
	readonly width: number;
	readonly render?: () => JSX.Element;
}

interface IProps {
	readonly secrets: ISecrets[];
}

const Columns: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onRevokeSecret = (secretId: string) => {
		backendApi.delete(`user/secrets/${secretId}`);
	};

	const conRevokeSecret = (key: React.Key, e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		this.setState(({ data }) => ({
			data: data.filter((item) => item.key !== key),
		}));
	};

	const tableColumns: IColumns[] = [
		{
			title: 'No.',
			dataIndex: 'number',
			key: 'number',
			width: 50,
		},
		{
			title: 'Label',
			dataIndex: 'label',
			key: 'label',
			width: 100,
		},
		{
			title: 'Created at',
			dataIndex: 'createdAt',
			key: 'createdAt',
			width: 150,
		},
		{
			title: 'Expires',
			dataIndex: 'expires',
			key: 'expires',
			width: 150,
		},
		{
			title: 'Refresh Secret',
			dataIndex: 'refreshSecret',
			key: 'refreshSecret',
			width: 100,
		},
		{
			title: 'Delete',
			dataIndex: 'delete',
			key: 'delete',
			width: 100,
			// eslint-disable-next-line react/display-name
			render: (record: ISecrets) => (
				// eslint-disable-next-line react/react-in-jsx-scope
				<a href="#" onClick={(event) => onRevokeSecret(record.key, event)}>
					Delete
				</a>
			),
		},
	];
};

Columns.displayName = 'Columns';
Columns.defaultProps = {};

export default React.memo(Columns);
