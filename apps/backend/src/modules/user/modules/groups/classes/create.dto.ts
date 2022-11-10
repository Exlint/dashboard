import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import type { ICreateGroupDto } from '@exlint-dashboard/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class CreateGroupDto implements ICreateGroupDto {
	@ApiProperty({ type: String, description: 'The label for a group', example: 'Yazif Group' })
	@IsString()
	@MinLength(1)
	@MaxLength(30)
	readonly label!: string;

	@ApiProperty({
		type: String,
		description: 'The description for a group',
		example: 'Yazif Group is brilliant group',
	})
	@IsString()
	@IsNullable()
	readonly description!: string | null;
}
