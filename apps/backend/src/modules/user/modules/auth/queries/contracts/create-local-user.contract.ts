interface ICreateLocalUserData {
	readonly name: string;
	readonly email: string;
	readonly password: string;
}

export class CreateLocalUserContract {
	constructor(public readonly data: ICreateLocalUserData) {}
}
