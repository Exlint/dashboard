import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class EditLabelDto {
	@ApiProperty({ type: String, description: 'The new label for a group' })
	@IsString()
	@MinLength(1)
	readonly label!: string;
}
