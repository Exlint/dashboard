export interface ITableData {
	number: number;
	label: string;
	library: string;
	category: string;
	rulesNum: number;
	configurations: string;
	key: number;
	render?: () => void;
}
