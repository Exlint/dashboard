import type { IGroupData } from './groups-data';
import type { ILoggedUser } from './user';

interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IRegisterResponse extends ITokens {
	clientId: string;
	groupsData: IGroupData[];
}

export interface ILoginResponse extends ITokens, ILoggedUser {}

export interface IRefreshTokenResponse {
	accessToken: string;
}

export interface IAutoLoginResponse extends ILoggedUser {
	accessToken: string;
}
