export class CreateSecretContract {
	constructor(
		public readonly userId: string,
		public readonly label: string,
		public readonly expiration: Date | null,
	) {}
}
