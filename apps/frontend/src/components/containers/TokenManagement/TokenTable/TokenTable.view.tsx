/* eslint-disable max-lines */
import React from 'react';
import Table from 'rc-table';
import type { DefaultRecordType } from 'rc-table/lib/interface';

import EDSvg from '@/ui/EDSvg';
import EDInlineEdit from '@/ui/EDInlineEdit';

import type { ISecrets } from '@/interfaces/secrets';
import type { IColumns } from './interfaces/table';

import classes from './TokenTable.module.scss';

interface IProps {
	readonly secrets: ISecrets[] | null;
	readonly formatDate: (_: number) => string;
	readonly onRefreshSecret: (_: string) => void;
	readonly onRevokeSecret: (_: string) => void;
	readonly onUpdateLabel: (secretLabel: string, secretId?: string) => void;
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
			render: (_: unknown, __: DefaultRecordType, index: number) => {
				const sercretId = props.secrets![index]!.id;

				return (
					<button type="button" onClick={() => props.onRefreshSecret(sercretId)}>
						<EDSvg className={classes['refreshSecret']} name="refreshSecret" />
					</button>
				);
			},
		},
		{
			title: 'Delete',
			dataIndex: 'delete',
			key: 'delete',
			width: 100,
			render: (_: unknown, __: DefaultRecordType, index: number) => {
				const sercretId = props.secrets![index]!.id;

				return (
					<button type="button" onClick={() => props.onRevokeSecret(sercretId)}>
						<EDSvg className={classes['trashCanCircled']} name="trashCanCircled" />
					</button>
				);
			},
		},
	];

	const table =
		props.secrets &&
		props.secrets.map((row, index) => {
			return {
				key: row.id,
				number: index + 1,
				label: (
					<EDInlineEdit
						key="secretLabel"
						valueFromDB={row.label}
						maxLength={20}
						id={row.id}
						onUpdateInput={props.onUpdateLabel}
					/>
				),
				createdAt: props.formatDate(row.createdAt),
				expires: props.formatDate(row.expiration),
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
