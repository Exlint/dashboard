import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import type { IEditComplianceDescriptionDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class EditComplianceDescriptionDto implements IEditComplianceDescriptionDto {
	@ApiProperty({
		type: String,
		nullable: true,
		description: 'The new description for a compliance',
		example: 'Yazif Compliance Description',
	})
	@IsString()
	@IsNullable()
	public readonly description!: string | null;
}
