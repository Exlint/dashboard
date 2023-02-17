import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import type { ICreateComplianceDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class CreateComplianceDto implements ICreateComplianceDto {
	@ApiProperty({ type: String, description: 'The label for a compliance', example: 'Yazif Compliance' })
	@IsString()
	@MinLength(1)
	@MaxLength(30)
	readonly label!: string;

	@ApiProperty({
		type: String,
		description: 'The description for a compliance',
		example: 'Yazif Compliance is brilliant compliance',
	})
	@IsString()
	@IsNullable()
	readonly description!: string | null;
}
