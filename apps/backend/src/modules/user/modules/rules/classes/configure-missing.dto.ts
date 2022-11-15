import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import type { IConfigureMissingRuleDto, IConfigureMissingRuleResponseData } from '@exlint-dashboard/common';
import { IsArray, IsString } from 'class-validator';
import type { Rule } from '@prisma/client';

export class ConfigureMissingRuleDto implements IConfigureMissingRuleDto {
	@ApiProperty({ type: String, description: 'The new rule name to configure', example: 'yazif-array' })
	@IsString()
	readonly name!: Rule['name'];

	@ApiProperty({
		type: Array,
		description: 'The configuration to apply a rule with',
		example: ['error'],
	})
	@IsArray()
	readonly configuration!: IConfigureMissingRuleDto['configuration'];
}

export class ConfigureMissingRuleResponse implements IConfigureMissingRuleResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;
}
