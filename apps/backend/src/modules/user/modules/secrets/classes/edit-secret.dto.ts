import { IsString, MinLength } from 'class-validator';

export class EditSecretDto {
	@IsString()
	readonly secretId!: string;

	@IsString()
	@MinLength(1)
	readonly label!: string;
}
