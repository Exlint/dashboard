import { ApiProperty } from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';
import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import type { ICreatePolicyDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class CreatePolicyDto implements ICreatePolicyDto {
	@ApiProperty({ type: String, description: 'The label of the new inline policy', example: 'Yazif Policy' })
	@IsString()
	@MaxLength(30)
	@MinLength(1)
	readonly label!: string;

	@ApiProperty({
		type: String,
		description: 'The description of the new inline policy',
		example: 'Yazif Policy description',
	})
	@IsString()
	@IsNullable()
	readonly description!: string | null;

	@ApiProperty({ enum: PolicyLibrary, description: 'The library being used by the policy' })
	@IsEnum(PolicyLibrary)
	readonly library!: PolicyLibrary;
}
