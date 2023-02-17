import type { IEditComplianceLabelDto } from '@exlint.io/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class EditComplianceLabelDto implements IEditComplianceLabelDto {
	@ApiProperty({ type: String, description: 'The new label for a compliance', example: 'Yazif Compliance' })
	@IsString()
	@MaxLength(30)
	@MinLength(1)
	readonly label!: string;
}
