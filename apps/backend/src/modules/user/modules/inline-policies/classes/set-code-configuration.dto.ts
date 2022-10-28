import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';

import { IsNullable } from '@/decorators/is-nullable.decorator';
import { FileType } from '@/models/file-type';

export class SetCodeConfigurationDto {
	@ApiProperty({ type: String, description: 'Code configuration', example: '{ root: true }' })
	@IsString()
	@IsNullable()
	@MaxLength(1000)
	readonly code!: string | null;

	@ApiProperty({ enum: FileType, description: 'The file type' })
	@IsEnum(FileType)
	readonly type!: FileType;
}
