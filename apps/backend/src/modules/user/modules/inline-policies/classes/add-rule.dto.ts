import { IsJSON } from 'class-validator';

export class AddRuleDto {
	@IsJSON()
	readonly rule!: string;
}
