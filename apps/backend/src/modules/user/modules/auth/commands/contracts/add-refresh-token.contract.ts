export class AddRefreshTokenContract {
	constructor(public readonly userId: string, public readonly token: string) {}
}
