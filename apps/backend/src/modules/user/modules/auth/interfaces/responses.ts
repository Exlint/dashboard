import { IGroupData } from './groups-data';
import { ILoggedUser } from './user';

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

export interface IGoogleRedirectResponse extends ITokens, ILoggedUser {}

export interface IGithubRedirectResponse extends ITokens, ILoggedUser {}
