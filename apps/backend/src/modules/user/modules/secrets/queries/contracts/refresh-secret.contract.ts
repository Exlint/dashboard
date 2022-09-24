export class RefreshSecretContract {
	constructor(
		public readonly userId: string,
		public readonly userEmail: string,
		public readonly secretId: string,
	) {}
}
