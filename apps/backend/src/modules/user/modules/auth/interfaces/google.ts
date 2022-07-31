import type { IUnknown } from './unknown';

interface IGoogleName extends IUnknown {
	readonly givenName: string;
	readonly familyName: string;
}

interface IGoogleEmail {
	readonly value: string;
}

export interface IGoogleProfile extends IUnknown {
	readonly name: IGoogleName;
	readonly emails: IGoogleEmail[];
}
