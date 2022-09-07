export interface IRule {
	readonly ruleName?: string;
	alertType?: string;
	readonly category?: string;
	readonly hasConfig?: boolean;
	readonly description?: string;
	configurations?: string;
}
