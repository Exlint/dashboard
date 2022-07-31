export class CreateSecretContract {
	constructor(
		public readonly userId: string,
		public readonly email: string,
		public readonly label: string,
		public readonly expiration: number | null,
	) {}
}
