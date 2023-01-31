import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import type { IEditPolicyDescriptionDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class EditPolicyDescriptionDto implements IEditPolicyDescriptionDto {
	@ApiProperty({
		type: String,
		nullable: true,
		description: 'The new description for a policy',
		example: 'Yazif Policy Description',
	})
	@IsString()
	@IsNullable()
	readonly description!: string | null;
}
