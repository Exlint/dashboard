import type { IUnknown } from './unknown';

interface IGithubEmail {
	readonly value: string;
}

export interface IGithubProfile extends IUnknown {
	readonly username: string;
	readonly displayName?: string;
	readonly emails: IGithubEmail[];
}
