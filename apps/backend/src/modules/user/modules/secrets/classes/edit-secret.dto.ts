import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class EditSecretDto {
	@ApiProperty({ type: String, description: 'The new label for a secret' })
	@IsString()
	@MinLength(1)
	readonly label!: string;
}
