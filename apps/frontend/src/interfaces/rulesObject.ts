export interface IRulesObject {
	readonly rulesObject: { [key: string]: string } | Record<string, Record<string, unknown>>;
}
