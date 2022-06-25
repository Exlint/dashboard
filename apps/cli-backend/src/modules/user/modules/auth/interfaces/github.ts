import { IUnknown } from './unknown';

interface IGithubEmail {
	readonly value: string;
}

export interface IGithubProfile extends IUnknown {
	readonly emails: IGithubEmail[];
}
