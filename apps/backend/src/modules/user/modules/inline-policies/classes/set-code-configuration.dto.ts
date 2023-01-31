import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { CodeType } from '@prisma/client';
import type { ISetCodeConfigurationDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class SetCodeConfigurationDto implements ISetCodeConfigurationDto {
	@ApiProperty({ type: String, description: 'Code configuration', example: '{ root: true }' })
	@IsString()
	@IsNullable()
	@MaxLength(20000)
	readonly code!: string | null;

	@ApiProperty({ enum: CodeType, description: 'The code type', example: CodeType.JSON })
	@IsEnum(CodeType)
	readonly type!: CodeType;
}
