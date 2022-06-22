import { PolicyLibrary } from '@prisma/client';
import { IsEnum, IsString, MinLength } from 'class-validator';

export class CreateInlineDto {
	@IsString()
	@MinLength(1)
	readonly label!: string;

	@IsEnum(PolicyLibrary)
	readonly library!: PolicyLibrary;
}
