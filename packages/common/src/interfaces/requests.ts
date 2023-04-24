import type { CodeType, InlinePolicy, PolicyLibrary, Prisma, Rule } from '@prisma/client';

import type { FilesListType } from './files-list-type';

export interface ICreateSecretDto {
	readonly label: string;
	readonly expiration: number | null;
}

export interface IEditSecretLabelDto {
	readonly label: string;
}

export interface ICreateComplianceDto {
	readonly label: string;
	readonly description: string | null;
}

export interface IEditComplianceLabelDto {
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

export interface IEditComplianceDescriptionDto {
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

export interface ISetFormConfigurationDto {
	readonly data: Prisma.JsonValue;
}

export interface ISetIsFormConfigurationDto extends Pick<InlinePolicy, 'isFormConfiguration'> {}

export interface IEditPolicyDescriptionDto {
	readonly description: string | null;
}

export interface IEnableMissingRuleDto extends Pick<Rule, 'name'> {}

export interface IUpdateRuleConfigurationDto {
	readonly configuration: Prisma.JsonArray;
}

export interface IConfigureMissingRuleDto extends Pick<Rule, 'name'> {
	readonly configuration: Prisma.JsonArray;
}
