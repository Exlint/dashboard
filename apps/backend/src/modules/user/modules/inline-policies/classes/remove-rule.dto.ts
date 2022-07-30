import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RemoveRuleDto {
	@ApiProperty({ type: String, description: 'The name of the rule to remove' })
	@IsString()
	@MinLength(1)
	readonly ruleName!: string;
}
