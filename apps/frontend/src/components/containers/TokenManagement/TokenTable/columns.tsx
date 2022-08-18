import type { ISecrets } from '@/interfaces/secrets';
import { backendApi } from '@/utils/http';

interface IColumns {
	readonly title: string;
	readonly dataIndex: string;
	readonly key: string;
	readonly width: number;
	readonly render?: () => JSX.Element;
}

const onRevokeSecret = (secretId: string) => {
	backendApi.delete(`user/secrets/${secretId}`);
};

export const tableColumns: IColumns[] = [
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
