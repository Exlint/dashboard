interface IUnknown {
	readonly [key: string]: unknown;
}

interface IGoogleName extends IUnknown {
	readonly givenName: string;
	readonly familyName: string;
}

interface IGoogleEmail extends IUnknown {
	readonly value: string;
}

export interface IGoogleProfile extends IUnknown {
	readonly name: IGoogleName;
	readonly emails: IGoogleEmail[];
}

export interface IGoogleUser {
	readonly email: string;
	readonly name: string;
}
