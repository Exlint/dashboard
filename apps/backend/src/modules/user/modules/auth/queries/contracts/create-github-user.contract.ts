interface ICreateGithubUserData {
	readonly name: string;
	readonly email: string;
}

export class CreateGithubUserContract {
	constructor(public readonly data: ICreateGithubUserData) {}
}
