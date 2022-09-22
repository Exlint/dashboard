import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class EditDescriptionDto {
	@ApiProperty({
		type: String,
		nullable: true,
		description: 'The new description for a group',
		example: 'Yazif Group Description',
	})
	@IsString()
	@IsNullable()
	@MinLength(1)
	readonly description!: string | null;
}
