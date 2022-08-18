import React from 'react';
import Table from 'rc-table';

import EDSvg from '@/ui/EDSvg';
import type { ISecrets } from '@/interfaces/secrets';

import type { IColumns } from './interfaces/table';

import classes from './TokenTable.module.scss';

interface IProps {
	readonly secrets: ISecrets[] | null;
	readonly formatDate: (_: number) => string;
	readonly onRefreshSecret: (_: string) => void;
	readonly onRevokeSecret: (_: string) => void;
}

const TokenTableView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
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
			render: (record: ISecrets) => (
				<a href="#" onClick={() => props.onRevokeSecret(record.key)}>
					<EDSvg className={classes['trashCanCircled']} name="trashCanCircled" />
				</a>
			),
		},
	];

	const table =
		props.secrets &&
		props.secrets.map((row, index) => {
			return {
				key: row.id,
				number: index + 1,
				label: (
					<>
						<span>{row.label}</span>
						<button type="button">
							<EDSvg className={classes['editLabel']} name="editLabel" />
						</button>
					</>
				),
				createdAt: props.formatDate(row.createdAt),
				expires: props.formatDate(row.expiration),
				refreshSecret: <EDSvg className={classes['refreshSecret']} name="refreshSecret" />,
				delete: <EDSvg className={classes['trashCanCircled']} name="trashCanCircled" />,
			};
		});

	return (
		<Table
			className={classes['secretsWrapper__table']}
			data={table ? table : undefined}
			columns={tableColumns}
			emptyText="No Secrets!"
		/>
	);
};

TokenTableView.displayName = 'TokenTableView';
TokenTableView.defaultProps = {};

export default React.memo(TokenTableView);
