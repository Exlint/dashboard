import { CodeType } from '@prisma/client';

export const fileTypeOptions = [
	{
		value: CodeType.JSON,
		label: 'JSON',
	},
	{
		value: CodeType.YAML,
		label: 'YAML',
	},
	{
		value: CodeType.JS,
		label: 'JS',
	},
];
