import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary, CodeType, type Prisma } from '@prisma/client';
import {
	type IAvailableLabelResponseData,
	type ICategory,
	type ICreatePolicyResponseData,
	type IGetCodeConfigurationResponseData,
	type IGetPolicyResponseData,
	ILanguage,
	type ILibraryData,
	type IType,
	type IGetFilesListResponseData,
	type IGetLibrariesResponseData,
	type IGetFormSchemaResponseData,
} from '@exlint.io/common';

class GetLibrary implements Omit<ILibraryData, 'rules' | 'configuration'> {
	@ApiResponseProperty({
		enum: PolicyLibrary,
		example: PolicyLibrary.ESLint,
	})
	public name!: PolicyLibrary;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif',
	})
	public author!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Nice library by Yazif',
	})
	public description!: string;

	@ApiResponseProperty({
		type: [String],
		example: ['Linters'],
	})
	public types!: IType[];

	@ApiResponseProperty({
		type: [String],
		example: ['Code'],
	})
	public categories!: ICategory[];

	@ApiResponseProperty({
		type: String,
		example: 'JavaScript',
	})
	public language!: ILanguage;
}

export class AvailableLabelResponse implements IAvailableLabelResponseData {
	@ApiResponseProperty({
		type: Boolean,
		example: true,
	})
	public isAvailable!: boolean;
}

export class GetLibrariesResponse implements IGetLibrariesResponseData {
	@ApiResponseProperty({
		type: [GetLibrary],
	})
	public libraries!: Omit<ILibraryData, 'rules' | 'configuration'>[];
}

export class CreatePolicyResponse implements ICreatePolicyResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;
}

export class GetPolicyResponse implements IGetPolicyResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Group',
	})
	public groupLabel!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Policy',
	})
	public label!: string;

	@ApiResponseProperty({
		enum: PolicyLibrary,
		example: PolicyLibrary.ESLint,
	})
	public library!: PolicyLibrary;

	@ApiResponseProperty({
		type: Boolean,
		example: true,
	})
	public hasRules!: boolean;
}

export class GetFilesListResponse implements IGetFilesListResponseData {
	@ApiResponseProperty({
		type: [String],
		example: ['**/*.js', '*.ts'],
	})
	public filesList!: string[];
}

export class GetCodeConfigurationResponse implements IGetCodeConfigurationResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'module.exports = { root: true };',
	})
	public codeConfiguration!: string | null;

	@ApiResponseProperty({
		enum: CodeType,
		example: CodeType.JS,
	})
	public codeType!: CodeType | null;

	@ApiResponseProperty({
		example: true,
	})
	public isFormConfiguration!: boolean;
}

export class GetFormSchemaResponse implements IGetFormSchemaResponseData {
	@ApiResponseProperty({
		example: {
			yazif: {
				title: 'Yazif',
				description: 'What A Yazif',
				type: 'string',
			},
		},
	})
	public schema!: ILibraryData['configuration'];

	@ApiResponseProperty({
		example: {
			yazif: true,
		},
	})
	public formConfiguration!: Prisma.JsonObject | null;

	@ApiResponseProperty({
		example: true,
	})
	public isFormConfiguration!: boolean;
}
