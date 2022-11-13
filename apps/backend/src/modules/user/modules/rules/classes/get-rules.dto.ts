import { ApiResponseProperty } from '@nestjs/swagger';
import type { IGetRulesResponseData } from '@exlint-dashboard/common';
import type { Prisma } from '@prisma/client';

class RuleItem {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string | null;

	@ApiResponseProperty({
		type: String,
		example: 'yazif-rule',
	})
	public name!: string;

	@ApiResponseProperty({
		type: Object,
		example: ['error'],
	})
	public configuration!: Prisma.JsonArray | null;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Description',
	})
	public description!: string;

	@ApiResponseProperty({
		type: Boolean,
		example: true,
	})
	public hasAutofix!: boolean;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Category',
	})
	public category!: string;
}

export class GetRulesResponse implements IGetRulesResponseData {
	@ApiResponseProperty({
		type: [RuleItem],
	})
	public rules!: RuleItem[];
}
