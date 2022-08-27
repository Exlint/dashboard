import type { IGroup } from './group';
import type { ISecrets } from './secrets';

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

export interface IGetGroupsResponseData {
	readonly groups: IGroup[];
}

export interface ICreateGroupResponseData {
	readonly groupId: string;
}

export interface IGetSecretsResponseData {
	readonly secrets: ISecrets[];
}

export interface ICreateSecretResponseData {
	readonly clientSecret: string;
}

export interface IRefreshSecretResponseData {
	readonly clientSecret: string;
}

export interface IGetPolicyIdResponseData {
	readonly policyId: string;
}

export interface IGetPolicyResponseData {
	readonly groupLabel: string;
	readonly policyLabel: string;
	readonly library: 'ESLint' | 'Stylelint' | 'Depcheck' | 'Prettier' | 'Inflint';
	readonly createdAt: Date;
}
