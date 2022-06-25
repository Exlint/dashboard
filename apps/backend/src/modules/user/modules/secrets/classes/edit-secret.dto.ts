import { IsString, MinLength } from 'class-validator';

export class EditSecretDto {
	@IsString()
	@MinLength(1)
	readonly label!: string;
}
