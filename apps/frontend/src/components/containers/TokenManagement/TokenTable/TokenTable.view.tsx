import React from 'react';
import Table from 'rc-table';

import EDSvg from '@/ui/EDSvg';
import type { ISecrets } from '@/interfaces/secrets';

import { tableColumns } from './columns';

import classes from './TokenTable.module.scss';

interface IProps {
	readonly secrets: ISecrets[];
	readonly formatDate: (_: number) => string;
	readonly onRefreshSecret: (_: string) => void;
	readonly onRevokeSecret: (_: string) => void;
}

const TokenTableView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const data = props.secrets.map((row, index) => {
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
			refreshSecret: (
				<EDSvg
					className={classes['refreshSecret']}
					name="refreshSecret"
					onClick={() => props.onRefreshSecret(row.id)}
				/>
			),
			delete: (
				<EDSvg
					className={classes['trashCanCircled']}
					name="trashCanCircled"
					onClick={() => props.onRevokeSecret(row.id)}
				/>
			),
		};
	});

	return (
		<Table
			className={classes['secretsWrapper__table']}
			data={data}
			columns={tableColumns}
			emptyText="No Secrets!"
		/>
	);
};

TokenTableView.displayName = 'TokenTableView';
TokenTableView.defaultProps = {};

export default React.memo(TokenTableView);
