import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import type { IEnableRuleDto, IEnableRuleResponseData } from '@exlint-dashboard/common';
import { IsString } from 'class-validator';
import type { Rule } from '@prisma/client';

export class EnableRuleDto implements IEnableRuleDto {
	@ApiProperty({ type: String, description: 'The new label for a group', example: 'Yazif Group' })
	@IsString()
	readonly name!: Rule['name'];
}

export class EnableRuleResponse implements IEnableRuleResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;
}
