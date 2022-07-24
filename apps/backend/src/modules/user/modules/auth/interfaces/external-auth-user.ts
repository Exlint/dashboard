export interface IExternalAuthUser {
	readonly port?: string;
	readonly name: string;
	readonly email: string;
	readonly externalToken?: string;
}
