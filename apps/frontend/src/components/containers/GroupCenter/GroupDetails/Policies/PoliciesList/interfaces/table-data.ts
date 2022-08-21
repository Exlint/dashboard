export interface ITableData {
	number: string;
	label: string;
	libraryName: string;
	category: string;
	rulesNum: number;
	configurations: string;
	key: string;
	render?: () => void;
}
