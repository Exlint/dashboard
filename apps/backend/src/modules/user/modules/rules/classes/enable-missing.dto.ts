import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import type { IEnableMissingRuleDto, IEnableMissingRuleResponseData } from '@exlint.io/common';
import { IsString } from 'class-validator';
import type { Rule } from '@prisma/client';

export class EnableMissingDto implements IEnableMissingRuleDto {
	@ApiProperty({ type: String, description: 'The rule name to enable', example: 'yazif-array' })
	@IsString()
	readonly name!: Rule['name'];
}

export class EnableMissingResponse implements IEnableMissingRuleResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;
}
