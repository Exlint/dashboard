import { IsEmail, MinLength } from 'class-validator';

export class LoginDto {
	@IsEmail()
	readonly email!: string;

	@MinLength(6)
	readonly password!: string;
}
