import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class EditGroupDescriptionDto {
	@ApiProperty({
		type: String,
		nullable: true,
		description: 'The new description for a group',
		example: 'Yazif Group Description',
	})
	@IsString()
	@IsNullable()
	readonly description!: string | null;
}
