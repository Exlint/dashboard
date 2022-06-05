export interface IExternalAuthUser {
	readonly name: string;
	readonly email: string;
	readonly externalToken?: string;
}
