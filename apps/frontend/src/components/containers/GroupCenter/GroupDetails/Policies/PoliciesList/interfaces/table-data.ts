export interface ITableData {
	number: string;
	label: string;
	library: string;
	category: string;
	rulesNum: number;
	configurations: string;
	key: number;
	render?: () => void;
}
