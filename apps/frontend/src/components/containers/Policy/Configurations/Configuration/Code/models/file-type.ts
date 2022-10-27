import { FileTypeValue } from '@/models/file-type';

export const fileTypeOptions = [
	{
		value: FileTypeValue.Json,
		label: 'JSON',
	},
	{
		value: FileTypeValue.Yaml,
		label: 'YAML',
	},
	{
		value: FileTypeValue.Js,
		label: 'JS',
	},
];
