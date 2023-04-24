import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import type { ISetIsFormConfigurationDto } from '@exlint.io/common';

export class SetIsFormConfigurationDto implements ISetIsFormConfigurationDto {
	@ApiProperty({
		type: Boolean,
		description: 'Whether user selected the form configuration to be applied',
		example: true,
	})
	@IsBoolean()
	public readonly isFormConfiguration!: boolean;
}
