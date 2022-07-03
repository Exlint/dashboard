export class ValidRefreshTokenContract {
	constructor(public readonly userId: string, public readonly token: string) {}
}
