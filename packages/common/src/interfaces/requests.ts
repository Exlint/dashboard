import type { CodeType, InlinePolicy, PolicyLibrary } from '@prisma/client';

import type { FilesListType } from './files-list-type';

export interface ICreateSecretDto {
	readonly label: string;
	readonly expiration: number | null;
}

export interface IEditSecretLabelDto {
	readonly label: string;
}

export interface ICreateGroupDto {
	readonly label: string;
	readonly description: string | null;
}

export interface IEditGroupLabelDto {
	readonly label: string;
}

export interface IEditSecretDto {
	readonly label: string;
}

export interface ICreatePolicyDto {
	readonly label: string;
	readonly description: string | null;
	readonly library: PolicyLibrary;
}

export interface IEditGroupDescriptionDto {
	readonly description: string | null;
}

export interface IEditPolicyLabelDto {
	readonly label: string;
}

export interface ISetFilesListDto {
	readonly filesList: string;
	readonly type: FilesListType;
}

export interface ISetCodeConfigurationDto {
	readonly code: string | null;
	readonly type: CodeType;
}

export interface ISetIsFormConfigurationDto extends Pick<InlinePolicy, 'isFormConfiguration'> {}

export interface IEditPolicyDescriptionDto {
	readonly description: string | null;
}
