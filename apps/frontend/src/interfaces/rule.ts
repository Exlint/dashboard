export interface IRule {
	readonly ruleName?: string;
	readonly alertType?: string;
	readonly category?: string;
	readonly hasConfig?: boolean;
	readonly description?: string;
}
