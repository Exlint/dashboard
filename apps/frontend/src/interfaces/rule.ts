export interface IRule {
	readonly id?: string;
	readonly name: string;
	readonly description: string;
	readonly catagory: string;
	readonly alertType?: string;
	readonly configurations?: Record<string, unknown> | null;
}
