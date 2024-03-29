import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import type { ISetFormConfigurationDto } from '@exlint.io/common';

import { IsNullable } from '@/decorators/is-nullable.decorator';

import { IsValidJsonValue } from '../decorators/valid-json-value.decorator';

export class SetFormConfigurationDto implements ISetFormConfigurationDto {
	@ApiProperty({ type: String, description: 'Form configuration', example: { root: true } })
	@IsValidJsonValue()
	@IsNullable()
	public readonly data!: Prisma.JsonValue;
}
