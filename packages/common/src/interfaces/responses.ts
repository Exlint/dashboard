import type { Group, User, InlinePolicy, Secret, PolicyLibrary } from '@prisma/client';

export interface ICliAuthResponseData extends Pick<User, 'email'> {
	readonly cliToken: string;
}

export interface IGetGroupResponseData extends Pick<Group, 'label'> {}

export interface IAvailableLabelResponseData {
	readonly isAvailable: boolean;
}

export interface IRefreshTokenResponseData {
	readonly accessToken: string;
}

export interface IAutoAuthResponseData extends Pick<User, 'id' | 'name'> {
	readonly accessToken: string;
	readonly createdAt: number;
}

export interface IGetPolicyResponseData extends Pick<InlinePolicy, 'label' | 'library'> {
	readonly groupLabel: string;
}

export interface ICreatePolicyResponseData extends Pick<InlinePolicy, 'id'> {}

export interface ICreateSecretResponseData extends Pick<Secret, 'id' | 'secret'> {}

export interface IGetCodeConfigurationResponseData
	extends Pick<InlinePolicy, 'codeConfiguration' | 'codeType'> {}

export interface IRefreshSecretResponseData extends Pick<Secret, 'secret'> {}

export interface IGetAllGroupsResponseData {
	readonly groups: (Pick<Group, 'id' | 'label'> & { readonly librariesNames: PolicyLibrary[] })[];
}

export interface IGetAllSecretsResponseData {
	readonly secrets: (Pick<Secret, 'id' | 'label'> & { readonly expiration: number | null })[];
}

export interface IGetFileListResponseData extends Pick<InlinePolicy, 'fileList'> {}
