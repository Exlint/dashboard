import { IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import type { ICreateSecretDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

import { IsFutureDate } from '../decorators/valid-expiration.decorator';

export class CreateSecretDto implements ICreateSecretDto {
	@ApiProperty({ type: String, description: 'The label of the new secret', example: 'Yazif Secret' })
	@IsString()
	@MinLength(1)
	@MaxLength(30)
	readonly label!: string;

	@ApiProperty({
		type: Number,
		description: 'The expiration date of the secret (in ms)',
		nullable: true,
		example: 111122222,
	})
	@IsFutureDate()
	@IsNullable()
	@Transform(({ value }: { value: number | null }) => {
		if (!value) {
			return null;
		}

		const date = new Date(value);
		const endOfDate = new Date(date.setHours(23, 59, 59, 999));

		return endOfDate.getTime();
	})
	readonly expiration!: number | null;
}
