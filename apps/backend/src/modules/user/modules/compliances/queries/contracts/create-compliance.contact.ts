export class CreateComplianceContract {
	constructor(
		public readonly userId: string,
		public readonly ip: string,
		public readonly label: string,
		public readonly description: string | null,
	) {}
}
