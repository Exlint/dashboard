import { IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
	@MinLength(2)
	readonly name!: string;

	@IsEmail()
	readonly email!: string;

	@MinLength(6)
	readonly password!: string;
}
