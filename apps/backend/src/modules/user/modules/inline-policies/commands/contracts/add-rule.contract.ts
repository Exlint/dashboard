export class AddRuleContract {
	constructor(
		public readonly policyId: string,
		public readonly rule: string,
		public readonly userId: string,
		public readonly ip: string,
	) {}
}
