interface ICreateGithubUserData {
	readonly ip: string;
	readonly name: string;
	readonly email: string;
	readonly accessToken: string;
}

export class CreateGithubUserContract {
	constructor(public readonly data: ICreateGithubUserData) {}
}
