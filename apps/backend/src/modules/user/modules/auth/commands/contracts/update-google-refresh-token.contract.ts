export class UpdateGoogleRefreshTokenContract {
	constructor(public readonly userId: string, public readonly refreshToken: string) {}
}
