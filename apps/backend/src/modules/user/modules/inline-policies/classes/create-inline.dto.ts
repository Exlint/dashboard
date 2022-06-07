import { IsEnum, IsString, MinLength } from 'class-validator';

import { PolicyLibrary } from '@/models/policy-library';

export class CreateInlineDto {
	@IsString()
	@MinLength(1)
	readonly label!: string;

	@IsEnum(PolicyLibrary)
	readonly library!: PolicyLibrary;
}
