interface ICreateGoogleUserData {
	readonly name: string;
	readonly email: string;
}

export class CreateGoogleUserContract {
	constructor(public readonly data: ICreateGoogleUserData) {}
}
