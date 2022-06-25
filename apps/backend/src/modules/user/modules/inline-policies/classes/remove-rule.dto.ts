import { IsString, MinLength } from 'class-validator';

export class RemoveRuleDto {
	@IsString()
	@MinLength(1)
	readonly ruleName!: string;
}
