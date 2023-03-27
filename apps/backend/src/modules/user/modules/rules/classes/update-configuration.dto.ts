import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import type { IUpdateRuleConfiguratinoDto } from '@exlint.io/common';

export class UpdateRuleConfigurationDto implements IUpdateRuleConfiguratinoDto {
	@ApiProperty({
		type: Array,
		description: 'The configuration to update a rule with',
		example: ['error'],
	})
	@IsArray()
	public readonly configuration!: IUpdateRuleConfiguratinoDto['configuration'];
}
