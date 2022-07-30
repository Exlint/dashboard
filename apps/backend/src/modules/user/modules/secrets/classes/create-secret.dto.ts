import { IsISO8601, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { IsNullable } from '@/decorators/is-nullable.decorator';

import { IsValidExpiration } from '../decorators/valid-expiration.decorator';

export class CreateSecretDto {
	@ApiProperty({ type: String, description: 'The label of the new secret' })
	@IsString()
	@MinLength(1)
	readonly label!: string;

	@ApiProperty({
		type: String,
		description: 'The expiration date of the secret in ISO8601 format. Null for no expiration',
		nullable: true,
	})
	@IsISO8601()
	@IsValidExpiration()
	@IsNullable()
	readonly expiration!: string | null;
}
