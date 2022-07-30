import { IsISO8601, IsString, MinLength } from 'class-validator';

import { IsNullable } from '@/decorators/is-nullable.decorator';

import { IsValidExpiration } from '../decorators/valid-expiration.decorator';

export class CreateSecretDto {
	@IsString()
	@MinLength(1)
	readonly label!: string;

	@IsISO8601()
	@IsValidExpiration()
	@IsNullable()
	readonly expiration!: string | null;
}
