import type { IUserSecretsGetAll } from './user-secrets';

export interface ICreateClientSecret {
	clientSecret: string;
}

export interface IRefreshClientSecret {
	clientSecret: string;
}

export interface IGetAllSecretsResponse {
	secrets: IUserSecretsGetAll[];
}
