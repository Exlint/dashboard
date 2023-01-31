import { ApiResponseProperty } from '@nestjs/swagger';
import type { Rule } from '@prisma/client';
import type { ILibraryData, IGetPolicyRulesResponseData, ILibraryRule } from '@exlint.io/common';

export class GetPolicyRulesResponse implements IGetPolicyRulesResponseData {
	@ApiResponseProperty({
		example: [{ myYazifRule: ['error'] }],
	})
	public rules!: (Pick<Rule, 'id' | 'name'> & Pick<ILibraryRule, 'category' | 'hasAutofix'>)[];

	@ApiResponseProperty({
		example: true,
	})
	public isFormConfiguration!: boolean;

	@ApiResponseProperty({
		example: true,
	})
	public description!: string | null;

	@ApiResponseProperty({
		example: 435534534534,
	})
	public types!: ILibraryData['types'];

	@ApiResponseProperty({
		example: 435534534534,
	})
	public categories!: ILibraryData['categories'];

	@ApiResponseProperty({
		example: 435534534534,
	})
	public createdAt!: number;

	@ApiResponseProperty({
		example: 22,
	})
	public count!: number;
}
