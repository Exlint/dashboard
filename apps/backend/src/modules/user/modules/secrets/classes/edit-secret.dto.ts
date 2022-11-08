import type { IEditSecretLabelDto } from '@exlint-dashboard/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class EditSecretDto implements IEditSecretLabelDto {
	@ApiProperty({ type: String, description: 'The new label for a secret', example: 'New Yazif Secret' })
	@IsString()
	@MinLength(1)
	@MaxLength(30)
	readonly label!: string;
}
