import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary, Prisma } from '@prisma/client';

import { type ICategory, ILanguage, type ILibraryData, type IType } from '@/interfaces/libraries-data';

class GetLibrary implements Omit<ILibraryData, 'rules'> {
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

export class AvailableLabelResponse {
	@ApiResponseProperty({
		type: Boolean,
		example: true,
	})
	public isAvailable!: boolean;
}

export class GetLibrariesResponse {
	@ApiResponseProperty({
		type: [GetLibrary],
	})
	public libraries!: Omit<ILibraryData, 'rules'>[];
}

export class CreateResponse {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public policyId!: string;
}

export class GetResponse {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Group',
	})
	public groupLabel!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Policy',
	})
	public policyLabel!: string;

	@ApiResponseProperty({
		enum: PolicyLibrary,
		example: PolicyLibrary.ESLint,
	})
	public library!: PolicyLibrary;
}

export class GetFileListResponse {
	@ApiResponseProperty({
		type: [String],
		example: ['**/*.js', '*.ts'],
	})
	public fileList!: string[];
}

export class GetConfigurationResponse {
	@ApiResponseProperty({
		type: [Object],
		example: { root: true },
	})
	public configuration!: Prisma.JsonObject;
}
