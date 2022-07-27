import type { IAutoAuthLoggedUser } from './user';

export interface IRefreshTokenResponse {
	accessToken: string;
}

export interface IAutoLoginResponse extends IAutoAuthLoggedUser {
	accessToken: string;
}
