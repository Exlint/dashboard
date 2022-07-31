import { ApiProperty } from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';
import { IsEnum, IsString, MinLength } from 'class-validator';

export class CreateInlineDto {
	@ApiProperty({ type: String, description: 'The label of the new inline policy', example: 'Yazif Policy' })
	@IsString()
	@MinLength(1)
	readonly label!: string;

	@ApiProperty({ enum: PolicyLibrary, description: 'The library being used by the policy' })
	@IsEnum(PolicyLibrary)
	readonly library!: PolicyLibrary;
}
