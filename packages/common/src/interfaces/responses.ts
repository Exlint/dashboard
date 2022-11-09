import type { Group, User, InlinePolicy, Secret, PolicyLibrary, Prisma } from '@prisma/client';

import type { ILibraryData } from './libraries-data';

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

export type IGetCodeConfigurationResponseData = Pick<InlinePolicy, 'codeConfiguration' | 'codeType'> &
	Pick<InlinePolicy, 'isFormConfiguration'>;

export interface IRefreshSecretResponseData extends Pick<Secret, 'secret'> {}

export interface IGetAllGroupsResponseData {
	readonly groups: (Pick<Group, 'id' | 'label'> & { readonly librariesNames: PolicyLibrary[] })[];
}

export interface IGetAllSecretsResponseData {
	readonly secrets: (Pick<Secret, 'id' | 'label'> & { readonly expiration: number | null })[];
}

export interface IGetFilesListResponseData {
	readonly filesList: string[];
}

export interface IGetLibrariesResponseData {
	readonly libraries: Omit<ILibraryData, 'rules' | 'configuration'>[];
}

export interface ICreateGroupResponseData extends Pick<Group, 'id'> {}

export interface IGetPoliciesResponseData extends Pick<Group, 'description'> {
	readonly count: number;
	readonly inlinePolicies: (Pick<InlinePolicy, 'id' | 'label' | 'library'> &
		Pick<ILibraryData, 'language'>)[];
}

export interface IGetFormSchemaResponseData extends Pick<InlinePolicy, 'isFormConfiguration'> {
	readonly schema: ILibraryData['configuration'];
	readonly formConfiguration: Prisma.JsonValue | null;
}