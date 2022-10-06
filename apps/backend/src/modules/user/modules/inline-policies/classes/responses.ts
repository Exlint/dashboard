import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';

import { type ICategory, ILanguage, type ILibraryData, type IType } from '@/interfaces/libraries-data';

class GetLibrary implements Omit<ILibraryData, 'rules'> {
	@ApiResponseProperty({
		enum: PolicyLibrary,
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
