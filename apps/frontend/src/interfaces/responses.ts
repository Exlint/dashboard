import type { IGroup } from './group';

export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
}

export interface IRefreshTokenResponseData {
	readonly accessToken: string;
}

export interface ICliAuthResponseData {
	readonly cliToken: string;
	readonly email: string;
}

export interface IUpdatePolicyConfigurationResponseData {
	readonly configuration: string;
}

export interface IGetGroupsResponseData {
	readonly groups: IGroup[];
}

export interface ICreateGroupResponseData {
	readonly groupId: string;
}
