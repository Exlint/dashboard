import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import type { ISetIsFormConfigurationDto } from '@exlint-dashboard/common';

export class SetIsFormConfigurationDto implements ISetIsFormConfigurationDto {
	@ApiProperty({
		type: Boolean,
		description: 'Whether user selected the form configuratino to be applied',
		example: true,
	})
	@IsBoolean()
	readonly isFormConfiguration!: boolean;
}