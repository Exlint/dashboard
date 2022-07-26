import type { IGroup } from './group';

export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
}

export interface IRefreshTokenResponseData {
	readonly accessToken: string;
}

export interface IGetGroupsResponseData {
	readonly groupsList: IGroup[];
}

export interface ICreateGroupResponseData {
	readonly id: string;
}
