import { IsNumber, IsString, MinLength } from 'class-validator';

import { IsNullable } from '@/decorators/is-nullable.decorator';

export class CreateSecretDto {
	@IsString()
	@MinLength(1)
	readonly label!: string;

	@IsNumber()
	@IsNullable()
	readonly expiration!: number | null;
}
