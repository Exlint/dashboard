interface ICreateGoogleUserData {
	readonly ip: string;
	readonly name: string;
	readonly email: string;
	readonly refreshToken: string;
}

export class CreateGoogleUserContract {
	constructor(public readonly data: ICreateGoogleUserData) {}
}
