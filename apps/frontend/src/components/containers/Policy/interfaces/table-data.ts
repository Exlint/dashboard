export interface ITableData {
	'key': string;
	'number': string;
	'ruleName': string;
	'category': string;
	'description': string;
	'off/warn/error': string;
	'autofix': string;
	'render'?: () => void;
}
