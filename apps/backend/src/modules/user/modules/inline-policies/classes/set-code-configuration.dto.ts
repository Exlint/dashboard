import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { CodeType } from '@prisma/client';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class SetCodeConfigurationDto {
	@ApiProperty({ type: String, description: 'Code configuration', example: '{ root: true }' })
	@IsString()
	@IsNullable()
	@MaxLength(1000)
	readonly code!: string | null;

	@ApiProperty({ enum: CodeType, description: 'The code type', example: CodeType.JSON })
	@IsEnum(CodeType)
	readonly type!: CodeType;
}
