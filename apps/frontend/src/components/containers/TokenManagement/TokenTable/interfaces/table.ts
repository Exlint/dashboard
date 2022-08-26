import type { DefaultRecordType } from 'rc-table/lib/interface';

export interface ISecretsTable {
	readonly id: string;
	readonly number: number;
	readonly createdAt: number;
	readonly expiration: number;
	readonly label: string;
	readonly key: string;
}

export interface IColumns {
	readonly title: string;
	readonly dataIndex: string;
	readonly key: string;
	readonly width: number;
	readonly render?: (value: unknown, record: DefaultRecordType, index: number) => JSX.Element;
}
