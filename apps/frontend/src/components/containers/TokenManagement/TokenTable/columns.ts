interface IColumns {
	readonly title: string;
	readonly dataIndex: string;
	readonly key: string;
	readonly width: number;
}

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
	},
];
