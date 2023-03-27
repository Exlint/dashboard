import type { IEditPolicyLabelDto } from '@exlint.io/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class EditPolicyLabelDto implements IEditPolicyLabelDto {
	@ApiProperty({ type: String, description: 'The new label for a policy', example: 'Yazif Policy' })
	@IsString()
	@MaxLength(30)
	@MinLength(1)
	public readonly label!: string;
}
