import { IUnknown } from './unknown';

interface IGithubEmail {
	readonly value: string;
}

export interface IGithubProfile extends IUnknown {
	readonly username: string;
	readonly displayName?: string;
	readonly emails: IGithubEmail[];
}

export interface IGithubUser {
	readonly name: string;
	readonly email: string;
}
